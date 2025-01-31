
import PropTypes from 'prop-types'; 
import { useNavigate } from "react-router";
import tv from "../../../assets/img/tv.svg";
import "../../../assets/css/componentcss/gridtable.scss";

const Gridtable = ({gameName, gameDetails})=>{
 
  const navigate = useNavigate();
    return(
        <section className="gridConatiner">
            <div className="gridHeader">
                <div className="gridTitle">
                    <div className="grid-title-box">
                       <img src={gameName?.image} alt="error" width={20}/>
                       <label>{gameName?.name}</label>
                    </div>
                    <div className="grid-title-contain">
                        <span>+<label>LIVE</label></span>
                        <span>+<label>VIRTUAL</label></span>
                    </div>
                </div>
                
                <div className="gridHeaderbody">
                    <span>1</span>
                    <span>X</span>
                    <span>2</span>
                </div>
            </div>

            <div className="gridBody">
              {Object.entries(gameDetails).map(([key, value],index)=>{
                return (
                  <div className="tableField" key={`cricket-item-${index}`} onClick={()=> navigate(`/game-detail/${key}`)}>
                    <div className="tableFieldmain">
                      <div className="table-title-text">
                        <label>{value?.date}</label>
                        <span>{value?.eventName}</span>
                      </div>

                      <div className="table-data">
                        {value?.inPlay === 1 && <span className="blink"></span>}
                        {value?.isTv === 1 && <p><img src={tv} aly=""/></p>}
                        {value?.isFancy === 1 && <label className="w-7 text-center">F</label>}
                        {value?.isBookmaker === 1 && <label>BM</label>}
                      </div>
                    </div>

                  <div className="tableSecondField">
                    <div className="table-dataItem">
                          {/* availableToBack use for Index=>1 */}
                          <div className="table-dataItemBox">
                            <label>{value[0]?.ex.availableToBack[0]?.price}</label>
                            <span>{value[0]?.ex.availableToBack[0]?.size}</span>
                          </div>
                          {/* availableToLay use for Index=>1 */}
                          <div className="table-dataItemBox">
                            <label>{value[0]?.ex.availableToLay[0]?.price}</label>
                            <span>{value[0]?.ex.availableToLay[0]?.price}</span>
                          </div>

                          {/* availableToBack use for Index=> X */}
                          <div className="table-dataItemBox">
                            {value[2]?.ex.availableToBack[0]?.price ? 
                            <label>{value[2]?.ex.availableToBack[0]?.price}</label> : 
                            <label>--</label>}

                             {value[2]?.ex.availableToBack[0]?.size ? 
                            <span>{value[2]?.ex.availableToBack[0]?.size}</span> : 
                            <span>--</span>}
                          </div>
                          {/* availableToLay use for Index=>X */}
                          <div className="table-dataItemBox">
                            {value[2]?.ex.availableToLay[0]?.price ? 
                            <label>{value[2]?.ex.availableToLay[0]?.price}</label> : 
                            <label>--</label>}

                             {value[2]?.ex.availableToLay[0]?.size ? 
                            <span>{value[2]?.ex.availableToLay[0]?.size}</span> : 
                            <span>--</span>}
                          </div>

                          {/* availableToBack use for Index=>2 */}
                          <div className="table-dataItemBox">
                            <label>{value[1]?.ex.availableToBack[0]?.price}</label>
                            <span>{value[1]?.ex.availableToBack[0]?.size}</span>
                          </div>
                          {/* availableToLay use for Index=>2 */}
                          <div className="table-dataItemBox">
                            <label>{value[1]?.ex.availableToLay[0]?.price}</label>
                            <span>{value[1]?.ex.availableToLay[0]?.size}</span>
                          </div>
                    </div>
                  </div>
              </div>
           );
          })}
        </div>
      </section>
    )
};

Gridtable.propTypes = {
  gameName: PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.any
  }),
  gameDetails: PropTypes.object,
};

export default Gridtable;