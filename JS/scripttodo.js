// // Déclaration et affectation des variables en récupérant les éléments du DOM

// const taskInput = document.getElementById("taskInput");
// const taskList = document.getElementById("taskList");
// const addTaskButton = document.getElementById("addTaskButton");

// // Chargement de toutes les taches précédentes

// function loadtask(){
// let tasks = JSON.parse(localStorage.getItem(tasks));
// if (tasks === null){ ;
// tasks = [];
// }
// else {
//     tasks.forEach(task => {
//         addTaskToDOM(task);
        
//     });
// }}
// // Ajouter une tache au DOM
// function addTaskToDOM (task){
//     const li =
//     document.createElement('li');
//     li.textContent =task;
//     taskList.appendChild(li);
// };

// // Ajouter une tache

// function addTask() {
//     const task=taskInput.value.trim();
//    if (task === ''){
//    alert('entrer une tache dans le champ de saisie');
// }
//    else { addTaskToDOM(task);
//          saveTask(task);
//          taskInput.value = '';
//    }
// }
// addTaskButton.onclick = addTask;

// // sauvegarder la tache dans le localstorage
// function saveTask(task){
//     const tasks = JSON.parse(localStorage.getItem('tasks'))|| [];
//     tasks.push(task);
//     localStorage.setItem('tasks',JSON.stringify(tasks));
// }
// // Evènements

// window.onload = loadtask;

// // Supprimer les éléments de la liste

// function deleteTask(task) {
//     let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
//     tasks = tasks.filter(t => t !== task);
//     localstrorage.setItem('tasks',JSON.stringify(tasks));

// }

// // Créer le bouton de supression

// const deleteButton = document.createElement('button');
// deleteButton.textContent= 'supprimer';
// deleteButton.onclick = () =>{
//  deleteTask(task);
//  li.remove();
// }
//  li.appendChild(deleteButton);
//  taskList.appendChild(li);

//  // Mettre à jour l'affichage
// loadtask();
 // Déclaration et affectation des variables en récupérant les éléments du DOM
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const addTaskButton = document.getElementById("addTaskButton");

// Chargement de toutes les tâches précédentes
function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks === null) {
        tasks = [];
    } else {
        tasks.forEach(task => {
            addTaskToDOM(task);
        });
    }
}

// Ajouter une tâche au DOM
function addTaskToDOM(task) {
    const li = document.createElement('li');
    li.textContent = task;

    // Créer le bouton de suppression
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Supprimer';
    
    // Événement pour supprimer la tâche
    deleteButton.onclick = () => {
        deleteTask(task);
        li.remove();
    };

    li.appendChild(deleteButton);
    taskList.appendChild(li);
}

// Ajouter une tâche
function addTask() {
    const task = taskInput.value.trim();
    if (task === '') {
        alert('Veuillez entrer une tâche dans le champ de saisie');
    } else {
        addTaskToDOM(task);
        saveTask(task);
        taskInput.value = '';
    }
}

addTaskButton.onclick = addTask;

// Sauvegarder la tâche dans le localStorage
function saveTask(task) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Supprimer les éléments de la liste
function deleteTask(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Événements
window.onload = loadTasks;