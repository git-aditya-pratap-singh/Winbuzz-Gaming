import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { GameNavigation } from "../../data/dummyData";
//---------Components-------------
import Banner from "../../components/subcomponents/Banner";
import Gridtable from "../../components/subcomponents/Gridtable";
import Adds from "../../components/subcomponents/Adds";
import Adds2 from "../../components/subcomponents/Adds2";
//---------------GameAPI Service--------------
import GameApi from "../../_api/dashboardRoots/GameApi.service";
//--------------Image and SCSS--------------
import Icon from "../../../assets/img/inplayico.png";
import "../../../assets/scss/home.scss";

const GameList = () => {

    const [getResponse, setGetResponse] = useState(null);
    const [getGameNames, setGetGameNames] = useState({});
    const parameter = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await new GameApi().gameApiCall(parameter);
                const findGameNames = GameNavigation.find((item) => item?.eventTypeId == parameter?.id);
                const gameName = findGameNames || {};
                setGetGameNames(gameName);
                setGetResponse(response);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
        const intervalId = setInterval(fetchData, 5000);
        return () => clearInterval(intervalId);
    }, [parameter]);


    return (
        <section className="cricketcontainer">
            <div className="homesubContainer">
                <Banner />
                <div className="flex items-center px-2 py-3 gap-2">
                    <span className="w-8"><img src={Icon} alt="error" /></span>
                    <label className="uppercase font-semibold">Exchange Games</label>
                </div>
                {getResponse && <Gridtable gameName={getGameNames} gameDetails={getResponse} />}
            </div>
            <div>
                <Adds />
                <Adds2 />
            </div>
        </section>
    )
}
export default GameList;