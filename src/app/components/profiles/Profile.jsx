import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { profile_popup, bonus_popup  } from "../../redux/slices/stateSlice";
//-----------------ICON And SCSS-------------------
import IconComponent from "../../../assets/icons/IconComponent";
import "../../../assets/scss/profile.scss";

const Profile = ()=>{
    const titleData = [
        {
            id: 1,
            title: "Wallet Amount",
            subTitle: "inclusive Bonus",
            value: "0.00"
        }, {
            id: 2,
            title: "Net Exposure",
            subTitle: "",
            value: "0.00"
        }, {
            id: 3,
            title: "Bonus",
            subTitle: "",
            value: "0.09"
        }, {
            id: 4,
            title: "Available Withdrawal",
            subTitle: "",
            value: "0.01"
        }
    ];
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logoutFunc = ()=>{
        localStorage.removeItem('loginID');
        navigate('../');
    };

    const funcBets = async()=>{
        dispatch(profile_popup(false));
        await navigate("/reports/bet-history");
    }

    const funcProfit = async()=> await navigate("/reports/profit-loss");
    const funcAcStatment = async()=> await navigate("/reports/account-statement");
    const funcMarket = async()=> await navigate('/market-analysis');
    const funcSettings = async()=> await navigate('/settings');
    const funcChangePassword = async()=> await navigate('/change-password');

    return(
        <section className="_profile">
            <div className="arrowIcon"></div>
            <div className="profile-conatinerA">
                {
                    titleData.map((items)=>{
                        return(
                            <div className="profileHeader" key={items?.id}>
                                <div className="profile-title"> 
                                    <label>{items?.title}</label>
                                    { items?.subTitle && <p>{`(${items?.subTitle})`}</p>}
                                </div>
                                <label>{items?.value}</label>
                            </div>
                        )
                    })
                }
            </div>

            <div className="profile-conatinerB">
                <button> <NavLink to="/reffer-and-earn">Reffer and Earn</NavLink></button>
                <button> <NavLink to="/bonus-list">Awaiting Bonus 1290</NavLink></button>
            </div>

            <div className="profile-conatinerC">
                <ul>
                    <li onClick={funcBets}>My Bets</li>
                    <li onClick={funcProfit}>Betting Profit And Loss</li>
                    <li onClick={funcAcStatment}>Account Statement</li>
                    <li onClick={funcMarket}>Market Analysis</li>
                    <li onClick={funcSettings}>Stake Settings</li>
                    <li onClick={funcChangePassword}>Change Password</li>
                    <li onClick={()=>dispatch(bonus_popup(true))}>Bonus Rules</li>
                </ul>
            </div>
            <div className="logoutSection" onClick={logoutFunc}>
                <label>LOGOUT</label>
                <IconComponent iconType="logoutIcon"/>
            </div>
        </section>
    )
}
export default Profile;