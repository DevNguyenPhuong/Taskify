function TasksList() {
  return (
    <ul>
      <li className=" w-1/4  bg-indigo-400 p-8">
        <h1>This is the fisrt task</h1>
        <p>Time remaining</p>
        <progress max={50} value={12} className="block" />
        <button>Delete</button>
        <button>Edit</button>
        <button>Done</button>
      </li>
    </ul>
  );
}

export default TasksList;
