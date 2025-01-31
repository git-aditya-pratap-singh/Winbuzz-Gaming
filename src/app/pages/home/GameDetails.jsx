import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import GameDetailsGrid from "../../components/subcomponents/GameDetailsGrid";
import IconComponent from "../../../assets/icons/IconComponent";
import IframeGrid from "../../components/subcomponents/IframeGrid";
import BetsSlip from "../../components/subcomponents/BetsSlip";
import TableGrid from "../../components/subcomponents/TableGrid";
import Data from "../../data/data.json";
import "../../../assets/css/componentcss/cricket.scss";
import { useState } from "react";


const GameDetails = ()=>{
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const betStatus = useSelector((store)=>store.centerliazedStore.betPopupStatus.status);

  const currentDate = new Date();
  const date = currentDate.toLocaleDateString();
  const time = currentDate.toLocaleTimeString();

  const [statusBanner, setStatusBanner] = useState(false);


    return(
      <section className="cricketBaseContainer">
        <div className="baseContainerA">

          <div className="baseHeader">
            <span onClick={()=> navigate('/dashboard')}><IconComponent iconType="subArrowIcon" iconSize={25}/></span>
            <h2>Hobart Hurricanes v Sydney Thunder</h2>
            <label>{date}</label>
            <label>{time}</label>
            <button className="scorecard__btn" onClick={()=> setStatusBanner(!statusBanner)}>
              <IconComponent iconType="eyeIcon"/> Score</button>
          </div>

          {
            statusBanner && (
              <div className="conatiner-main">
            <div className="w-full flex flex-row justify-between items-center px-5">

              <div className="flex flex-col justify-center items-center text-[0.8rem]">
                <label>ENG U19</label>
                <label>299/10 (99.1)</label>
                <label>CRR : 0 | RRR: 0.00</label>
              </div>

              <div className="flex flex-col justify-center items-center text-[0.8rem]">
                <label className="-mt-2 animate-bounce">Over Change</label>
                <label className="text-[0.5rem] mt-4 ">SA trail by 216 runs</label>
                <label>0 0 0 0 0 0</label>
              </div>

              <div className="flex flex-col justify-center items-center text-[0.8rem]">
                <label>SA U19</label>
                <label>83/2 (29.5)</label>
                <label>CRR : 2.78 | RRR: 3.61</label>
              </div>

            </div>
         </div>
            )
          }

          {
            Data?.gamePlay[0]?.subMenu[0]?.subMenuChild[0]?.data.map((items,index)=>{
              return(
                <GameDetailsGrid {...items} key={index}/>
              )
            })
          }
           <IframeGrid/>
           <TableGrid/>
        </div>

        <div className="flex flex-col gap-5">

          {betStatus && <BetsSlip/>}

        <div className="baseContainerB">
          <div className="sub-containerBA">
            <label>MY BETS</label>
          </div>
          <div className="sub-containerBB">
            <button type="button" role="tab" tabIndex="-1">Unmatched Bets</button>
            <button type="button" role="tab" tabIndex="-1">Matched Bets</button>
          </div>
          <span className="bg-white pl-5 text-[0.8rem]">You have no Unmatched Bets</span>
         
        </div>
        </div>

      </section>
    )
}
export default GameDetails;