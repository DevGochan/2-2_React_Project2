import "./task.css";
import { useState } from "react";
import TaskItem from "./TaskItem";
import EditTask from "./EditTask";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebaseinit";

function Task({ id, chat, time, userName, userPhoto }) {
  const [checked, setChecked] = useState(userName);
  const [open, setOpen] = useState({ edit: false, view: false });

  // 채팅 메세지에 마우스 hover시 효과를 주기 위한 state변수
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`task`}
      style={{
        boxShadow:
          "0px 0.8px 2px rgba(0,0,0,.032), 0px 2.7px 6.7px rgba(0,0,0,.048), 0px 12px 30px rgba(0,0,0,.08)",
        borderRadius: "10px",
        transition: "transform 0.5s ease-in-out",
        transform: isHovered ? "scale(1.03)" : "scale(1)",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        <input
          id={`checkbox-${id}`}
          className="checkbox-custom"
          name="checkbox"
          checked={checked}
          type="checkbox"
        />
      </div>
      <div className="task__body">
        <h2>{chat}</h2>
        <p>{userName}</p>
      </div>

      {open.view && (
        <TaskItem title={chat} description={userName} open={open.view} />
      )}

      {open.edit && (
        <EditTask
          toEditTitle={chat}
          toEditDescription={userName}
          open={open.edit}
          id={id}
        />
      )}
    </div>
  );
}

export default Task;
