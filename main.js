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

function getDogImage(dogs){
    const isGif = document.getElementById('gifs').checked
    const dogImage = dogs.filter((dog)=>{
            if(isGif){
                return dog.type.includes(selectedMood) && dog.isGif
            } else {
                return dog.type.includes(selectedMood)
            }
        })
    const dogImageArray = []
        for(let dog of dogImage){
            dogImageArray.push(dog.imageName)
        }
        const randomImage = Math.floor(Math.random() * dogImage.length)
        return dogImageArray[randomImage]
}

// disable buttons when image is open and enable buttons when iamge is closed

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
