import Modal from "../../ui/Modal";
import { useState } from "react";
import CreateTaskForm from "./CreateTaskForm";

function AddTask() {
  const [IsOpenModal, setIsOpenModal] = useState(false);

  return (
    <li>
      <button
        className="flex h-[25rem] w-[26rem] items-center justify-center text-8xl font-bold uppercase text-indigo-400 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] transition-all duration-300 hover:scale-110 hover:text-indigo-700 active:scale-90"
        onClick={() => setIsOpenModal(!IsOpenModal)}
      >
        +
      </button>

      {IsOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <CreateTaskForm onCloseModal={() => setIsOpenModal(false)} />
        </Modal>
      )}
    </li>
  );
}

export default AddTask;
