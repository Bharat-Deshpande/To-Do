const inputBox = document.getElementById("input-box") 
const listContainer = document.getElementById("list-container") 

function addTask(){
    if(inputBox.value === ''){
        alert('You need to add something')
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", function(e){
        if (e.target.tagName === "LI"){
            e.target.classList.toggle("checked");
            saveData()
        }
        else if (e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            saveData()
        }
    },false);


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function showtask(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showtask()

inputBox.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        addTask();
    }
})

function handleKeyPress(e) {
     if (e.key === "Delete") {
        if (document.activeElement === inputBox) {
            let selectedLi = listContainer.querySelector(".checked");
            if (selectedLi) {
                selectedLi.remove();
                saveData();
            }
        }
    }
}

inputBox.addEventListener("keydown", handleKeyPress())


