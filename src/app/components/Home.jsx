import { useState, useEffect } from "react";
import Banner from "./subcomponents/Banner";
import Gridtable from "./subcomponents/Gridtable";
import Adds from "./subcomponents/Adds";
import Adds2 from "./subcomponents/Adds2";
import GameApi from "../_api/dashboardRoots/GameApi.service";
import {GameNavigation} from "../data/dummyData"; 

import casinojokerbat from "../../assets/img/CasinoJokerBet.webp";
import image2 from "../../assets/img/casinoBetNumber.webp";
import image3 from "../../assets/img/casinoPoker.webp";
import image4 from "../../assets/img/blackJackCasinoGame.webp";
import image5 from "../../assets/img/wheelBetCasinoNew.webp";
import image6 from "../../assets/img/casinoFruitRace1.webp";
import image7 from "../../assets/img/32casinoCards.webp";
import image8 from "../../assets/img/casinoliveDice.webp";
import Icon from "../../assets/img/inplayico.png";

import "./../../assets/css/componentcss/home.scss";

const Home = ()=>{

    const [apiResponse, setApiResponse] = useState({
        fetchCricket: '',
        fetchFootBall: '',
        fetchTennis: '',
    })

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { response1, response2, response3 } = await new GameApi().gameHomeApiCall();
                setApiResponse((prevState) => ({
                    ...prevState,
                    fetchCricket: response1,
                    fetchFootBall: response2,
                    fetchTennis: response3,
                }));
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
        const intervalId = setInterval(fetchData, 5000);
        return () => clearInterval(intervalId);
    }, []);


    return(
        <>
        <section className="cricketcontainer">
            <div className="homesubContainer">
               <Banner/>

                <div className="flex items-center px-2 py-3 gap-2">
                    <span className="w-8"><img src={Icon} alt="error"/></span>
                    <label className="uppercase font-semibold">In Play</label>
                </div>

               {apiResponse && <Gridtable gameName={GameNavigation[0]} gameDetails={apiResponse.fetchCricket}/>}
               {apiResponse && <Gridtable gameName={GameNavigation[1]} gameDetails={apiResponse.fetchFootBall}/>}
               {apiResponse && <Gridtable gameName={GameNavigation[2]} gameDetails={apiResponse.fetchTennis}/>}
            </div>
            <div>
              <Adds/>
              <Adds2/>
            </div>
        </section>
        <div className="imageConatiner">
            <div className="exchage-game-col">
                <a className="colFirst">
                    <img src={casinojokerbat}/>
                </a>
                <a className="colSec">
                   <img src={image3}/>
                </a>
                <a className="colThird">
                    <img src={image6}/>
                </a>
            </div>

            <div className="exchage-game-col">
                <a className="colFirst">
                    <img src={image5}/>
                </a>
                <a className="colSec">
                   <img src={image2}/>
                </a>
                <a className="colThird">
                    <img src={image8}/>
                </a>
            </div>

            <div className="exchage-game-col">
                <a className="colFirst">
                    <img src={image4}/>
                </a>
                <a className="colSec">
                   <img src={image7}/>
                </a>
            </div>
        </div>
        </>
    )
}
export default Home;