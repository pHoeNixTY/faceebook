let obj = {
    User : "kjdfjkds",
    pass : 19292,
};

async function getvalue() {
    document.getElementById("login").addEventListener("click", async () => {
        let user = document.getElementById("Email").value;
        obj["User"] = user
        console.log('done');
        
    });
    return
}

async function printvalue() {
    await getvalue();
    // console.log(a);
    // console.log(arr);
    for (const key in obj) {
        const element = obj[key];
        console.log(key, element);
    }

}

printvalue()

