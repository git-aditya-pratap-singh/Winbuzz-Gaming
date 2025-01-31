import { useDispatch } from "react-redux";
import { search_popup } from "../../redux/slices/stateSlice";
import IconComponent from "../../../assets/icons/IconComponent";
import "../../../assets/css/componentcss/search.scss";

const Search = ()=>{
    const dispatch = useDispatch();
    return(
        <>
        <section className="searchBackContainer">
            <div className="searchContainer">
                <span className="icons" onClick={()=> dispatch(search_popup(false))}><IconComponent iconType="leftArrowIcon" iconSize={22} iconColor="#fff"/></span>
                <input type="text" placeholder="Search Events"/>
                <span className="icons"><IconComponent iconType="searchIcon" iconSize={22} iconColor="#fff"/></span>
            </div>
        </section>
        </>
    )
}
export default Search;