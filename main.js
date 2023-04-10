import { dogInfo } from "/dogData.js"

const dogList = document.querySelector(".dogpick")
const model = document.getElementById("model")
const modelInner = document.getElementById("model-inner")
let selectedMood = ""

function getEmotions(dogs){
    const emotionArray =[]
    for(let dog of dogs){
        for(let emotion of dog.type){
            if(emotionArray.includes(emotion)){
                
            } else if(!emotionArray.includes(emotion)){
                emotionArray.push(emotion)
            }
        }
    }
    return emotionArray
}

function renderDogMoods(dogs){
    let displayBtn = ``
    const moods = getEmotions(dogs)
    for (let mood of moods){
        displayBtn += `
            <button type="button" class="button" id="${mood}">
                    ${mood}
            </button>
            `
    }
    dogList.innerHTML = displayBtn
}

renderDogMoods(dogInfo)


document.addEventListener("click", function(e){
    if(e.target.className === "button"){ 
        selectedMood = e.target.id
        displayModel() 
    }
})
   

// fix function to push only gifs images to array if radio is checked



function getDogImage(dogs){
    const dogImageArray = []
    for (let dog of dogs){
        for (let emotion of dog.type)
        if(emotion === selectedMood){
            dogImageArray.push(dog.imageName)
        }
    }
    const randomImage = Math.floor(Math.random() * dogImageArray.length)
    return dogImageArray[randomImage]
}

function displayModel(){
    const dogImage = getDogImage(dogInfo)
    modelInner.innerHTML = `
    <h2 class="close-btn" id="close-btn">X</h2>
    <img src="/${dogImage}" width="300px">
    `
    model.style.display = "block"
    
}

document.addEventListener('click', (e)=>{
    if(e.target.id === "close-btn"){
        model.style.display = "none"
    }
    
})
