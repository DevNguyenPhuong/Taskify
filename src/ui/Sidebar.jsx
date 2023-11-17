import Logo from "./Logo";
import MainNav from "./MainNav";

function Sidebar() {
  return (
    <aside className="row-span-full flex flex-col items-center gap-6  border-b border-solid border-b-gray-500 bg-gray-100 px-0 py-6 md:gap-12 md:px-10 md:py-12 ">
      <Logo />
      <MainNav />
    </aside>
  );
}

export default Sidebar;
