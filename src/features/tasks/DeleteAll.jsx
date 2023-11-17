import { useDeleteAllTask } from "./useDeleteTask";

function DeleteAll() {
  const { isDeleting, deleteTaskAll } = useDeleteAllTask();
  return (
    <div>
      <button
        className="rounded-lg bg-red-500 px-6 py-3 font-bold uppercase  text-gray-50 transition-all duration-300 hover:scale-110 hover:text-gray-100 active:scale-90"
        disabled={isDeleting}
        onClick={deleteTaskAll}
      >
        Clear my day
      </button>
    </div>
  );
}

export default DeleteAll;
