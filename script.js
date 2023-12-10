console.log("Welcome to Jhoom");

// Intial the variable
let max = 29;
let min = 0;
let songIndex = Math.floor(Math.random() * (max - min)) + min;
let audioElement = new Audio('songs/${songIndex}.mp3');
let masterPlay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('progressbar');
let masterSongName = document.getElementById('masterSongName');
let bIcon = document.getElementById('img');
let songsItems = Array.from(document.getElementsByClassName('songitem'));
let volumeRange = document.getElementById('soundbar');

let list_1 = document.getElementById('list_1');
let list_2 = document.getElementById('list_2');
let list_3 = document.getElementById('list_3');
let list_4 = document.getElementById('list_4');

let songs = [
    {songName: "Proper Patola" , filePath: "songs/1.mp3" , coverPath: "covers/1.jpg"},
    {songName: "Palpita" , filePath: "songs/2.mp3" , coverPath: "covers/2.jpg"},
    {songName: "Born to Shine" , filePath: "songs/3.mp3" , coverPath: "covers/3.jpeg"},
    {songName: "G.O.A.T" , filePath: "songs/4.mp3" , coverPath: "covers/4.jpg"},
    {songName: "Lemonade" , filePath: "songs/5.mp3" , coverPath: "covers/5.jpg"},
    {songName: "Goliya" , filePath: "songs/6.mp3" , coverPath: "covers/6.jpg"},
    {songName: "Raat Di Gedi" , filePath: "songs/7.mp3" , coverPath: "covers/7.jpg"},
    
    {songName: "Hua Main" , filePath: "songs/8.mp3" , coverPath: "covers/8.jpg"},
    {songName: "Satranga" , filePath: "songs/9.mp3" , coverPath: "covers/9.jpg"},
    {songName: "Papa Meri Jaan" , filePath: "songs/10.mp3" , coverPath: "covers/10.jpg"},
    {songName: "Arjan Vailly" , filePath: "songs/11.mp3" , coverPath: "covers/11.jpg"},
    {songName: "Pehle Bhi Main" , filePath: "songs/12.mp3" , coverPath: "covers/12.jpg"},
    {songName: "Saari Duniya Jalaa Denge" , filePath: "songs/13.mp3" , coverPath: "covers/13.jpg"},
    {songName: "Haiwaan" , filePath: "songs/14.mp3" , coverPath: "covers/14.jpg"},
    
    {songName: "Diamond" , filePath: "songs/15.mp3" , coverPath: "covers/15.jpg"},
    {songName: "Wait Up" , filePath: "songs/16.mp3" , coverPath: "covers/16.jpg"},
    {songName: "Perfect" , filePath: "songs/17.mp3" , coverPath: "covers/17.jpg"},
    {songName: "Wavy" , filePath: "songs/18.mp3" , coverPath: "covers/18.jpg"},
    {songName: "She Bad" , filePath: "songs/19.mp3" , coverPath: "covers/19.jpg"},
    {songName: "Dark Knight" , filePath: "songs/20.mp3" , coverPath: "covers/20.jpg"},
    {songName: "Middle Fingers Up" , filePath: "songs/21.mp3" , coverPath: "covers/21.jpg"},
    
    {songName: "Admirin' You (feat. Preston Pablo)" , filePath: "songs/22.mp3" , coverPath: "covers/22.jpg"},
    {songName: "Softly" , filePath: "songs/23.mp3" , coverPath: "covers/23.jpg"},
    {songName: "Jee Ni Lagda" , filePath: "songs/24.mp3" , coverPath: "covers/24.jpg"},
    {songName: "Champion's Anthem" , filePath: "songs/25.mp3" , coverPath: "covers/25.jpg"},
    {songName: "Mexico" , filePath: "songs/26.mp3" , coverPath: "covers/26.jpeg"},
    {songName: "On Top" , filePath: "songs/27.mp3" , coverPath: "covers/27.jpg"},
    {songName: "Bachke Bachke (feat. Yarah)" , filePath: "songs/28.mp3" , coverPath: "covers/28.jpg"},
]

songsItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    
})

//Change recent playlist
document.getElementById('btn1').addEventListener('click',()=>{
    list_1.style.display="block";
    list_2.style.display="none";
    list_3.style.display='none';
    list_4.style.display='none';
});
document.getElementById('btn2').addEventListener('click',()=>{
    list_1.style.display="none";
    list_2.style.display="block";
    list_3.style.display='none';
    list_4.style.display='none';
});
document.getElementById('btn3').addEventListener('click',()=>{
    list_1.style.display="none";
    list_2.style.display="none";
    list_3.style.display="block";
    list_4.style.display='none';
});
document.getElementById('btn4').addEventListener('click',()=>{
    list_1.style.display="none";
    list_2.style.display="none";
    list_3.style.display="none";
    list_4.style.display="block";
});
//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.src = `songs/${songIndex}.mp3`;
        audioElement.play();
        bIcon.src = songs[songIndex-1].coverPath;
        masterSongName.innerText = songs[songIndex-1].songName;
        masterPlay.classList.remove('ri-play-fill');
        masterPlay.classList.add('ri-pause-fill');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('ri-pause-fill');
        masterPlay.classList.add('ri-play-fill');
    }
})

//Listen to events
audioElement.addEventListener('timeupdate', ()=>{
    //Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = audioElement.currentTime;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = ((myProgressBar.value*audioElement.duration)/100);

})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('ri-pause-fill');
        element.classList.add('ri-play-fill');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('ri-play-fill');
        e.target.classList.add('ri-pause-fill');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        bIcon.src = songs[songIndex].coverPath;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('ri-play-fill');
        masterPlay.classList.add('ri-pause-fill');
    })
})

//shuffle array
document.getElementById('shuffle').addEventListener('click',()=>{
    songIndex = Math.floor(Math.random() * (max - min)) + min;
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex >= 29){
        songIndex = 1;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    bIcon.src = songs[songIndex].coverPath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('ri-play-fill');
    masterPlay.classList.add('ri-pause-fill');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex <= 1){
        songIndex = 1;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    bIcon.src = songs[songIndex].coverPath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('ri-play-fill');
    masterPlay.classList.add('ri-pause-fill');
})

volumeRange.addEventListener('input', ()=>{
    const volumeValue = parseFloat(this.value);
    if (!isNaN(volumeValue) && isFinite(volumeValue) && volumeValue >= 0 && volumeValue <= 1) {
        audioElement.volume = volumeValue;
      } else {
        audioElement.volume = 1;
      }
    // audioElement.volume = (volumeRange.value);
});

console.log(songIndex);