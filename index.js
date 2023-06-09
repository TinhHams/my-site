const quoteText = document.querySelector(".quote"),
quoteBtn = document.querySelector("button"),
quoteAuthor = document.querySelector(".author-name"),
soundBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".copy"),
linkBtn = document.querySelector(".link"),
toggle = document.getElementById("toggleDark"),
body = document.querySelector(".body");

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
        alert("Quote copied!");
    },100);
});

quoteBtn.addEventListener("click", randomQuote);

// Light/Dark Mode
toggle.addEventListener("click", function(){
    this.classList.toggle("fa-sun");
    if(this.classList.toggle("fa-moon")) {
        document.body.style.backgroundColor = "#65647C";
        document.body.style.transition = "1s";
        soundBtn.classList.add("darkMode");
        copyBtn.classList.add("darkMode");
        linkBtn.classList.add("darkMode");
        quoteBtn.classList.add("darkModeBtn");
    } else {
        document.body.style.backgroundColor = "#F1D4E5";
        document.body.style.transition = "1s";
        soundBtn.classList.remove("darkMode");
        copyBtn.classList.remove("darkMode");
        linkBtn.classList.remove("darkMode");
        quoteBtn.classList.remove("darkModeBtn");
    }
})