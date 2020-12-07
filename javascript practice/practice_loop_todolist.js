//start
const todos = [];

while (true) {
    let input = prompt("What would you like to do?");

    //new
    if (input === 'new') {
        let newTodo = prompt("What TODO would you add?");
        todos.push(newTodo);

    } else if (input === 'list') {
        //list
        console.log('*************************');
        for (let todo of todos) {
            console.log(todo);
        }
        console.log('*************************');

    } else if (input === 'delete') {
        //delete
        let toDelete = prompt("What TODO would you like to delete?");
        let index = todos.indexOf(toDelete);
        while (index === -1) {
            let toDelete = prompt("Doesn't exist in the list. What TODO would you like to delete?");
            index = todos.indexOf(toDelete);
        }
        todos.splice(index, 1);

    } else if (input === 'quit') {
        //quit
        console.log("Okay bye");
        break;
    } else {
        console.log('Not a valid input.')
    }



}