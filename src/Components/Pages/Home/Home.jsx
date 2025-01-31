import React from "react";
import "./Home.css";
import Nav from "../../NavBar/Nav";
import hero_banner from "../../../assets/hero_banner.jpg";
import hero_title from "../../../assets/hero_title.png";
import play_icon from "../../../assets/play_icon.png";
import info_icon from "../../../assets/info_icon.png";
import Tilecard from "../../Titlecard/Tilecard";
import Footer from "../../Footer/Footer";
import { useNavigate } from "react-router-dom";

function Home() {

  
  return (
    <div className="home">
      <Nav />
      <div className="hero">
        <img src={hero_banner} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />
          <p>
            Discovering his ties to a secret anciet order , a young man living
            in modern Istanbul embraks on a quest to save the city from a
            immortal enemy.
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt="" />
              play
            </button>
            <button className="btn dark-btn">
              {" "}
              <img src={info_icon} alt="" />
              more info
            </button>
          </div>
          <Tilecard />
        </div>
      </div>
      <div className="more-cards">
        <Tilecard title={'Blockbuster Movies'} category={'popular'} />
        <Tilecard title={'Only on netflix'} category={'top_rated'}/>
        <Tilecard title={'Upcoming'} category={'upcoming'}/>
        <Tilecard title={'Top pics for you'} category={'now_playing'}/>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
