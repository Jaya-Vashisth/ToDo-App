import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from "uuid";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function App() {
  const [task, setTask] = useState("");
  const [showFinished, setshowFinished] = useState(true);

  const [tasks, setTasks] = useState(() => {
    let tasksString = localStorage.getItem("todos");
    return tasksString ? JSON.parse(tasksString) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(tasks));
  }, [tasks]);

  const toggleFinished = () => {
    setshowFinished(!showFinished);
  };

  //handle the input field
  const handleChange = (e) => {
    setTask(e.target.value);
  };

  //handle save button
  const handleSave = () => {
    if (task.trim().length >= 1) {
      setTasks([...tasks, { id: uuidv4(), task, isCompleted: false }]);
      setTask("");
    }
  };

  const handleEdit = (e, id) => {
    let ediTask = tasks.filter((item) => {
      return item.id === id;
    });
    setTask(ediTask[0].task);

    let newTasks = tasks.filter((item) => {
      return item.id != id;
    });
    setTasks(newTasks);
  };

  const handleDelete = (e, id) => {
    let newTasks = tasks.filter((item) => {
      return item.id != id;
    });
    setTasks(newTasks);
  };

  const handleCheckBox = (e) => {
    let id = e.target.name;
    console.log(id);
    //find to do with given id
    let index = tasks.findIndex((item) => {
      return item.id === id;
    });

    let newTasks = [...tasks];
    newTasks[index].isCompleted = !newTasks[index].isCompleted;
    setTasks(newTasks);
  };

  return (
    <>
      <Navbar />

      <div className="card container">
        <div className="header">
          <h2>iTask- Manage your Tasks at one place</h2>
        </div>
        <div className="create">
          <input name="todo" value={task} type="text" onChange={handleChange} />
          <button className="savebtn" onClick={handleSave}>
            Save
          </button>
        </div>
        <div className="showfinished">
          {" "}
          <input
            onChange={toggleFinished}
            type="checkbox"
            checked={showFinished}
            name="showfinished"
          />
          Show finished
        </div>

        <hr />
        {tasks.length === 0 ? (
          <div className="no-task"> Yay! No Task </div>
        ) : (
          <div>
            <div>
              <h3>Your Tasks</h3>
            </div>

            <div className="tasks">
              {tasks.map((item) => {
                if (!showFinished && item.isCompleted) return;
                return (
                  <div className="task" key={item.id}>
                    <div className="task-item">
                      <input
                        type="checkbox"
                        name={item.id}
                        checked={item.isCompleted}
                        className="is-complete"
                        onChange={handleCheckBox}
                      />
                      <div
                        className={
                          !item.isCompleted ? "text" : "line-through text"
                        }
                      >
                        <p>{item.task}</p>
                      </div>
                    </div>
                    <div className="buttons">
                      <button
                        className="edit"
                        name={item.id}
                        onClick={(e) => {
                          handleEdit(e, item.id);
                        }}
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="delete"
                        onClick={(e) => {
                          handleDelete(e, item.id);
                        }}
                      >
                        <MdDelete />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
