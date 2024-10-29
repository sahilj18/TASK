import './index.css'
import {titlecase} from './utils' ;
const formE1 = document.querySelector("data");
const inputE1 =document.querySelector("[data-user-input]");
const taskcontainerE1 = document.querySelector("[data-task-container]")

//variables
const tasks=[];
function renderTask(){
    taskcontainerE1.innerHTML ="";
    const frag = document.createDocumentFragment();
    tasks.forEach((task) => {
    frag.appendChild (SingleTask(task.text));
});



formE1.addEventListener("submit",(e) => {
    e.preventDefault();
    if (!inputE1.value)return; //gaurd clause
    
    const newTask= {
        text:titlecase(inputE1.value),
        isCompleted:false,
        id:tasks,length,
    };
    //adding
    tasks.unshift(newtask);
    console.log(tasks);

    //clearing input value
    inputE1.value="";
})
    