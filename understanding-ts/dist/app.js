"use strict";
{
    function merge(objA, objB) {
        return Object.assign(objA, objB);
    }
    const mergeObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
    console.log(mergeObj.age);
}
