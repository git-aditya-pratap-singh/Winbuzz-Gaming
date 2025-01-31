import { addsImage } from "../../data/dummyData";
import "../../../assets/css/componentcss/adds.scss";

const Adds = ()=>{
    return(
        <section className="_addsContainer">
            <div className="header">
                <label>Play Games</label>
            </div>
            <div className="bodysection">
                {
                    addsImage.map((paths, index)=>{
                        return(
                            <img key={index} src={paths} alt="Error!" /> 
                        )
                    })
                }
            </div>
        </section>
    )
}
export default Adds;