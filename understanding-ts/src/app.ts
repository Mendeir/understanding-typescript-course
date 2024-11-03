{
    function merge<T, U>(objA: T, objB: U) {
        return { ...objA, ...objB };
    }

    const mergeObj = merge<
        { name: string; hobbies: string[] },
        { age: number }
    >({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
    console.log(mergeObj.age);
}
