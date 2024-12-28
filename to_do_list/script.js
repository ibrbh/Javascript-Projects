const newTask = document.querySelector("#newTask");
const newDescription = document.querySelector("#newDescription");
const newDate = document.querySelector("#newDate");
const tasks = document.querySelector("#tasks");

let taskList = [];

// localStorage'dan görevleri yükleme
const loadTasksFromLocalStorage = () => {
    const storedTasks = localStorage.getItem("taskList");
    console.log(storedTasks);
    if (storedTasks) {
        taskList = JSON.parse(storedTasks);
        renderTasks();
    }
};

// localStorage'a görevleri kaydetme
const saveTasksToLocalStorage = () => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
};

const handleClick = function () {
    if ((newTask.value.length == 0) || (newDescription.value.length == 0) || (newDate.value.length == 0)) {
        alert("Alanları Boş Bırakmayın...")
    } else {

        taskList.push({ task: newTask.value, description: newDescription.value, date: newDate.value, updateSitutation: true })
        taskList.sort((a, b) => new Date(b.date) - new Date(a.date));
        saveTasksToLocalStorage(); // Görevleri kaydet
        renderTasks();

        newTask.value = "";
        newDescription.value = "";
        newDate.value = "";
    }
};

const ut = (task) => {
    tasks.innerHTML += `
    <div class="task">
        <h4>${task.date}</h4>
        <h1>${task.task}</h1>
        <p>${task.description}</p>
        <button class="delete">Sil</button>
        <button class="update">Güncelle</button>
    </div>`;
}

const uy = (newTaskTwoValue,newDescriptionTwoValue,newDateTwoValue) => {
    tasks.innerHTML += `
    <div class=updateTask>
        <label>Görev</label>
        <input type="text" class="newTaskTwo" placeholder="Görev giriniz..." value=${newTaskTwoValue}>
        <label>Açıklama</label>
        <textarea class="newDescriptionTwo" cols="5" rows="5">${newDescriptionTwoValue}</textarea>
        <label>Son Tarih</label>
        <input class="newDateTwo" type="date" name="" id="" value=${newDateTwoValue}>
        <button class="update">Kaydet</button>
    </div> `;
}

const renderTasks = () => {
    tasks.innerHTML = "";

    taskList.forEach(task => {
        if (task.updateSitutation) {
            ut(task);
        } else {
            uy(task.task,task.description,task.date);
        }
    });



    const deleteButton = document.querySelectorAll(".delete");
    deleteButton.forEach((button, index) => {
        button.onclick = function () {
            taskList.splice(index, 1);
            saveTasksToLocalStorage(); // Silme sonrası kaydet
            renderTasks();
        }
    })

    const updateButton = document.querySelectorAll(".update");
    const newTaskTwo = document.querySelector(".newTaskTwo");
    const newDescriptionTwo = document.querySelector(".newDescriptionTwo");
    const newDateTwo = document.querySelector(".newDateTwo");

    updateButton.forEach((button, index) => {
        button.onclick = function () {

            if (taskList[index].updateSitutation) {
                taskList[index].updateSitutation = false;
            } else {
                if ((newTaskTwo.value.length == 0) || (newDescriptionTwo.value.length == 0) || (newDateTwo.value.length == 0)) {
                    alert("Alanı Boş Bırakma!")
                } else {
                    taskList[index].updateSitutation = true;
                    taskList[index].task = newTaskTwo.value;
                    taskList[index].description = newDescriptionTwo.value;
                    taskList[index].date = newDateTwo.value;
                }
            }

            taskList.sort((a, b) => new Date(b.date) - new Date(a.date));
            saveTasksToLocalStorage(); // Güncelleme sonrası kaydet
            renderTasks();
        }
    })
}

// Sayfa yüklendiğinde görevleri localStorage'dan yükle
loadTasksFromLocalStorage();