import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import {bet_popup} from "../../redux/slices/stateSlice";
import IconComponent from "../../../assets/icons/IconComponent";

import "../../../assets/css/componentcss/betslip.scss";


const BetsSlip = ()=>{

    const dispatch = useDispatch();
    const dataState = useSelector((store)=>store.centerliazedStore.betPopupStatus);
    const [betValue, setBetValue] = useState(dataState?.value);
    const [stake, setStake] = useState(0); 

    const getIncrementValue = Math.floor(betValue)

    const Stakes = (value) => {
        setStake((prevStake) => prevStake + value);
    };

    const closeBetSection = ()=>{
        setBetValue("");
        dispatch(bet_popup({'type': "", 'value': "", 'status': false}))
    }

    const incrementValue = () => {
        setBetValue((prevValue) => {
          const newValue = parseFloat(prevValue) + 0.02; 
          return parseFloat(newValue.toFixed(2));
        });
    };

    const decrementValue = ()=>{
        setBetValue((prevValue) => {
            const newValue = parseFloat(prevValue) - 0.02; 
            return parseFloat(newValue.toFixed(2));
        });
    }

    useEffect(()=>{
        setBetValue(dataState?.value)
    },[dataState?.value])

    return(
        <section className="betsSection">
          <div className="betsHeader">
            <div className="betsHeading">
              <label>BET SLIP</label>
            </div>
            <span onClick={closeBetSection}><IconComponent iconType="crossIcon" iconColor="#fff" /></span>
          </div>
          <div className="betsBody">
            <div className={`betsBody-container border-2 border-[${dataState?.colorType}]`}>
                <p>Hobart Hurricanes v Sydney Thunder</p>
                <p>Hobart Hurricanes</p>
                <label className="text-[0.7rem]">Odds</label>
                <div className="flex flex-row gap-2 items-center justify-centerw-full">
                    <div className="flex flex-col items-start gap-2">
                        
                        <div className="flex flex-row items-center justify-center p-1 border rounded-md">
                            <span className="text-[0.7rem] text-[#b0b0b0]" onClick={incrementValue}><IconComponent iconType="plusIcon"/></span>
                            <input className="inputA" type="text" value={betValue} placeholder="15" readOnly="readonly" min="1.01" max="999.99" />
                            <span className="text-[0.7rem] text-[#b0b0b0]" onClick={decrementValue}><IconComponent iconType="minusIcon"/></span>
                        </div>
                    </div>

                    <input type="number" required="" maxLength="10" min="0" placeholder="Stakes" value={stake} className="inputB"/>
                </div>
                <div className="flex flex-row gap-2 items-center justify-evenly w-full">
                    <button onClick={() => Stakes(100)}>100</button>
                    <button onClick={() => Stakes(200)}>200</button>
                    <button onClick={() => Stakes(300)}>300</button>
                    <button onClick={() => Stakes(500)}>500</button>
                </div>

                <div className="flex flex-row gap-2 items-center justify-evenly w-full">
                    <button onClick={() => Stakes(1000)}>1000</button>
                    <button onClick={() => Stakes(1500)}>1500</button>
                    <button onClick={() => Stakes(2000)}>2000</button>
                    <button onClick={() => Stakes(2500)}>2500</button>
                </div>

                <div className="flex flex-row gap-2 items-center justify-evenly w-full ">
                    <span className="stakeChage text-white" onClick={() => setStake(100)}>MIN</span>
                    <span className="stakeChage" onClick={() => setStake(200000)}>MAX</span>
                    <span className="stakeChage">EDIT STAKE</span>
                    <span className="stakeChage" onClick={() => setStake(0)}>CLEAR</span>
                </div>

                <div className="flex flex-row gap-2 items-center justify-evenly w-full ">
                   <span className="bs_cancel" onClick={closeBetSection}>Cancel Order</span>
                   <span className="bs_pb">Place Order</span>
                </div>
            </div>
          </div>
        </section>
    )
}
export default BetsSlip;