import { NavLink } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineClipboardDocumentCheck,
  HiOutlineChatBubbleLeftRight,
} from "react-icons/hi2";

function MainNav() {
  return (
    <nav>
      <ul className="flex flex-col gap-3">
        <li>
          <NavLink className="NavLink" to="/tasks">
            <HiOutlineClipboardDocumentCheck />
            <span>My Tasks</span>
          </NavLink>
        </li>

        <li>
          <NavLink className="NavLink" to="/user">
            <HiOutlineUser />
            <span>User</span>
          </NavLink>
        </li>

        <li>
          <NavLink className="NavLink" to="/messages">
            <HiOutlineChatBubbleLeftRight />
            <span>Chat</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
