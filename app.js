var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/morse.json"

function errorHandler(error) {
   console.log("error occured",error)
   alert("Something is wrong with the server! Try again later.")
}

function getTranslationURL(text) {
   return serverURL + "?" + "text=" + text
}

function clickHandler() {
  
   var inputText = txtInput.value; // accept input

   fetch (getTranslationURL(inputText)) //processing when communicating with server
      .then(response => response.json())
      .then(json => {
         var translatedText = json.contents.translated;
         outputDiv.innerText = translatedText; } // convert json response into output
         )
      .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)


