import UserAvatar from "../features/authentication/UserAvatar";
import Logout from "../features/authentication/Logout";

function Header() {
  return (
    <header className="flex items-center justify-end gap-10 border-b border-solid border-b-gray-100 bg-gray-100 px-16 py-8">
      <UserAvatar />
      <Logout />
    </header>
  );
}

export default Header;
