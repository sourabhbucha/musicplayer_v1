import React , {useState, useEffect} from "react";
import Player from "./components/Player"
function App() {
  const [musicList] = useState([
    {   
      id: "1",  
      title: "Milne Hai Mujhse Aayi",
      artist: "Arjit Singh",
      img_source: "./images/Milne-Hai-Mujhse-Aayi.jpg",
      src: "./music/Milne-Hai-Mujhse-Aayi.m4a",
      playlist: true 
    },
    {   
      id : "2",
      title : "Bulleya",
      artist : "Pritam",
      img_source : "./images/Bulleya.jpg",
      src : "./music/bulleya.mp3",
      playlist: false 
    },
    {
      id : "3",
      title : "Roop Tera Mastana",
      artist : "Sanam(Band)",
      img_source : "./images/Roop-Tera-Mastana-Sanam.jpg",
      src : "./music/Roop-Tera-Mastana-Sanam.m4a",
      playlist: false 
    },
    {
      id : "4",
      title : "Tum",
      artist : "Atif Aslam",
      img_source : "./images/Tum.jpg",
      src : "./music/Tum.mp3",
      playlist: false 
    },
    {
      id : "5",
      title : "Bhula Dena",
      artist : "Mustafa Zahid",
      img_source : "./images/Bhula-Dena.jpg",
      src : "./music/Bhula-Dena.m4a",
      playlist: false 
    },
    {
      id: "6",
      title: "Past life",
      artist: "Trevor Daniel & Selena Gomez",
      img_source: "./images/Past-life.jpg",
      src: "./music/Past-life.mp3",
      playlist: false
    },
    {
      id: "7",
      title: "Dance to this",
      artist: "Troye Sivan feat. Ariana Grande",
      img_source: "./images/Dance-to-this.jpg",
      src: "./music/Dance-to-this.mp3",
      playlist: false
    },
    {
      id: "8",
      title: "Maniac",
      artist: "Conan Gray",
      img_source: "./images/Maniac.jpg",
      src: "./music/Maniac.mp3",
      playlist: false
    },
    {
      id: "9",
      title: "Emily",
      artist: "Jeremy Zucker & Chelsea Cutler",
      img_source: "./images/Emily.jpg",
      src: "./music/Emily.mp3",
      playlist: false 
    },
    {
      id: "10",
      title: "You’re welcome",
      artist: "Jordan Fisher feat. Lin-Manuel Miranda",
      img_source: "./images/You_re-welcome.jpg",
      src: "./music/You_re-welcome.mp3",
      playlist: false
    },
    {
      id: "11",
      title: "Used to be",
      artist: "Arrows to Athens",
      img_source: "./images/Used-to-be.jpg",
      src: "./music/Used-to-be.mp3",
      playlist: false
    },
    {
      id: "12",
      title: "Graveyard",
      artist: "Halsey",
      img_source: "./images/Graveyard.jpg",
      src: "./music/Graveyard.mp3",
      playlist: false 
    },
    {
      id: "13",
      title: "One call away",
      artist: "Charlie Puth",
      img_source: "./images/One-call-away.jpg",
      src: "./music/One-call-away.mp3",
      playlist: false 
    },
    {
      id: "14",
      title: "Take your time",
      artist: "Sam Hunt",
      img_source: "./images/Take-your-time.jpg",
      src: "./music/Take-your-time.mp3",
      playlist: false 
    },
    {
      id: "15",
      title: "Slow Dance In A Parking Lot",
      artist: "Jordan Davis",
      img_source: "./images/Slow-dance-in-a-parking-lot.jpg",
      src: "./music/Slow-dance-in-a-parking-lot.mp3",
      playlist: false 
    },
    {
      id: "16",
      title: "There’s no way",
      artist: "Lauv & Julia Michaels",
      img_source: "./images/There_s-no-way.jpg",
      src: "./music/There_s-no-way.mp3",
      playlist: false 
    },
    {
      id: "17",
      title: "Our Song",
      artist: "Anne-Marie & Niall Horan",
      img_source: "./images/Our-song.jpg",
      src: "./music/Our-song.mp3",
      playlist: false 
    },
    {
      id: "18",
      title: "Eastside",
      artist: "Benny Blanco & Halsey & Khalid",
      img_source: "./images/Eastside.jpg",
      src: "./music/Eastside.mp3",
      playlist: false 
    },
    {
      id: "19",
      title: "Sweet escape",
      artist: "Alesso & Sirena",
      img_source: "./images/Sweet-escape.jpg",
      src: "./music/Sweet-escape.mp3",
      playlist: false 
    },
    {
      id: "20",
      title: "Dandelions",
      artist: "Ruth B.",
      img_source: "./images/Dandelions.jpg",
      src: "./music/Dandelions.mp3",
      playlist: false 
    },
    {
      id: "21",
      title: "End game",
      artist: "Taylor Swift (Feat. Ed Sheeran & Future)",
      img_source: "./images/End-game.jpg",
      src: "./music/End-game.mp3",
      playlist: false 
    }
  ]) 

  const [music,setMusic] = useState(musicList) 
  const [playlist,setPlaylist] = useState([music[0]]);
  const [currentSongIndex,setCurrentSongIndex] = useState(0);
  const [nextSongIndex,setNextSongIndex] = useState(currentSongIndex + 1);

  const addToPlaylist = (song) =>{
  if(!song.playlist){
    song.playlist=true;
    setPlaylist([...playlist, song]);
  }
  }
  const removeFromPlaylist = (song,id) =>{
      if(id === playlist.length - 1){
        setCurrentSongIndex(0);
      }
    
    if(playlist.length > 1){
      setPlaylist(playlist.filter((product) => product !==song))
      song.playlist = false;
    }
  }

  const btn = (x) =>{
    if(x){
      return <i className="fa fa-minus"></i>
    }else{
      return <i className="fa fa-plus"></i>
    }
  }

  useEffect (() => {
    // console.log(playlist);
  },[playlist,currentSongIndex]);



  useEffect(() => {
    setNextSongIndex(() => {
      if(currentSongIndex + 1 > playlist.length - 1){ 
        return 0;
      }
      else{
        return currentSongIndex + 1;
      }
    });
  },[currentSongIndex,playlist]);

  const displaytypelist = (id) =>{
    if(id < 8){
      return 'music_big'
    }
    else{
      return 'music_small'
    }
  }
  

  const [keyword,setKeyword] = useState('');

    useEffect (() => {
      if(keyword.length > 0 ){ 
        setMusic(musicList.filter((music) =>  music.title.toLowerCase().includes(keyword.toLowerCase())))
      }
      else{
        setMusic(musicList)
      }
  },[keyword,musicList]);


return (
  <div className="App">

      <div className="header">
        <input type="text" placeholder="Search..." name="search" className="search" value = {keyword} onChange={(e) => setKeyword(e.target.value)}/>
        <button type="submit" className="search_btn"><i className="fa fa-search"></i></button>
        <img className="playing_btn" src={playlist[currentSongIndex].img_source} alt="" 
          onClick={() => {
            document.getElementById("play").style.display = "block";
            document.body.style.overflow = "hidden";
          }}/>
      </div>

      <div className="list" id="lst">
        {music.map((music,idx) => (
          <div className={displaytypelist(idx)} key={idx}>
          <img src={music.img_source} alt="" />
          <h3>{music.title}</h3>
          <h4>{music.artist}</h4>
          <button onClick = {() => addToPlaylist(music)}>
          <h5>{btn(music.playlist)}</h5>
          </button>
          </div>
        ))}
      </div>

    <div className="right" id= "play">   
    
      <div className="playlist">
        <button type="submit" className="close" onClick={() => {
          document.getElementById("play").style.display = "none";
          document.body.style.overflowY = "scroll";
          }}><i className="fa fa-times"></i></button>  
          <Player 
            currentSongIndex = {currentSongIndex}
            setCurrentSongIndex = {setCurrentSongIndex}
            nextSongIndex={nextSongIndex}
            songs = {playlist}
          / > 
      </div> 

      <div className="upNext">
        {playlist.map((music,idx) => (
            <div className="upNextSongs" key={idx}>
              <img src={music.img_source} alt="" onClick = {() => setCurrentSongIndex(idx)} />
              <div className="list_details" onClick = {() => setCurrentSongIndex(idx)}>
              <h3>{music.title}</h3>
              <h4>{music.artist}</h4>
              </div>
              <button onClick = {() => removeFromPlaylist(music,idx)}>
              {btn(music.playlist)}
              </button>
            </div>
          ))}

      </div>

    </div>  
      
  </div>
  );
}

export default App;
