/// <reference path="drag-drop-interfaces.ts" />
/// <reference path="project-model.ts" />
/// <reference path="project-state.ts" />
/// <reference path="validation.ts" />
/// <reference path="autobind-decorator.ts" />

namespace App {
    abstract class Component<T extends HTMLElement, U extends HTMLElement> {
        templateElement: HTMLTemplateElement;
        hostElement: T;
        element: U;

        constructor(
            templateId: string,
            hostElementId: string,
            insertAtStart: boolean,
            newElementId?: string,
        ) {
            this.templateElement = document.getElementById(
                templateId,
            )! as HTMLTemplateElement;
            this.hostElement = document.getElementById(hostElementId)! as T;

            const importedNode = document.importNode(
                this.templateElement.content,
                true,
            );
            this.element = importedNode.firstElementChild as U;

            if (newElementId) {
                this.element.id = newElementId;
            }

            this.attach(insertAtStart);
        }

        private attach(insertAtBeginning: boolean) {
            this.hostElement.insertAdjacentElement(
                insertAtBeginning ? "afterbegin" : "beforeend",
                this.element,
            );
        }

        abstract configure(): void;
        abstract renderContent(): void;
    }

    class ProjectItem
        extends Component<HTMLUListElement, HTMLLIElement>
        implements Draggable
    {
        private project: Project;

        get persons() {
            return this.project.people === 1
                ? "1 person"
                : `${this.project.people} persons`;
        }

        constructor(hostId: string, project: Project) {
            super("single-project", hostId, false, project.id);
            this.project = project;

            this.configure();
            this.renderContent();
        }

        @Autobind
        dragStartHandler(event: DragEvent) {
            event.dataTransfer!.setData("text/plain", this.project.id);
            event.dataTransfer!.effectAllowed = "move";
        }

        dragEndHandler(_: DragEvent) {}

        configure(): void {
            this.element.addEventListener("dragstart", this.dragStartHandler);
            this.element.addEventListener("dragend", this.dragEndHandler);
        }

        renderContent(): void {
            this.element.querySelector("h2")!.textContent = this.project.title;
            this.element.querySelector("h3")!.textContent =
                this.persons + " assigned";
            this.element.querySelector("p")!.textContent =
                this.project.description;
        }
    }

    class ProjectList
        extends Component<HTMLDivElement, HTMLElement>
        implements DragTarget
    {
        assignedProjects: Project[];

        constructor(private type: "active" | "finished") {
            super("project-list", "app", false, `${type}-projects`);
            this.assignedProjects = [];

            this.configure();
            this.renderContent();
        }

        @Autobind
        dragOverHandler(event: DragEvent): void {
            if (
                event.dataTransfer &&
                event.dataTransfer.types[0] === "text/plain"
            ) {
                event.preventDefault();
                const listElement = this.element.querySelector("ul")!;
                listElement.classList.add("droppable");
            }
        }

        @Autobind
        dropHandler(event: DragEvent): void {
            const projectId = event.dataTransfer!.getData("text/plain");
            projectState.moveProject(
                projectId,
                this.type === "active"
                    ? ProjectStatus.Active
                    : ProjectStatus.Finished,
            );
        }

        @Autobind
        dragLeaveHandler(_: DragEvent): void {
            const listElement = this.element.querySelector("ul")!;
            listElement.classList.remove("droppable");
        }

        private renderProjects() {
            const listElement = document.getElementById(
                `${this.type}-projects-list`,
            )! as HTMLUListElement;

            listElement.innerHTML = "";

            for (const projectItem of this.assignedProjects) {
                new ProjectItem(
                    this.element.querySelector("ul")!.id,
                    projectItem,
                );
            }
        }

        configure() {
            this.element.addEventListener("dragover", this.dragOverHandler);
            this.element.addEventListener("dragleave", this.dragLeaveHandler);
            this.element.addEventListener("drop", this.dropHandler);

            projectState.addListener((projects: Project[]) => {
                const relevantProjects = projects.filter((project) => {
                    if (this.type === "active") {
                        return project.status === ProjectStatus.Active;
                    }

                    return project.status === ProjectStatus.Finished;
                });
                this.assignedProjects = relevantProjects;
                this.renderProjects();
            });
        }

        renderContent() {
            const listId = `${this.type}-projects-list`;
            this.element.querySelector("ul")!.id = listId;
            this.element.querySelector("h2")!.textContent =
                this.type.toUpperCase() + " PROJECTS";
        }
    }

    class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
        titleInputElement: HTMLInputElement;
        descriptionInputElement: HTMLInputElement;
        peopleInputElement: HTMLInputElement;

        constructor() {
            super("project-input", "app", true, "user-input");

            this.titleInputElement = this.element.querySelector(
                "#title",
            ) as HTMLInputElement;
            this.descriptionInputElement = this.element.querySelector(
                "#description",
            ) as HTMLInputElement;
            this.peopleInputElement = this.element.querySelector(
                "#people",
            ) as HTMLInputElement;

            this.configure();
        }

        configure() {
            this.element.addEventListener("submit", this.submitHandler);
        }

        renderContent(): void {}

        private gatherUserInput(): [string, string, number] | void {
            const enteredTitle = this.titleInputElement.value;
            const enteredDescription = this.descriptionInputElement.value;
            const enteredPeople = this.peopleInputElement.value;

            const titleValidatable: Validatable = {
                value: enteredTitle,
                required: true,
            };

            const descriptionValidatable: Validatable = {
                value: enteredDescription,
                required: true,
                minLength: 5,
            };

            const peopleValidatable: Validatable = {
                value: enteredPeople,
                required: true,
                min: 1,
                max: 5,
            };

            if (
                !validate(titleValidatable) ||
                !validate(descriptionValidatable) ||
                !validate(peopleValidatable)
            ) {
                alert("Invalid input, please try again!");
                return;
            } else {
                return [enteredTitle, enteredDescription, +enteredPeople];
            }
        }

        @Autobind
        private submitHandler(event: Event) {
            event.preventDefault();
            const userInput = this.gatherUserInput();

            if (Array.isArray(userInput)) {
                const [title, desc, people] = userInput;
                projectState.addProject(title, desc, people);
                this.clearInputs();
            }
        }

        private clearInputs() {
            this.titleInputElement.value = "";
            this.descriptionInputElement.value = "";
            this.peopleInputElement.value = "";
        }
    }

    new ProjectInput();
    new ProjectList("active");
    new ProjectList("finished");
}
