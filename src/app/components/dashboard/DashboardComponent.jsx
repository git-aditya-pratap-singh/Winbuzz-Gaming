import { useState, useEffect } from "react";
import { useDispatch, useSelector, } from "react-redux";
import { login_popup, rules_popup, search_popup, sideBar_popup } from "../../redux/slices/stateSlice";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
//--------------Components---------------
import IconComponent from "../../../assets/icons/IconComponent";
import Hamburger from "hamburger-react";
import Profile from "../profiles/Profile";
import Login from "../../pages/home/Login";
import Forgetpswd from "../form/Forgetpswd";
import Rules from "../Rules";
import Search from "../subcomponents/Search";
import BottomTabs from "../subcomponents/BottomTabs";
import Footer from "../subcomponents/Footer";
import BonusRules from "../profiles/BonusRules";
import SubMenuSideBar from "../subcomponents/SubMenuSideBar";
import SubMenuChildSideBar from "../subcomponents/SubMenuChildSideBar";
import Marquee from "../subcomponents/Marque";
//-------------SCSS and JSON-------------------
import gameData from "../../data/data.json";
import { GameNavigation } from "../../data/dummyData";
import logo from "../../../assets/img/logo.png";
import "../../../assets/scss/dashboard.scss";

const DashboardComponent = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginState = useSelector((store) => store.centerliazedStore.open_login);
  const forgetState = useSelector((store) => store.centerliazedStore.open_forget);
  const rulesState = useSelector((store) => store.centerliazedStore.open_rules);
  const bonusrulesState = useSelector((store) => store.centerliazedStore.openBonus_rules);
  const searchState = useSelector((store) => store.centerliazedStore.open_search);
  const sideBarState = useSelector((store) => store.centerliazedStore.subMenuSidebarpopup);
  const childSideBarState = useSelector((store) => store.centerliazedStore.subMenuChildSidebarpopup);

  const [isToggled, setIsToggled] = useState(false);
  const [loginKey, setLoginKey] = useState(false);
  const [profileToggle, setprofileToggle] = useState(false);

  useEffect(() => {
    const storedLoginKey = localStorage.getItem("loginID");
    if (storedLoginKey == "true")
      setLoginKey(true);
  }, []);

  return (
    <section className="conatiner">

      {loginKey && <Marquee />}
      {profileToggle && <Profile />}
      {loginState && <Login />}
      {forgetState && <Forgetpswd />}
      {rulesState && <Rules />}
      {bonusrulesState && <BonusRules />}
      {searchState && <Search />}

      <div className="subContainerA">
        <div className="flex items-center">
          <div className="_navIcon">
            <div className="bg-[transparent]">
              <a>
                <Hamburger
                  color="#fff"
                  size={25}
                  duration={0.5}
                  easing="ease-in"
                  rounded
                  toggled={isToggled}
                  toggle={() => setIsToggled((prev) => !prev)}
                />
              </a>
            </div>
          </div>

          <div className="logo">
            <img src={logo} alt="" width={120} height={120} onClick={() => navigate('/')} />
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className={`subChildContainerAB`}>
            {
              loginKey && (
                <>
                  <div className="subChildDeposit">
                    <button>
                      <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="25px" height="25px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64"
                        xmlSpace="preserve"><g><circle fill="#ffffff" cx="32" cy="14" r="3">
                        </circle><path fill="#ffffff" d="M4,25h56c1.794,0,3.368-1.194,3.852-2.922c0.484-1.728-0.242-3.566-1.775-4.497l-28-17
                          C33.438,0.193,32.719,0,32,0s-1.438,0.193-2.076,0.581l-28,17c-1.533,0.931-2.26,2.77-1.775,4.497C0.632,23.806,2.206,25,4,25z
                          M32,9c2.762,0,5,2.238,5,5s-2.238,5-5,5s-5-2.238-5-5S29.238,9,32,9z"></path><rect x="34" y="27" fill="#ffffff" width="8" height="25"></rect><rect _ngcontent-gim-c82="" x="46" y="27" fill="#ffffff" width="8" height="25"></rect><rect x="22" y="27" fill="#ffffff" width="8" height="25"></rect><rect _ngcontent-gim-c82="" x="10" y="27" fill="#ffffff" width="8" height="25"></rect><path _ngcontent-gim-c82="" fill="#ffffff" d="M4,58h56c0-2.209-1.791-4-4-4H8C5.791,54,4,55.791,4,58z"></path><path _ngcontent-gim-c82="" fill="#ffffff" d="M63.445,60H0.555C0.211,60.591,0,61.268,0,62v2h64v-2C64,61.268,63.789,60.591,63.445,60z"></path></g></svg>
                      <a target="_blank" href="https://api.whatsapp.com/send?phone=231771394159">DEPOSIT</a>
                    </button>

                    <button>
                      <svg width="25px" height="25px" viewBox="0 -5.5 37 37" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <title>withdrawal</title>
                        <desc>Created with Sketch.</desc><g id="icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="ui-gambling-website-lined-icnos-casinoshunter" transform="translate(-2161.000000, -547.000000)" fill="#fff" fillRule="nonzero"><g id="1" transform="translate(1350.000000, 120.000000)"><path _ngcontent-gim-c82="" d="M833.95742,449.325161 L833.979486,449.298794 C834.583166,449.83056 835.334085,450.197377 836.162706,450.3293 L836.413553,450.36176 L836.412987,452.999942 C834.868195,452.903984 833.459525,452.302114 832.348743,451.35704 L832.130606,451.163498 L833.95742,449.325161 L833.979486,449.298794 Z M839.839189,449.189238 L841.621348,450.98129 C841.645806,451.005617 841.670343,451.025142 841.697469,451.04088 C840.608384,452.100762 839.176833,452.806805 837.585967,452.974794 L837.285857,452.999942 L837.285291,450.36176 C838.269854,450.263422 839.15802,449.835501 839.839189,449.189238 Z M832.488859,446.438341 L832.512709,446.436239 C832.585523,447.177501 832.841921,447.864498 833.23554,448.450598 L833.389489,448.665565 L833.341103,448.705254 L831.526619,450.530714 C830.647811,449.487249 830.06684,448.181949 829.915733,446.74761 L829.88998,446.438325 L832.488859,446.438341 L832.512709,446.436239 Z M841.186135,446.436239 L841.209985,446.438341 L843.808864,446.438325 C843.723095,447.837318 843.229574,449.125341 842.446367,450.183642 L842.274146,450.406861 L842.237666,450.361383 L840.412117,448.525146 C840.834685,447.923089 841.110211,447.209163 841.186135,446.436239 Z M836.849422,442.493272 C838.774918,442.493272 840.335841,444.063287 840.335841,446 C840.335841,447.936713 838.774918,449.506728 836.849422,449.506728 C834.923926,449.506728 833.363003,447.936713 833.363003,446 C833.363003,444.063287 834.923926,442.493272 836.849422,442.493272 Z M840.2697,427 C841.739265,427 842.930582,428.2042 842.930582,429.689655 L842.93,430.538 L838.095778,430.538718 L838.095579,430.256336 C838.095579,429.266032 837.301368,428.463232 836.321658,428.463232 C835.979971,428.463232 835.645555,428.56298 835.358607,428.750486 L829.22855,432.756148 C828.405789,433.293778 828.169982,434.403805 828.701861,435.235463 C828.838171,435.448602 829.017691,435.630063 829.22855,435.767848 L833.456223,438.530833 C830.692171,439.78428 828.768189,442.57994 828.768189,445.827586 C828.768189,446.771503 828.930718,447.677238 829.229164,448.518023 L813.660882,448.517241 C812.191317,448.517241 811,447.313042 811,445.827586 L811,429.689655 C811,428.2042 812.191317,427 813.660882,427 L840.2697,427 Z M831.526113,441.469887 L833.341103,443.294746 L833.389489,443.334435 C832.962301,443.894567 832.666531,444.561419 832.548539,445.288363 L832.512716,445.563692 L832.488859,445.561659 L829.889991,445.5615 C829.985391,444.006031 830.584859,442.587751 831.526113,441.469887 Z M840.237727,443.243044 L842.093019,441.376873 C843.014281,442.433138 843.625109,443.770129 843.78219,445.243698 L843.808853,445.5615 L841.209985,445.561659 L841.186128,445.563692 C841.108793,444.776519 840.824426,444.050543 840.388553,443.44161 L840.237727,443.243044 L842.093019,441.376873 Z M820.421736,442.241379 L815.375429,442.241379 C814.918365,442.241379 814.547842,442.611902 814.547842,443.068966 C814.547842,443.49087 814.863554,443.839036 815.271618,443.890104 L815.375429,443.896552 L820.421736,443.896552 C820.8788,443.896552 821.249323,443.526029 821.249323,443.068966 C821.249323,442.611902 820.8788,442.241379 820.421736,442.241379 Z M828.010177,442.241379 L822.963869,442.241379 C822.506806,442.241379 822.136283,442.611902 822.136283,443.068966 C822.136283,443.49087 822.451995,443.839036 822.860059,443.890104 L822.963869,443.896552 L828.010177,443.896552 C828.46724,443.896552 828.837763,443.526029 828.837763,443.068966 C828.837763,442.611902 828.46724,442.241379 828.010177,442.241379 Z M836.412987,439.000058 L836.413917,441.628808 L836.415573,441.638038 C835.486963,441.73035 834.644015,442.115839 833.982047,442.701719 L833.970063,442.688086 L833.970063,442.688086 L833.95742,442.674839 L832.129611,440.837423 C833.27144,439.780778 834.76473,439.102443 836.412987,439.000058 Z M837.285224,441.619128 L837.285857,439.000058 C838.784012,439.093119 840.15414,439.662006 841.248688,440.558307 L841.478962,440.755329 L839.624735,442.620211 C839.040521,442.134328 838.32822,441.798742 837.54638,441.672343 L837.283271,441.638038 L837.285224,441.619128 L837.285857,439.000058 Z M838.290746,437.983187 L842.931,437.984 L842.931367,440.827973 C841.785388,439.389903 840.155844,438.358489 838.290746,437.983187 Z M836.32143,430.256336 L836.322891,432.331765 L848,432.33214 L848,436.191856 L836.322891,436.191415 L836.32143,438.26766 L830.191373,434.261998 L836.32143,430.256336 Z M818.982646,430.586207 C818.452535,430.586207 817.976735,430.821249 817.651675,431.193857 C817.327674,430.821249 816.851874,430.586207 816.321764,430.586207 C815.342054,430.586207 814.547842,431.389007 814.547842,432.37931 C814.547842,433.369614 815.342054,434.172414 816.321764,434.172414 C816.851874,434.172414 817.327674,433.937372 817.652734,433.564763 C817.976735,433.937372 818.452535,434.172414 818.982646,434.172414 C819.962355,434.172414 820.756567,433.369614 820.756567,432.37931 C820.756567,431.389007 819.962355,430.586207 818.982646,430.586207 Z" id="withdrawal"></path></g></g></g>
                      </svg>
                      <a target="_blank" href="https://api.whatsapp.com/send?phone=231771394159">WITHDRAW</a>
                    </button>
                  </div>
                </>
              )
            }

            <span className="rules" onClick={() => dispatch(rules_popup(true))}>RULES</span>

            <input type="search" className="search-input" placeholder="Search here..." />
            <span onClick={() => dispatch(search_popup(true))} className="icons"><IconComponent iconType="searchIcon" iconSize={22} iconColor="#fff" /></span>

            {
              loginKey && (
                <>
                  <div className="balance">
                    <label>Bal: 0.00</label>
                    <label>Exp: 0</label>
                  </div>
                  <div className="userName" onClick={() => setprofileToggle(!profileToggle)}>
                    <label>Aditya</label>
                    <span><IconComponent iconType="downArrow" /></span>
                  </div>
                </>
              )
            }
          </div>

          {
            !loginKey && (
              <div className="login">
                <button onClick={() => dispatch(login_popup(true))}>LOGIN</button>
                <NavLink to="/register"><button>REGISTER</button></NavLink>
              </div>
            )
          }
        </div>
      </div>

      {/* Mobile navigation bar Details */}
      <div className="menu-wrapper">
        {
          gameData?.gamePlay.map((items, index) => {
            return (
              <div className="menu-items" key={items.id}>
                <NavLink to={`/game-list/${items?.eventTypeId}`} key={items?.id || index}>
                  <img src={items.icons} alt="Error" width={23} height={23} />
                  <label>{items.name}</label>
                </NavLink>
              </div>
            )
          })
        }
      </div>

      {
        loginKey && (
          <>
            <div className="mobileDiv">
              <button>
                <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="25px" height="25px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" xmlSpace="preserve"><g><circle fill="#ffffff" cx="32" cy="14" r="3"></circle><path fill="#ffffff" d="M4,25h56c1.794,0,3.368-1.194,3.852-2.922c0.484-1.728-0.242-3.566-1.775-4.497l-28-17
                                C33.438,0.193,32.719,0,32,0s-1.438,0.193-2.076,0.581l-28,17c-1.533,0.931-2.26,2.77-1.775,4.497C0.632,23.806,2.206,25,4,25z
                                 M32,9c2.762,0,5,2.238,5,5s-2.238,5-5,5s-5-2.238-5-5S29.238,9,32,9z"></path><rect x="34" y="27" fill="#ffffff" width="8" height="25"></rect><rect x="46" y="27" fill="#ffffff" width="8" height="25"></rect><rect x="22" y="27" fill="#ffffff" width="8" height="25"></rect><rect x="10" y="27" fill="#ffffff" width="8" height="25"></rect><path _ngcontent-gim-c82="" fill="#ffffff" d="M4,58h56c0-2.209-1.791-4-4-4H8C5.791,54,4,55.791,4,58z"></path><path _ngcontent-gim-c82="" fill="#ffffff" d="M63.445,60H0.555C0.211,60.591,0,61.268,0,62v2h64v-2C64,61.268,63.789,60.591,63.445,60z"></path></g></svg>
                <a target="_blank" href="https://api.whatsapp.com/send?phone=231771394159">DEPOSIT</a>
              </button>

              <button>
                <svg width="25px" height="25px" viewBox="0 -5.5 37 37" version="1.1"
                  xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <title>withdrawal</title><desc>Created with Sketch.</desc><g id="icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="ui-gambling-website-lined-icnos-casinoshunter" transform="translate(-2161.000000, -547.000000)" fill="#fff" fillRule="nonzero"><g id="1" transform="translate(1350.000000, 120.000000)">
                      <path d="M833.95742,449.325161 L833.979486,449.298794 C834.583166,449.83056 835.334085,450.197377 836.162706,450.3293 L836.413553,450.36176 L836.412987,452.999942 C834.868195,452.903984 833.459525,452.302114 832.348743,451.35704 L832.130606,451.163498 L833.95742,449.325161 L833.979486,449.298794 Z M839.839189,449.189238 L841.621348,450.98129 C841.645806,451.005617 841.670343,451.025142 
                    841.697469,451.04088 C840.608384,452.100762 839.176833,452.806805 837.585967,452.974794 L837.285857,452.999942 L837.285291,450.36176 C838.269854,450.263422 839.15802,449.835501 839.839189,449.189238 Z M832.488859,446.438341 L832.512709,446.436239 C832.585523,447.177501 832.841921,447.864498 833.23554,448.450598 L833.389489,448.665565 L833.341103,448.705254 
                    L831.526619,450.530714 C830.647811,449.487249 830.06684,448.181949 829.915733,446.74761 L829.88998,446.438325 L832.488859,446.438341
                    L832.512709,446.436239 Z M841.186135,446.436239 L841.209985,446.438341 L843.808864,446.438325 C843.723095,447.837318 843.229574,
                    449.125341 842.446367,450.183642 L842.274146,450.406861 L842.237666,450.361383 L840.412117,448.525146 C840.834685,447.923089 
                    841.110211,447.209163 841.186135,446.436239 Z M836.849422,442.493272 C838.774918,442.493272 840.335841,444.063287 840.335841,446 
                    C840.335841,447.936713 838.774918,449.506728 836.849422,449.506728 C834.923926,449.506728 833.363003,447.936713 833.363003,446 
                    C833.363003,444.063287 834.923926,442.493272 836.849422,442.493272 Z M840.2697,427 C841.739265,427 842.930582,428.2042 842.930582,
                    429.689655 L842.93,430.538 L838.095778,430.538718 L838.095579,430.256336 C838.095579,429.266032 837.301368,428.463232 836.321658,
                    428.463232 C835.979971,428.463232 835.645555,428.56298 835.358607,428.750486 L829.22855,432.756148 C828.405789,433.293778 828.169982,
                    434.403805 828.701861,435.235463 C828.838171,435.448602 829.017691,435.630063 829.22855,435.767848 L833.456223,438.530833 
                    C830.692171,439.78428 828.768189,442.57994 828.768189,445.827586 C828.768189,446.771503 828.930718,447.677238 829.229164,448.518023 
                    L813.660882,448.517241 C812.191317,448.517241 811,447.313042 811,445.827586 L811,429.689655 C811,428.2042 812.191317,427 
                    813.660882,427 L840.2697,427 Z M831.526113,441.469887 L833.341103,443.294746 L833.389489,443.334435 C832.962301,443.894567 
                    832.666531,444.561419 832.548539,445.288363 L832.512716,445.563692 L832.488859,445.561659 L829.889991,445.5615 C829.985391,444.006031 830.584859,442.587751 831.526113,441.469887 Z M840.237727,443.243044 L842.093019,441.376873 C843.014281,442.433138 843.625109,443.770129 843.78219,445.243698 L843.808853,445.5615 L841.209985,445.561659 L841.186128,445.563692 C841.108793,444.776519 840.824426,444.050543 840.388553,443.44161 L840.237727,443.243044 L842.093019,441.376873 Z M820.421736,442.241379 L815.375429,442.241379 C814.918365,442.241379 814.547842,442.611902 814.547842,443.068966 C814.547842,443.49087 814.863554,443.839036 815.271618,443.890104 L815.375429,443.896552 L820.421736,443.896552 C820.8788,443.896552 821.249323,443.526029 821.249323,443.068966 C821.249323,442.611902 820.8788,442.241379 820.421736,442.241379 Z M828.010177,442.241379 L822.963869,442.241379 C822.506806,442.241379 822.136283,442.611902 822.136283,443.068966 C822.136283,443.49087 822.451995,443.839036 822.860059,443.890104 L822.963869,443.896552 L828.010177,443.896552 C828.46724,443.896552 828.837763,443.526029 828.837763,443.068966 C828.837763,442.611902 828.46724,442.241379 828.010177,442.241379 Z M836.412987,439.000058 L836.413917,441.628808 L836.415573,441.638038 C835.486963,441.73035 834.644015,442.115839 833.982047,442.701719 L833.970063,442.688086 L833.970063,442.688086 L833.95742,442.674839 L832.129611,440.837423 C833.27144,439.780778 834.76473,439.102443 836.412987,439.000058 Z M837.285224,441.619128 L837.285857,439.000058 C838.784012,439.093119 840.15414,439.662006 841.248688,440.558307 L841.478962,440.755329 L839.624735,442.620211 C839.040521,442.134328 838.32822,441.798742 837.54638,441.672343 L837.283271,441.638038 L837.285224,441.619128 L837.285857,439.000058 Z M838.290746,437.983187 L842.931,437.984 L842.931367,440.827973 C841.785388,439.389903 840.155844,438.358489 838.290746,437.983187 Z M836.32143,430.256336 L836.322891,432.331765 L848,432.33214 L848,436.191856 L836.322891,436.191415 L836.32143,438.26766 L830.191373,434.261998 L836.32143,430.256336 Z M818.982646,430.586207 C818.452535,430.586207 817.976735,430.821249 817.651675,431.193857 C817.327674,430.821249 816.851874,430.586207 816.321764,430.586207 C815.342054,430.586207 814.547842,431.389007 814.547842,432.37931 C814.547842,433.369614 815.342054,434.172414 816.321764,434.172414 C816.851874,434.172414 817.327674,433.937372 817.652734,433.564763 C817.976735,433.937372 818.452535,434.172414 818.982646,434.172414 C819.962355,434.172414 820.756567,433.369614 820.756567,432.37931 C820.756567,431.389007 819.962355,430.586207 818.982646,430.586207 Z" id="withdrawal"></path></g></g></g>
                </svg>
                <a target="_blank" href="https://api.whatsapp.com/send?phone=231771394159">WITHDRAW</a>
              </button>
            </div>
          </>
        )
      }

      {/* PC navigation bar Details */}
      <div className="subContainerB">
        <ul>
          {GameNavigation.map((item, index) => (
            <NavLink to={`/game-list/${item?.eventTypeId}`} key={item?.id || index}>
              <li>{item?.name}</li>
            </NavLink>
          ))}
        </ul>
      </div>


      <div className="subContainerC">
        <div className={`subChildContainerCA absolute md:static top-0 duration-500 ease-in-out ${isToggled ? 'left-0' : 'left-[-500px]'}`}>


          {sideBarState?.status && <SubMenuSideBar />}
          {childSideBarState?.status && <SubMenuChildSideBar />}

          <img className="logo" src={logo} alt="Error" width={120} height={120} onClick={() => navigate('/')} />
          <ul className="w-full">
            {
              gameData?.gamePlay.map((items, index) => {
                return (
                  <li key={index} className="flex justify-between items-center border-b-[1px]"
                    onClick={() => dispatch(sideBar_popup({ 'type': `${items.name}`, 'status': true }))}>
                    <div className="flex p-2 gap-3">
                      <span className="menu-icon"><img src={items.icons} alt="error" width={20} height={20} /></span>
                      <label>{items.name}</label>
                    </div>
                    <label className="mr-3"><IconComponent iconType="leftArrow" iconColor='#d1d1d1' /></label>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className="_outletSection">
          <Outlet />
        </div>
      </div>
      <Footer />
      <BottomTabs />

      <div className="w-full p-5 bg-[#000] text-center text-white hidden md:block text-[0.7rem]">
        <label>Rules & Regulations © 2023</label>
      </div>
    </section>
  )
}
export default DashboardComponent;