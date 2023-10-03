import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";

function Logout() {
  const { logout, isLoading } = useLogout();
  return (
    <button
      className="rounded-sm border-none bg-none p-2 transition-all duration-200 hover:bg-gray-200"
      disabled={isLoading}
      onClick={logout}
    >
      {!isLoading ? (
        <HiArrowRightOnRectangle className="h-11 w-11 text-indigo-600" />
      ) : (
        <SpinnerMini />
      )}
    </button>
  );
}

export default Logout;
