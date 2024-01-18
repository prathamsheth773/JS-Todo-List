// register = () =>{
//     let name = document.getElementById("name").value
//     let alertContainer = document.getElementById('alert');
//     let alertMsg = document.getElementById('alertMsg');
//     if(name.length > 4){
//         //manipulating classes for notification
//         alertContainer.classList.remove('d-none')
//         alertContainer.classList.add('alert-success');
//     }
//     else {
//         //manipulating classes for notification
//         alertContainer.classList.remove('d-none')
//         alertContainer.classList.add('alert-danger');
//     }
//     //in setTimeout time is in miliseconds
//     setTimeout(()=>{
//         alertContainer.classList.add('d-none') 
//         alertContainer.classList.remove('alert-success')
//         alertContainer.classList.remove('alert-danger')

//     },2000)
// }
const alltodo = [] ;
newTodo = () =>{
    let todoContainer = document.getElementById('todo-container')
    let todobox = document.getElementById('todobox');
    let todo = document.getElementById('todo').value
    alltodo.push(todo)
    console.log(alltodo)
    todo.innerHTML = ""
    alltodo.map((task)=>{
    console.log(task);
    let check = document.createElement('input')
    check.type = "checkbox";
    let list = document.createElement('p');
    list.innerHTML = task;
    todobox.appendChild(check);
    todobox.appendChild(list);
    todoContainer.appendChild(todobox)
    });
}