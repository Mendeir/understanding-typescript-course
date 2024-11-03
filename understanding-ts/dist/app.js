"use strict";
{
    function merge(objA, objB) {
        return Object.assign(objA, objB);
    }
    const mergeObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
    console.log(mergeObj.age);
    function countAndDescribe(element) {
        let descriptionText = "Got no value.";
        if (element.length === 1) {
            descriptionText = "Got 1 element.";
        }
        else if (element.length > 1) {
            descriptionText = "Got " + element.length + " elements.";
        }
        return [element, descriptionText];
    }
    console.log(countAndDescribe(['Sports', 'Cooking']));
}
