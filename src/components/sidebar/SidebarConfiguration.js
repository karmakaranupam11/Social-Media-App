import { AiOutlineHome, AiFillHome, AiOutlineSearch, AiOutlineCompass, AiFillCompass, AiOutlineMessage, AiFillMessage, AiOutlineHeart, AiFillHeart, AiOutlinePlusCircle, AiFillPlusCircle } from "react-icons/ai"
import { RiVideoLine, RiVideoFill } from "react-icons/ri"
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { CgProfile } from "react-icons/cg"

const menue = [
    { title: "Home", icon: <AiOutlineHome className="text-2xl mr-5" />, activeIcon: <AiFillHome className="text-2xl mr-5" style={{ color: '#d62976' }} /> },
    { title: "Search", icon: <AiOutlineSearch className="text-2xl mr-5" />, activeIcon: <AiOutlineSearch className="text-2xl mr-5" style={{ color: '#d62976' }} /> },
    { title: "Explorer", icon: <AiOutlineCompass className="text-2xl mr-5" />, activeIcon: <AiFillCompass className="text-2xl mr-5" style={{ color: '#d62976' }} /> },
    { title: "Reels", icon: <RiVideoLine className="text-2xl mr-5" />, activeIcon: <RiVideoFill className="text-2xl mr-5" style={{ color: '#d62976' }} /> },
    { title: "Message", icon: <AiOutlineMessage className="text-2xl mr-5" />, activeIcon: <AiFillMessage className="text-2xl mr-5" style={{ color: '#d62976' }} /> },
    { title: "Notification", icon: <AiOutlineHeart className="text-2xl mr-5" />, activeIcon: <AiFillHeart className="text-2xl mr-5" style={{ color: '#d62976' }} /> },
    { title: "Create", icon: <AiOutlinePlusCircle className="text-2xl mr-5" />, activeIcon: <AiFillPlusCircle className="text-2xl mr-5" style={{ color: '#d62976' }} /> },
    { title: "Profile", icon: <CgProfile className="text-2xl mr-5" />, activeIcon: <CgProfile className="text-2xl mr-5" style={{ color: '#d62976' }} /> }
]

export default menue