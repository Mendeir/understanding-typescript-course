{
    function merge<T extends object, U extends object>(objA: T, objB: U) {
        return Object.assign(objA, objB);
    }

    const mergeObj = merge<
        { name: string; hobbies: string[] },
        { age: number }
    >({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
    console.log(mergeObj.age);
}
