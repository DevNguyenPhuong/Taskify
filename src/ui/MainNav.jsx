import { NavLink } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineClipboardDocumentCheck,
  HiOutlineChatBubbleLeftRight,
} from "react-icons/hi2";

function MainNav() {
  return (
    <nav>
      <ul className="flex flex-col gap-1 md:gap-3">
        <li>
          <NavLink className="NavLink" to="/tasks">
            <HiOutlineClipboardDocumentCheck />
            <span className="text-[0.8rem] md:text-[1.6rem]">My Tasks</span>
          </NavLink>
        </li>

        <li>
          <NavLink className="NavLink" to="/user">
            <HiOutlineUser />
            <span className="text-[0.8rem] md:text-[1.6rem]">User</span>
          </NavLink>
        </li>

        <li>
          <NavLink className="NavLink" to="/messages">
            <HiOutlineChatBubbleLeftRight />
            <span className="text-[0.8rem] md:text-[1.6rem]">Chat</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
