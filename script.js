console.log("Welcome to Music Player");
// Variables
let index=0;
let audioElement=new Audio("1.mp3");
let masterPlay=document.getElementById("masterPlay");
let myProgressBar=document.getElementById("myProgressBar");
let songItem=Array.from(document.getElementsByClassName("songItem"));
let bImage=document.querySelector(".bt-img");
let pText=document.querySelector(".play-text");


let songs=[
    {songName:"Unforgettable", songPath:"1.mp3", coverPath:"1.jpeg"},
    {songName:"Unforgettable", songPath:"2.mp3", coverPath:"2.jpeg"},
    {songName:"Unforgettable", songPath:"3.mp3", coverPath:"3.jpeg"},
    {songName:"Unforgettable", songPath:"4.mp3", coverPath:"4.jpeg"},
    {songName:"Unforgettable", songPath:"5.mp3", coverPath:"5.jpeg"},
    {songName:"Unforgettable", songPath:"6.mp3", coverPath:"6.jpg"},
    {songName:"Unforgettable", songPath:"7.mp3", coverPath:"7.jpeg"},
    {songName:"Unforgettable", songPath:"8.mp3", coverPath:"8.jpeg"},
    {songName:"Unforgettable", songPath:"9.mp3", coverPath:"9.jpeg"}
]
songItem.forEach((element,i)=>{
    element.getElementsByClassName("image")[0].style.backgroundImage=songs[i].coverPath;
})


// Handle Play/Pause Click
masterPlay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause");
        masterPlay.classList.add("fa-play");

    }
})

// Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    // Update SeekBar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;

})

myProgressBar.addEventListener("change",()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})


Array.from(document.getElementsByClassName("buttonz")).forEach((element)=>{
    element.addEventListener("click",(e)=>{
        index=parseInt(e.target.id);
        audioElement.src=`${index}.mp3`;
        audioElement.currentTime=0;
        if(audioElement.paused || audioElement.currentTime<=0){
            masterPlay.classList.remove("fa-play");
            masterPlay.classList.add("fa-pause");
        }

        bImage.src=`${index}.jpeg`;
        audioElement.play();
        pText.innerText=document.getElementById(`${index}t`).innerText;
    })
})
// like button
const btn = document.getElementById('btnheart');
btn.addEventListener('click', function onClick(event) {
    // 👇️ optionally change text color
    btn.style.color = 'red';
});

// Next btn
document.getElementById("next").addEventListener("click",()=>{
    if(index>=9){
        index=0;
    }
    else{
        index+=1;
    }
    
    audioElement.src=`${index}.mp3`;
        audioElement.currentTime=0;
        if(audioElement.paused || audioElement.currentTime<=0){
            masterPlay.classList.remove("fa-play");
            masterPlay.classList.add("fa-pause");
        }

        bImage.src=`${index}.jpeg`;
        audioElement.play();
        pText.innerText=document.getElementById(`${index}t`).innerText;
})

// Previous btn
document.getElementById("prev").addEventListener("click",()=>{
    if(index<=0){
        index=9;
    }
    else{
        index-=1;
    }

    audioElement.src=`${index}.mp3`;
        audioElement.currentTime=0;
        if(audioElement.paused || audioElement.currentTime<=0){
            masterPlay.classList.remove("fa-play");
            masterPlay.classList.add("fa-pause");
        }

        bImage.src=`${index}.jpeg`;
        audioElement.play();
        pText.innerText=document.getElementById(`${index}t`).innerText;
})
