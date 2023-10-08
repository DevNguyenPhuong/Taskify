function Task({ task }) {
  return (
    <li className=" bg-indigo-100 p-8">
      <h1 className="font-bold">{task.task}</h1>
      <p>{task.priority}</p>
      <p>{task.created_at}</p>

      <p>{task.duration}</p>
      {/* <progress max={50} value={12} className="block" /> */}
      <button>Delete</button>
      <button>Edit</button>
      <button>Done</button>
    </li>
  );
}

export default Task;
