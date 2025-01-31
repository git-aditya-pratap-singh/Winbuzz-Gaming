import wp_support from "../../../assets/img/wp_support.png";
import casinochip from "../../../assets/img/casino-chip.png";
import "./../../../assets/css/componentcss/footer.scss";

const Footer = ()=>{
    return(
     <section className="footer">
        <a target="_blank" className="whatsapp_link" href="https://wa.link/allsitelink1">
           <img src={wp_support}/>
        </a>

        <a target="_blank" className="casino-chip" href="https://wa.link/allsitelink1">
           <img src={casinochip}/>
        </a>

     </section>
    )
}
export default Footer;