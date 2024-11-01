{
    const person: {
        name: string;
        age: number;
        hobbies: string[];
        role: [number, string];
    } = {
        name: "Maximilian",
        age: 30,
        hobbies: ["Sports", "Cooking"],
        role: [2, "Author"],
    };

    console.log(person.name);

    for (const hobby of person.hobbies) {
        console.log(hobby.toUpperCase());
    }
}
