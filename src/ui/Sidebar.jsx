import Logo from "./Logo";
import MainNav from "./MainNav";

function Sidebar() {
  return (
    <aside className="row-span-full flex flex-col items-center  gap-12 border-b border-solid border-b-gray-500 bg-gray-100 px-10 py-12 ">
      <Logo />
      <MainNav />
    </aside>
  );
}

export default Sidebar;
