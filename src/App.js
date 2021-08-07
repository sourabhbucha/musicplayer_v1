import React , {useState, useEffect} from "react";
import Player from "./components/Player";
import {Data} from "./components/Data"
function App() {
  const [musicList] = useState(Data)
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
