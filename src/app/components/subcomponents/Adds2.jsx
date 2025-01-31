import { adds2Image } from "../../data/dummyData";
import "../../../assets/css/componentcss/adds.scss";

const Adds2 = ()=>{
    return(
        <section className="_addsContainer">
            <div className="header">
                <label>Play Games</label>
            </div>
            <div className="bodysection2">
                {
                    adds2Image.map((paths, index)=>{
                        return(
                            <div className="relative" key={index}>
                               <img src={paths} alt="Error!" /> 
                               <button>Play Now</button>
                            </div>
                           
                        )
                    })
                }
            </div>

            
        </section>
    )
}
export default Adds2;