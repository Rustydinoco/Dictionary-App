const apiUrl ='https://api.dictionaryapi.dev/api/v2/entries/en/'
const searchInput = document.querySelector('.search input')
const Btn = document.querySelector('.search button')
const audio = document.querySelector('.sound')

async function getWord(word){
    const response = await fetch(apiUrl+word)
    if (response.status==404) {
        document.querySelector('.error').style.display = 'block'
        document.querySelector('.result').style.display = 'none'
    } else {let data = await response.json()
        console.log(data) 

        document.querySelector('.result').innerHTML =  
        `<div class="word">
        <h3>${searchInput.value}</h3>
        <button onclick="playSound()">
        <i class='bx bxs-volume-full'></i>
        </button>
    </div>
    <div class="details">
        <p>${data[0].meanings[0].partOfSpeech}</p>
        <p>/${data[0].phonetic}/</p>
    </div>
    <p class="word-meaning">
        ${data[0].meanings[0].definitions[0].definition}
    </p>
    <p class="word-example">
        ${data[0].meanings[0].definitions[0].example || ""}
    </p>`;
    audio.setAttribute("src", `https:${data[0].phonetics[0].audio}`);
        document.querySelector('.error').style.display = 'none'
        document.querySelector('.result').style.display = 'block'
    }}
    

Btn.addEventListener('click',()=>getWord(searchInput.value))
function playSound() {
    audio.play ();
}