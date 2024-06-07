import logo from './logo.svg';
import './App.css';
import image from "./images/willjacks.png"
import saibabasong from "./audio/saibaba.mp3"
import video from "./videos/mountains.mp4"

function App() {
  return (
    <div >
      <h1>IMAGES</h1>
      <div>
        <h2>From <mark>Internet</mark>:</h2>
        <img src='https://c.ndtvimg.com/2023-12/qhgfbe4o_t20-world-cup-2024-logo_625x300_07_December_23.jpg'></img>
        <h2>From <strong>Public </strong> Folder:</h2>
        <img src='./images/jakefraser.png'></img>
        <h2>From <em>src</em> Folder:</h2>
        <img src={image}></img>
      </div>
      <hr></hr>
      <h1>AUDIO</h1>
      <div>
      <h2>From <mark>Internet</mark>:</h2>
      <audio src='https://services.brninfotech.com/tws/media2/songs/Saaho/03 - Bad Boy.mp3' controls></audio>
      <h2>From <strong>Public </strong>Folder:</h2>
      <audio src='./audio/kalki.mp3' controls muted></audio>
      <h2>From <em>src</em> Folder:</h2>
      <audio src={saibabasong} controls  ></audio>
      </div>
      <hr></hr>
      <div>
      <h1>VIDEOS</h1>
      <h2>From <mark>Internet</mark>:</h2>
      <video src='https://services.brninfotech.com/tws/media2/trailers/gangLeader.mp4' controls  autoPlay></video>
      <h2>From <strong>Public</strong>  Folder:</h2>
      <video src='./videos/dance.mp4' controls autoPlay></video>
      <h2>From <em>src </em>Folder:</h2>
      <video src= {video} controls autoPlay></video>
      </div>
      <hr></hr>
    </div>
    
  );
}

export default App;
