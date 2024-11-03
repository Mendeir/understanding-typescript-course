{
    function merge<T extends object, U extends object>(objA: T, objB: U) {
        return Object.assign(objA, objB);
    }

    const mergeObj = merge<
        { name: string; hobbies: string[] },
        { age: number }
    >({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
    console.log(mergeObj.age);

    interface Lengthy {
        length: number;
    }

    function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
        let descriptionText = "Got no value.";

        if (element.length === 1) {
            descriptionText = "Got 1 element.";
        } else if (element.length > 1) {
            descriptionText = "Got " + element.length + " elements.";
        }

        return [element, descriptionText];
    }

    console.log(countAndDescribe(["Sports", "Cooking"]));

    function extractAndConvert<T extends object, U extends keyof T>(
        obj: T,
        key: U,
    ) {
        return "Value: " + obj[key];
    }

    extractAndConvert({ name: "Max" }, "name");

    class DataStorage<T extends string | number | boolean> {
        private data: T[] = [];

        addItem(item: T) {
            this.data.push(item);
        }

        removeItem(item: T) {
            this.data.splice(this.data.indexOf(item), 1);
        }

        getItems() {
            return [...this.data];
        }
    }

    const textStorage = new DataStorage<string>();
    textStorage.addItem("MG");
    textStorage.addItem("MG2");
    textStorage.removeItem("MG2");
    console.log(textStorage.getItems());

    // const objStorage = new DataStorage<object>();
    // const mgObj = { name: "MG" };
    // objStorage.addItem(mgObj);
    // objStorage.addItem({ name: "TheGreat" });
    // objStorage.removeItem({ name: "TheGreat" });
    // console.log(objStorage.getItems());
}
