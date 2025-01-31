import { NavLink } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { childSideBar_popup } from "../../redux/slices/stateSlice";
//--------------------ICON---------------
import IconComponent from "../../../assets/icons/IconComponent";
//----------------JSON and SCSS-------------------
import Data from "../../data/data.json";
import "../../../assets/scss/submenusidebar.scss";

const SubMenuChildSideBar = () => {

    const dispatch = useDispatch();
    const childSideBarState = useSelector((store) => store.centerliazedStore.subMenuChildSidebarpopup);
    const sideBarState = useSelector((store) => store.centerliazedStore.subMenuSidebarpopup);

    const subNewArray = Data?.gamePlay?.find((item) => item?.name === sideBarState?.type)
        ?.subMenu?.find((val) => val?.subMenuName === childSideBarState?.type);

    return (
        <section className="submenuSidebar">
            <div onClick={() => dispatch(childSideBar_popup({ 'type': childSideBarState?.type, 'status': false }))}>
                <IconComponent iconType="subArrowIcon" iconSize={20} /> Previous</div>
            <span className="title">{childSideBarState?.type}</span>
            <ul>
                {
                    subNewArray?.subMenuChild.map(item => {
                        return (
                            <NavLink to={`/game-detail/${item.id}`} key={item.id}>
                                <li className="flex justify-between items-center border-b-[1px]">
                                    <span>{item?.subChildName}</span>
                                    <label className="mr-3">
                                        <IconComponent iconType="leftArrow" iconColor="#d1d1d1" />
                                    </label>
                                </li>
                            </NavLink>
                        )
                    })
                }
            </ul>
        </section>
    )
}
export default SubMenuChildSideBar;