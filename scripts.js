console.log("running js")
let counter = 0

const removeButton = document.querySelector("#remove")
const addButton = document.querySelector("#add")
const countNumber = document.querySelector("#count")

function remove(){
    counter = counter - 1
    changeCounter()
    logCounter()
    if(counter>=0){
        deleteStar()
    }
}

function add(){
    counter = counter+1
    changeCounter()
    logCounter()
    if(counter>0){
        starComponent()
    }
}

function logCounter(){
    console.log(counter)
}
function changeCounter(){
    countNumber.innerText = counter
}
removeButton.addEventListener("click",remove)
addButton.addEventListener("click",add)

function starComponent(){
    const section = document.querySelector(".star")
    let star = document.createElement("div")
    star.innerHTML=`
    <div class="star-box">
                <img src="moya.gif" />
            </div>
            `
    section.appendChild(star)
}

function deleteStar(){
    const section = document.querySelector(".star")
    section.removeChild(section.lastElementChild)
}