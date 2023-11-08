const apiUrl ='https://api.dictionaryapi.dev/api/v2/entries/en/'
const searchInput = document.querySelector('.search input')
const Btn = document.querySelector('.search button')


async function getWord(word){
    const response = await fetch(apiUrl+word)
    if (response.status==404) {
        document.querySelector('.error').style.display = 'block'
        document.querySelector('.result').style.display = 'none'
    } else {let data = await response.json()
        console.log(data) 
        
    }
    
}
Btn.addEventListener('click',()=>getWord(searchInput.value))
