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
const allTask = []
todoButton.addEventListener('click', newTodo = () => {
    let todoContainer = document.getElementById('todoContainer')
    let inputTask = document.getElementById('todo').value
    allTask.push(inputTask);
    todoContainer.innerHTML = "";
    allTask.map((task) => {
        let paragraph = document.createElement('p')
        let check = document.createElement('input')
        check.type = "checkbox"
        paragraph.innerHTML = task
        todoContainer.appendChild(paragraph)
        todoContainer.appendChild(check)
        document.getElementById('todo').value = " "
        check.addEventListener('click', () => {
            if (paragraph.style.textDecoration == "line-through")
                paragraph.style.textDecoration = "none"
            else
                paragraph.style.textDecoration = "line-through"
        })
    })

})