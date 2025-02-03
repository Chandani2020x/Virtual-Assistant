let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector('#voice')

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning kajal")
    }
    else if(hours>=12 && hours <16){
        speak("Good afternoon kajal")
    }else{
        speak("Good Evening kajal")
    }
}

window.addEventListener('load',()=>{
  wishMe()
})

let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
   let currentIndex=event.resultIndex
   let transcript=event.results[currentIndex][0].transcript
   content.innerText=transcript
   takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})
function takeCommand(message){
    btn.style.display="flex"
    voice.style.display="none"
    if(message.includes("Hi")||message.includes("hey")||message.includes("hello")||message.includes("Hello")){
        speak("Hi ,how can i help you?")
    }
    else if(message.includes("who are you")){
        speak("i am Nova ,a virtual assistant,created by Chandani raj pandey")
    }
    else if(message.includes("how many languages")){
        speak("well,i know 2 languages that are english and hindi,soo which language you are comfortable with..?")
    }
    else if(message.includes("hindi")){
        speak("namaskaar, kaise madad kar sakta hu mai aapka..?")
    }
    else if(message.includes("my friend")){
        speak("namaste ,hope you are doing well")
    }
    else if(message.includes("how are you")){
        speak("i am good,what about you")
    }else if(message.includes("thank you")||message.includes("Thank You")){
        speak("Welcome")
    }
    else if(message.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://www.youtube.com")
    }
    else if(message.includes("open google")){
        speak("opening google...")
        window.open("https://google.com","_blank")
    }
    else if(message.includes("open facebook")||message.includes("Open Facebook")){
        speak("opening facebook...")
        window.open("https://facebook.com","_blank")
    }
    else if(message.includes("open instagram")||message.includes("Open Instagram")){
        speak("opening instagram...")
        window.open("https://instagram.com","_blank")
    }
    
    else if(message.includes("open calculator")){
        speak("opening calculator..")
        window.open("calculator://")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp..")
        window.open("whatsapp://")
    }
    else if(message.includes("time")){
        let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
    }
    else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
    }
    
    else{
        let finalText="this is what i found on internet regarding" + message.replace("Nova","") || message.replace("okk tell me","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message}`)
    }
    
}
