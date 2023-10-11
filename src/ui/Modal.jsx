import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";

function Modal({ children, onClose }) {
  return createPortal(
    <div className="fixed left-0 top-0 z-50 h-screen w-full bg-neutral-900/[0.1] backdrop-blur-sm transition-all duration-500 ">
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-gray-50 px-16 py-12 shadow-lg transition-all duration-500">
        <button
          onClick={onClose}
          className="absolute right-8 top-5 translate-x-3 rounded-sm border-none bg-none p-2 transition-all duration-200 hover:bg-gray-200 [&_svg]:h-10 [&_svg]:w-10 [&_svg]:text-gray-500"
        >
          <HiXMark />
        </button>
        <div>{children}</div>
      </div>
    </div>,
    document.body,
  );
}

export default Modal;
