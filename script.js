const URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("text-container");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-word-btn");


btn.addEventListener('click' , ()=>{
    let inputWord = document.getElementById("word-search").value;
    console.log(inputWord);
    fetch(`${URL}${inputWord}`)
    .then((response) => response.json())
    .then((data)=>{
        console.log(data);
        result.innerHTML = `<div class="word-title">
        <h1>${inputWord}</h1>
        <button class="volume"><i class="fa-solid fa-volume-high"></i></button>
    </div>
    <div class="small-details">
        <span>${data[0].meanings[0].partOfSpeech} / ${data[0].phonetic}/</span>
    </div>
    <div class="word-meaning">
        <p id="meaning">${data[0].meanings[0].definitions[0].definition}</p>
    </div>`
 
    })
    .catch((error)=>{
        result.innerHTML = `<h3>Could not find the word you searched</h3>`;
    })
})
