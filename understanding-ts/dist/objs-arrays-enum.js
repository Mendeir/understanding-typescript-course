"use strict";
{
    const person = {
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
