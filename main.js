import { dogInfo } from "/dogData.js"

const dogList = document.getElementById("dogpick")
const model = document.getElementById("model")

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
            <p class="button" id="${mood}">
                <span class="btnTextStyle" id="${mood}">
                    ${mood}
                </span>
            </p>`
    }
    dogList.innerHTML = displayBtn
}

renderDogMoods(dogInfo)

dogList.addEventListener("click", function(e){
    console.log(e.target.id)
})

