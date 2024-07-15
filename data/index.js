import { FaFolder, FaUser } from "react-icons/fa";
import { MdHomeWork, MdOutlineFolderCopy } from "react-icons/md";

export const usersNav = {
  title: "Users",
  data: [
    {
      title: "Home",
      activeKey: "/user/home",
      path: "/user/home",
      icon: MdHomeWork,
    },
    {
      title: "Courses",
      activeKey: "/user/courses",
      path: "/user/courses",
      icon: FaFolder,
    },
    {
      title: "Past Questions",
      activeKey: "/user/questions",
      path: "/user/questions",
      icon: MdOutlineFolderCopy,
    },
    {
      title: "Profile",
      activeKey: "/user/profile",
      path: "/user/profile",
      icon: FaUser,
    },
  ],
};
