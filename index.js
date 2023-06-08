const quoteText = document.querySelector(".quote"),
quoteBtn = document.querySelector("button"),
quoteAuthor = document.querySelector(".author-name"),
soundBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".copy"),
linkBtn = document.querySelector(".link");

function randomQuote () {
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";

    // Fetching random code from github link 
    fetch("https://api.quotable.io/random").then(res => res.json()).then( result => {
        console.log(result);
        quoteText.innerText = result.content;
        quoteAuthor.innerText = result.author;
        quoteBtn.innerText = "New Quote"
        quoteBtn.classList.remove("loading");
    });
} 

soundBtn.addEventListener("click", () =>{
    let utterance = new SpeechSynthesisUtterance (`${quoteText.innerText} by ${quoteAuthor.innerText}`);
    utterance.lang = "en-US";
    speechSynthesis.speak(utterance);
});

copyBtn.addEventListener("click", () =>{
    navigator.clipboard.writeText(quoteText.innerText);
    setTimeout(function (){
        alert("Copied Quote!");
    },100);
});

quoteBtn.addEventListener("click", randomQuote);
