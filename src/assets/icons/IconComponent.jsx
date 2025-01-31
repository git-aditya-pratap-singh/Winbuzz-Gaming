
import PropTypes from 'prop-types';
import {FaUser,FaWhatsapp,FaArrowLeft, FaTwitter, FaTelegram, FaInstagram } from 'react-icons/fa';
import { BiSolidHandDown } from "react-icons/bi";
import { FiLogIn, FiLogOut} from "react-icons/fi";
import { FaBuildingColumns, FaPlus, FaMinus, FaFacebook} from "react-icons/fa6";
import { TiArrowSortedDown } from "react-icons/ti";
import { MdArrowForwardIos, MdContentCopy } from "react-icons/md";
import { RxCross1 } from 'react-icons/rx';
import { DiAndroid } from "react-icons/di";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { HiOutlineStar } from "react-icons/hi";
import { BsEyeFill } from "react-icons/bs";


const IconComponent = ({ iconType, iconSize=null, iconColor=null, iconStyle=null }) => {
  const icons = {
    userIcon: <FaUser size={iconSize} color={iconColor} className={iconStyle}/>,
    leftArrowIcon: <FaArrowLeft size={iconSize} color={iconColor} className={iconStyle}/>,
    loginHand: <BiSolidHandDown size={iconSize} color={iconColor} className={iconStyle}/>,
    loginIcon: <FiLogIn size={iconSize} color={iconColor} className={iconStyle}/>,
    depositIcon: <FaBuildingColumns size={iconSize} color={iconColor} className={iconStyle}/>,
    downArrow: <TiArrowSortedDown size={iconSize} color={iconColor} className={iconStyle}/>,
    crossIcon: <RxCross1 size={iconSize} color={iconColor} className={iconStyle}/>,
    leftArrow: <MdArrowForwardIos size={iconSize} color={iconColor} className={iconStyle}/>,
    logoutIcon: <FiLogOut size={iconSize} color={iconColor} className={iconStyle}/>,
    androidIcon: <DiAndroid size={iconSize} color={iconColor} className={iconStyle}/>,
    whatsappIcon: <FaWhatsapp size={iconSize} color={iconColor} className={iconStyle}/>,
    searchIcon: <IoSearchOutline size={iconSize} color={iconColor} className={iconStyle}/>,
    subArrowIcon: <IoIosArrowDropleftCircle size={iconSize} color={iconColor} className={iconStyle}/>,
    starIcon: <HiOutlineStar size={iconSize} color={iconColor} className={iconStyle}/>,
    plusIcon: <FaPlus size={iconSize} color={iconColor} className={iconStyle}/>,
    minusIcon: <FaMinus size={iconSize} color={iconColor} className={iconStyle}/>,
    eyeIcon: <BsEyeFill size={iconSize} color={iconColor} className={iconStyle}/>,
    faceBookIcon: <FaFacebook size={iconSize} color={iconColor} className={iconStyle}/>,
    twitterIcon: <FaTwitter size={iconSize} color={iconColor} className={iconStyle}/>,
    teligramIcon: <FaTelegram size={iconSize} color={iconColor} className={iconStyle}/>,
    instagramIcon: <FaInstagram size={iconSize} color={iconColor} className={iconStyle}/>,
    copyIcon: <MdContentCopy size={iconSize} color={iconColor} className={iconStyle}/>
  };
  return icons[iconType] || null;
};

// Define PropTypes for the component
IconComponent.propTypes = {
  iconType: PropTypes.oneOf([
    'userIcon',
    'leftArrowIcon',
    'loginHand',
    'loginIcon',
    'depositIcon',
    'downArrow',
    'leftArrow',
    'logoutIcon',
    'androidIcon',
    'whatsappIcon',
    'searchIcon',
    'subArrowIcon',
    'crossIcon',
    'starIcon',
    'plusIcon',
    'minusIcon',
    'eyeIcon',
    'faceBookIcon',
    'twitterIcon',
    'teligramIcon',
    'instagramIcon',
    'copyIcon'
  ]).isRequired,
  iconSize: PropTypes.number,
  iconColor: PropTypes.any,
  iconStyle: PropTypes.any,
};

export default IconComponent;
