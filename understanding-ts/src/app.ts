{
    const names: Array<string> = ["Max", "Manuel"];
    names[0].split(" ");

    const promise: Promise<string> = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("This is done!");
        }, 2000);
    });
}
