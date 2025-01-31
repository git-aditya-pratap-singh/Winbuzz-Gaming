import { useNavigate } from "react-router-dom";
import "../../../assets/css/componentcss/bottomtabs.scss";

const BottomTabs = ()=>{
    const navigate = useNavigate();
    return(
        <section className="bottom-tabs"> 
            <ul>
                <li>
                    <a routerlink="/dashboard">
                        <img src="https://winbuzz.com/assets/img/icon/football.png" alt=""/>
                    </a>
                    <div className="title-name">Sports</div>
                </li>

                <li>
                    <a href="/m/game-list/4" routerlink="/m/game-list/4">
                        <img src="https://winbuzz.com/assets/img/icon/in-play.png" alt=""/>
                    </a>
                    <div className="title-name">In Play</div>
                </li>

                <li>
                    <a className="blank-bg">
                        &nbsp;
                    </a>
                </li>

                <li className="big">
                    <a onClick={()=> navigate('/')}>
                        <img src="https://winbuzz.com/assets/img/icon/home.png" alt=""/>
                    </a>
                    <div className="title-name"></div>
                </li>

                <li>
                    <a>
                        <img src="https://winbuzz.com/assets/img/icon/Casino.png" alt=""/>
                    </a>
                    <div className="title-name">Casino</div>
                </li>

                <li>
                    <a>
                        <img src="https://winbuzz.com/assets/img/icon/megaphone.png" alt=""/>
                    </a>
                    <div className="title-name">Promotion</div>
                </li>
            </ul> 
        </section>
    )
}
export default BottomTabs;