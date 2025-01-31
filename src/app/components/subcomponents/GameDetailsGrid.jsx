import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { bet_popup } from "../../redux/slices/stateSlice";
//-----------------ICON and SCSS-----------------
import IconComponent from "../../../assets/icons/IconComponent";
import "../../../assets/scss/gameDetailsgrid.scss";

const GameDetailsGrid = ({ name, min, max, subData }) => {
    
    const dispatch = useDispatch();
    const colorValue = ['#a5d9fe', '#f8d0ce'];

    return (
        <section className="gameDetailsContainer">
            <div className="gameDetailsHeader">
                <div className="flex flex-col md:flex-row justify-between items-center w-full">
                    <div className="flex whitespace-nowrap w-full md:w-0">
                        <div className="gameDetailsHeaderA">
                            <span><IconComponent iconType="starIcon" iconColor="#fff" /></span>
                            <label>{name}</label>
                            <a className="cashout-btn">CASHOUT</a>
                        </div>
                        <span className="flex items-center gap-1 ml-5 md:ml-12 text-[0.6rem] font-semibold pr-2">
                            <label>MIN: {min}</label>
                            <label>MAX: {max}</label>
                        </span>
                    </div>

                    <div className="flex justify-between items-center gap-3 text-[0.6rem] font-semibold w-0 md:w-[300px]">
                        <label className="back-title">BACK</label>
                        <label className="back-title2 pl-16 md:pr-24">LAY</label>
                    </div>
                </div>
            </div>
            <div className="gameDetailsBody">
                {
                    subData.map((val, index) => {
                        return (
                            <div className="game-details-section" key={index}>

                                {/* where who will win the match then thsi section it will render */}


                                {/* <div className="w-full flex flex-row justify-evenly items-center">
                                <div className="flex flex-col justify-center items-center gap-1 text-[0.8rem]">
                                    <label>Dubai Capitals</label>
                                    <span className="p-3 text-sm bg-[#A5D9FE] w-[150px] md:w-[250px] text-center rounded shadow">1.63</span>
                                </div>

                                <div className="flex flex-col justify-center items-center gap-1 text-[0.8rem]">
                                    <label>Sharjah Warriors</label>
                                    <span className="p-3 text-sm bg-[#A5D9FE] w-[150px] md:w-[250px] text-center rounded shadow">2.18</span>
                                </div>
                            </div> */}

                                <h2>{val.itemName}</h2>

                                <div className="game-details-items">

                                    {/* <div className="ball-running">Suspended</div> */}
                                    {/* <div className="ball-running">LOOSER</div>  */}


                                    <div className="game-box"
                                        onClick={() => dispatch(bet_popup({ 'type': colorValue[0], 'value': val.value1, 'status': true }))}>
                                        <label>{val.value1}</label>
                                        <span>{val.subvalue1}</span>
                                    </div>
                                    <div className="game-box"
                                        onClick={() => dispatch(bet_popup({ 'type': colorValue[0], 'value': val.value2, 'status': true }))}>
                                        <label>{val.value2}</label>
                                        <span>{val.subvalue2}</span>
                                    </div>
                                    <div className="game-box"
                                        onClick={() => dispatch(bet_popup({ 'type': colorValue[0], 'value': val.value3, 'status': true }))}>
                                        <label>{val.value3}</label>
                                        <span>{val.subvalue3}</span>
                                    </div>
                                    <div className="game-box"
                                        onClick={() => dispatch(bet_popup({ 'type': colorValue[1], 'value': val.value4, 'status': true }))}>
                                        <label>{val.value4}</label>
                                        <span>{val.subvalue4}</span>
                                    </div>
                                    <div className="game-box"
                                        onClick={() => dispatch(bet_popup({ 'type': colorValue[1], 'value': val.value5, 'status': true }))}>
                                        <label>{val.value5}</label>
                                        <span>{val.subvalue5}</span>
                                    </div>
                                    <div className="game-box"
                                        onClick={() => dispatch(bet_popup({ 'type': colorValue[1], 'value': val.value6, 'status': true }))}>
                                        <label>{val.value6}</label>
                                        <span>{val.subvalue6}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <marquee className="marque">HORSE RACING 🐎 MARKET AVAILABLE IN OUR EXCHANGE</marquee>
        </section>
    )
}
export default GameDetailsGrid;