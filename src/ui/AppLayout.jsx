import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="grid h-screen grid-cols-[26rem_1fr] grid-rows-[auto_1fr] ">
      <Header />
      <Sidebar />

      <main className=" overflow-scroll bg-gray-50 px-20 pb-24 pt-16">
        <div className="mx-auto my-0 flex max-w-[120rem] flex-col gap-12">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
