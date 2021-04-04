                        // TAKING INPUT

let input = prompt("What would you like to do");
const todos = ["Collect Chicken Eggs", "Clean Litter Box"];

while (input !== "quit" && input !== 'q') {
    if (input === "list") {
        console.log("**********")
        for (let i = 0; i < todos.length; i++) {
            console.log(`#${i}: ${todos[i]}`);
        }
        console.log("**********")
    }
    input = prompt("What would you like to do")
}
console.log("Ok You quit the app")