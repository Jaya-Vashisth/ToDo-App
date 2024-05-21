import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [task, setTask] = useState("your task");
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSave = () => {};

  const handleEdit = () => {};

  const handleDelete = () => {};

  return (
    <>
      <Navbar />

      <div className="card container">
        <div className="header">
          <h2>iTask- Manage your todos at one place</h2>
        </div>
        <div>Add your ToDo</div>
        <div className="create">
          <input name="todo" value={task} type="text" onChange={handleChange} />
          <button className="savebtn" onClick={handleSave}>
            Save
          </button>
        </div>
        <hr />
        <div>
          <h4>Your Todos</h4>
        </div>
        <div className="todos">
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
            commodi?
          </div>
          <div className="buttons">
            <button className="edit" onClick={handleEdit}>
              Edit
            </button>
            <button className="delete" onClick={handleDelete}>
              delete
            </button>
          </div>
        </div>
        <div className="todos"></div>
        <div className="todos"></div>
      </div>
    </>
  );
}

export default App;
