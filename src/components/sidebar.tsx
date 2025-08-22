"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faFolderOpen,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "./ui/button";

const Sidebar = () => {
  // const handleMoveToSection = (index) => {
  // 	fullpage_api.moveTo(index);
  // 	fullpage_api.getActiveSection();
  // };

  // const containIsActive = (index) => {
  // 	if (fullpage_api.getActiveSection().index === index) {
  // 		return "bg-gray-500";
  // 	}
  // 	return "";
  // };
  return (
    <div className="hidden md:flex fixed z-40 bg-gray-700 h-[50vh] w-14  flex-col justify-between items-center p-4 left-0 top-1/4 rounded-e-3xl">
      <ul
        id="sidebar"
        className="flex flex-col justify-evenly items-center h-full  text-gray-50"
      >
        <li data-menuanchor="home" className="active">
          <Button onClick={() => console.log("here")}>
            <FontAwesomeIcon icon={faHome} className="text-xl" />
          </Button>
        </li>
        <li data-menuanchor="about">
          <Button onClick={() => console.log("here")}>
            <FontAwesomeIcon icon={faUser} className="text-xl" />
          </Button>
        </li>
        <li data-menuanchor="projects">
          <Button onClick={() => console.log("here")}>
            <FontAwesomeIcon icon={faFolderOpen} className="text-xl" />
          </Button>
        </li>
        <li data-menuanchor="contact">
          <Button onClick={() => console.log("here")}>
            <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
