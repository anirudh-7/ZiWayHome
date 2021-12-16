import './App.css';
import Countdown from './Countdown.js';
import background from './assets/8b7fbc2e623720393ad7ffa7e4896eac.gif';
import pic1 from './assets/a0c2f94e-1046-476a-8ac4-f6339d8864fe.jpg';
import pic2 from './assets/c8d5f6e0-049a-4015-a5b7-98c561edfb06.jpg';
import pic3 from './assets/IMG_0700.JPG';
import pic4 from './assets/IMG_5821.jpg';
import pic5 from './assets/IMG_7967.jpg';
import pic6 from './assets/IMG_0327.jpg';
import pic7 from './assets/7b18f2c4-7396-48a6-b75f-bad2f5888edc.jpg';
import pic8 from './assets/IMG_8868.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


function App() {
 return (
    <div className="App" style={{backgroundImage:`url(${background})`, backgroundSize: 'cover'}} >
      <div className="BodyContainer" >
        <h1 className="title">Zi is coming soon!!!</h1>
          <Countdown date={`2022-01-03T05:30:00`} />
          <div style={{textAlign: 'center', width: '80%', margin: '0 auto', paddingTop: '40px'}}>
            <Carousel autoPlay={true} interval={3000} infiniteLoop={true} showThumbs={false}>
              <div>
                <img src={pic6} className="picture"></img>
              </div>
              <div>
                <img src={pic7} className="picture"></img>
              </div>
              <div>
                <img src={pic1} className="picture"></img>
              </div>
              <div>
                <img src={pic2} className="picture"></img>
              </div>
              <div>
                <img src={pic3} className="picture"></img>
              </div>
              <div>
                <img src={pic4} className="picture"></img>
              </div>
              <div>
                <img src={pic5} className="picture"></img>
              </div>
              <div>
                <img src={pic8} className="picture"></img>
              </div>
          </Carousel>
          </div>
      </div> 
    </div>
  );
}

export default App;
