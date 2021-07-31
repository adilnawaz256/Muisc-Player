const play =document.getElementById('play');
const music = document.querySelector('audio');
const img =document.querySelector('img'); 

let isPlaying = false;

const playMusic = ()=>{
    isPlaying = true;
    music.play();   
 play.classList.replace('fa-play' , 'fa-pause');
    img.classList.add('anime');
};
const pauseMusic = ()=>{
    isPlaying = false;
    music.pause();   
 play.classList.replace('fa-pause' , 'fa-play');
    img.classList.remove('anime');
};

play.addEventListener('click' , function(){
    // if(isPlaying){
    //  pauseMusic();   
    // }
    // else{
    //     playMusic();
    // }
    isPlaying ? pauseMusic():playMusic();
});


const artist = document.querySelector("#artist");
const title = document.querySelector("#title");
const prev= document.querySelector("#prev");
const next = document.querySelector("#next");

const songs =[
    {
name:'adil-1'
, title:'Khariyat',
artist:'Arjit Singh'
}, 
{
name:'adil-2', 
title:'Syiara',
artist:'Arjit Singh'
},
{
    name:'adil-3',
    title:'Lay Lay Remix',
    artist:'Alan Walker'
},
{
    name:'adil-4',
    title:'Sehat Dermuis ',
    artist:'Sehat Dermuis'
}
]
const loadSongs = (songs)=>{
title.textContent=songs.title;
artist.textContent=songs.artist;
music.src = "music/" + songs.name + '.mp3';
img.src = "image/" + songs.name + ".jpg";
}
var songsIndex =0;
const nextSongs = () =>{
    songsIndex =(songsIndex+1) % songs.length;
    loadSongs(songs[songsIndex]);
    playMusic();
};
const prevSongs = () =>{
    songsIndex =(songsIndex-1 + songs.length)%songs.length;
    loadSongs(songs[songsIndex]);
    playMusic();
};
next.addEventListener('click' , nextSongs);
prev.addEventListener('click' , prevSongs)
