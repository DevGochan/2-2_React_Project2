import "./talk.css";
import { useState } from "react";
// import TaskItem from "./TaskItem";
// import EditTask from "./EditTask";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebaseinit";

function Task({ id, chat, time, userName, userPhoto }) {
  const [checked, setChecked] = useState(userName);
  const [open, setOpen] = useState({ edit: false, view: false });

  // 1970년 1월 1일 기준으로 흐른 시간초를 읽기 쉽게 변환
  const timestamp = time.seconds;
  const date = new Date(timestamp * 1000);
  const formattedDate = date.toLocaleString();

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
      <span>
        <img
          src={userPhoto}
          style={{ maxWidth: "40px", borderRadius: "10px" }}
        />{" "}
      </span>
      <div className="task__body">
        <span style={{ fontSize: "20px" }}>
          <i>
            <b>{userName}</b>
          </i>{" "}
          : {chat}{" "}
        </span>
        <span style={{ fontSize: "15px" }}>{formattedDate}</span>
      </div>


    </div>
  );
}

export default Task;
