import logo from './logo.svg';
import './App.css';
import Kalkiposter1 from "./Kalki/Kalkiposter1.jpg";
import Kalki2898ADPrabhas from "./Kalki/Kalki2898ADPrabhas.jpg"; 
import BujjiTheme from "./Kalki/BujjiTheme.mp3";
import TaTakkara from "./Kalki/TaTakkara.mp3";
import ThemeofKalki from "./Kalki/ThemeofKalki.mp3";
import KalkiTrailer from "./Kalki/KalkiTrailer.mp4";


function App() {
  return (
    <div className="App">
      <h1>from Internet</h1>
      <hr></hr>
      <h1>SAAHO</h1>
      <img src="https://services.brninfotech.com/tws/media2/posters/saahoPoster.jpg"></img>
      <section class="Songs">
        <h1>SAAHO SONGS</h1>
        <div>
        <figure>
          <img src="https://th.bing.com/th?id=OIP.H8SIhSbZRgroAKovs6xv-gHaKf&w=210&h=297&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"></img>
          <figcaption>Pyscho Saiyaan</figcaption>
          <audio src="https://services.brninfotech.com/tws/media2/songs/Saaho/01 - Pyscho Saiyaan.mp3" controls></audio>
        </figure>
        <figure>
          <img src="https://th.bing.com/th?id=OIP.H8SIhSbZRgroAKovs6xv-gHaKf&w=210&h=297&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"></img>
          <figcaption>Ye Chota Nuvvunna</figcaption>
          <audio src="https://services.brninfotech.com/tws/media2/songs/Saaho/02 - Ye Chota Nuvvunna.mp3" controls></audio>
        </figure>
        <figure>
          <img src="https://th.bing.com/th?id=OIP.H8SIhSbZRgroAKovs6xv-gHaKf&w=210&h=297&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"></img>
          <figcaption>Saaho Bang</figcaption>
          <audio src="https://services.brninfotech.com/tws/media2/songs/Saaho/05 - Saaho Bang.mp3" controls></audio>
        </figure>
        </div>
      </section>
      <h1>SAAHO TRAILER</h1>
      <video src="https://services.brninfotech.com/tws/media2/trailers/saaho.mp4" controls autoPlay muted></video>
      <hr></hr>
      <h1>In Public</h1>
      <hr></hr>
      <h1>KALKI 2898 AD</h1>
      <img src="./kalki/kalki poster.jpg"></img>
      <section class="Songs">
        <h1>KALKI SONGS</h1>
        <div>
        <figure>
          <img src="./kalki/Kalki-2898-AD Prabhas.jpg"></img>
          <figcaption>Bujji Theme</figcaption>
          <audio src="./kalki/Bujji Theme.mp3" controls></audio>
        </figure>
        <figure>
          <img src="./kalki/Kalki-2898-AD Prabhas.jpg"></img>
          <figcaption>Ta Takkara</figcaption>
          <audio src="./kalki/Ta Takkara.mp3" controls></audio>
        </figure>
        <figure>
          <img src="./kalki/Kalki-2898-AD Prabhas.jpg"></img>
          <figcaption>Theme of kalki</figcaption>
          <audio src="./kalki/Theme of kalki.mp3" controls></audio>
        </figure>
        </div>
      </section>
      <h1>KALKI TRAILER</h1>
      <video src="./kalki/Kalki Trailer.mp4" controls autoPlay muted></video>
      <hr></hr>
    <h1>In SRC</h1>
    <h1>KALKI 2898 AD</h1>
      <img src={Kalkiposter1}></img>
      <section class="Songs">
        <h1>KALKI SONGS</h1>
        <div>
        <figure>
          <img src={Kalki2898ADPrabhas}></img>
          <figcaption>Bujji Theme</figcaption>
          <audio src={BujjiTheme} controls></audio>
        </figure>
        <figure>
          <img src={Kalki2898ADPrabhas}></img>
          <figcaption>Ta Takkara</figcaption>
          <audio src={TaTakkara} controls></audio>
        </figure>
        <figure>
          <img src={Kalki2898ADPrabhas}></img>
          <figcaption>Theme of kalki</figcaption>
          <audio src={ThemeofKalki} controls></audio>
        </figure>
        </div>
      </section>
      <h1>KALKI TRAILER</h1>
      <video src={KalkiTrailer} controls autoPlay muted></video>
      <hr></hr>
      <h1>In Public</h1>
      <hr></hr>
      <h1>HANUMAN</h1>
      <img className="hanuman" src="./HanuMan/hanuman.webp"></img>
      <section class="Songs">
        <h1>HANUMAN SONGS</h1>
        <div>
        <figure>
          <img src="./Hanuman/hanumanimage.jpg"></img>
          <figcaption>Anjanadri Theme</figcaption>
          <audio src="./hanuman/Anjanadri Theme Song.mp3" controls></audio>
        </figure>
        <figure>
          <img src="./Hanuman/hanumanimage.jpg"></img>
          <figcaption>Hanuman Chalisa</figcaption>
          <audio src="./hanuman/Hanuman Chalisa.mp3" controls></audio>
        </figure>
        <figure>
          <img src="./Hanuman/hanumanimage.jpg"></img>
          <figcaption>Raghunandana</figcaption>
          <audio src="./hanuman/Raghunandana.mp3" controls></audio>
        </figure>
        </div>
      </section>
      <h1>HanuMan TRAILER</h1>
      <video src="./hanuman/HanuMan Trailer.mp4" controls autoPlay muted></video>
      <hr></hr>
    </div>
  );
}

export default App;
