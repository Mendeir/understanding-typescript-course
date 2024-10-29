const person: {
    name: string;
    age: number;
    hobbies: string[];
} = {
    name: "Maximilian",
    age: 30,
    hobbies: ["Sports", "Cooking"],
};

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
