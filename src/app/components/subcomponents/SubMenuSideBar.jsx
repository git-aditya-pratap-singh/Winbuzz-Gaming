import IconComponent from "../../../assets/icons/IconComponent";
import { useDispatch, useSelector } from "react-redux";
import {sideBar_popup, childSideBar_popup} from "../../redux/slices/stateSlice";
import Data from "../../data/data.json";

import "../../../assets/css/componentcss/submenusidebar.scss";

const SubMenuSideBar = ()=>{
    const dispatch = useDispatch();
    const sideBarState = useSelector((store)=>store.centerliazedStore.subMenuSidebarpopup);
    const newArray = Data?.gamePlay.find((items)=> items?.name === sideBarState?.type);
    
    return(
        <section className="submenuSidebar">
            <div onClick={()=> dispatch(sideBar_popup({'type': sideBarState?.type, 'status': false}))}><IconComponent iconType="subArrowIcon" iconSize={20}/> Previous</div>
            <span className="title">{sideBarState?.type}</span>
            <ul>
                {
                    newArray?.subMenu.map( item =>{ 
                        return(
                            <li key={item.id} className="flex justify-between items-center border-b-[1px]"
                            onClick={()=>dispatch(childSideBar_popup({'type': `${item?.subMenuName}`, 'status': true}))} > 
                                <span>{item?.subMenuName}</span>
                                <label className="mr-3"><IconComponent iconType="leftArrow" iconColor='#d1d1d1'/></label>
                            </li>
                        )
                   })
                }
            </ul>
        </section>
    )
}
export default SubMenuSideBar;