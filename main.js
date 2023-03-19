import { dogInfo } from "/dogData.js"

const dogList = document.getElementById("dogpick")

function getEmotions(dogs){
    const emotionArray =[]
    for(let dog of dogs){
        for(let emotion of dog.type){
            if(emotionArray.includes(dog.type)){
                
            } else if(!emotionArray.includes(dog.type)){
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
            <p class="button">
                <span class="btnTextStyle">${mood}</span>
            </p>`
    }
    dogList.innerHTML = displayBtn
}

renderDogMoods(dogInfo)