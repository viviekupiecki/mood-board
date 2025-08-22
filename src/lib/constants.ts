import { AiFillClockCircle, AiFillHome, } from "react-icons/ai";
import {
    BsBookFill,
    BsPencilFill,
    BsPersonLinesFill,
    BsFillKeyboardFill,
    BsArrow90DegRight,
    BsArrow90DegLeft,
    BsFillGiftFill,
    BsCakeFill
} from "react-icons/bs";

export const sideNavData = [
    {
        id: 0,
        title: "Home",
        link: "/",
        icon: AiFillHome
    },
    {
        id: 1,
        title: "About Me",
        link: "/about",
        icon: BsPersonLinesFill
    },
    {
        id: 2,
        title: "Entries",
        link: "/entries",
        icon: BsBookFill
    },
    {
        id: 3,
        title: "New Entry",
        link: "/entry-new",
        icon: BsPencilFill
    },
];

export const sideNavProjectsData = [
    {
        id: 4,
        title: "White Elephant",
        icon: BsFillGiftFill,
        link: "/projects/white-elephant"
    },
    {
        id: 5,
        title: "Global Clock",
        icon: AiFillClockCircle,
        link: "/projects/clock"
    },
    {
        id: 6,
        title: "Wedding Planner",
        icon: BsCakeFill,
        link: "/projects/wedding-planner"
    }
];