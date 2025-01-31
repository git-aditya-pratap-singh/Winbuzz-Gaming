import { imageBanner } from "../../data/dummyData";
import "../../../assets/scss/banner.scss";

const Banner = () => {
    return (
        <section className="_banner">
            {
                imageBanner.map((path, index) => {
                    return (
                        <div className="_bannerImage" key={index}>
                            {path && <img src={path} alt="" />}
                        </div>
                    )
                })
            }
        </section>
    )
}
export default Banner;