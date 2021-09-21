var btnTranslate=document.querySelector("#Translate");;
var inpText= document.querySelector("#inp-text");

var txtOutput=document.querySelector("#output");
 
var serverURL ="	https://api.funtranslations.com/translate/minion.json"

function TranslationURL(input)
{
    return serverURL+"?"+"text="+input
}




 btnTranslate.addEventListener("click",function clickEventHandler(){
     

     var theText = inpText.value;
     fetch(TranslationURL(theText))
        .then(response=> response.json())
        .then(json =>{
            var translatedText=json.contents.translated;
            txtOutput.innerText=translatedText;
        })
     
  .catch(errorHandler)
 })
