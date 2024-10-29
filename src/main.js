import "./index.css"
import singleTask from "./components/singleTask";
import {titleCase, randomID} from "./utils";


const formEl = document.querySelector("[data-form]");
const inputEl=document.querySelector("[data-user-input]");
const taskcontainerE1 = document.querySelector("[data-task-container]")

//variables
const tasks=[];
function renderTask(){
    taskcontainerE1.innerHTML ="";
    const frag = document.createDocumentFragment();
    tasks.forEach((task) => {
    frag.appendChild (singleTask(task.text));
});
}

// MARK: Listener
formEl.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent refresh
    if (!inputEl.value) return; // Gaurd Clause

    //  Creating new task
  const newTask = {
    text: titleCase(inputEl.value),
    isCompleted: false,
    id: state.length,
  };

    //adding
    tasks.unshift(newtask);
    console.log(tasks);

    //clearing input value
    inputE1.value="";
})
    
taskContainerEl.addEventListener("click", (e) => {
    if (e.target.tagName === "INPUT") {
      console.log(e.target.id);
    }
  });
  
  // Render the current year
  const showYearEl = document.querySelector(".show-year");
  showYearEl.textContent = new Date().getFullYear();