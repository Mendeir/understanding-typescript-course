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
    console.log(countAndDescribe(["Sports", "Cooking"]));
    function extractAndConvert(obj, key) {
        return "Value: " + obj[key];
    }
    extractAndConvert({ name: "Max" }, "name");
    class DataStorage {
        constructor() {
            this.data = [];
        }
        addItem(item) {
            this.data.push(item);
        }
        removeItem(item) {
            this.data.splice(this.data.indexOf(item), 1);
        }
        getItems() {
            return [...this.data];
        }
    }
    const textStorage = new DataStorage();
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
