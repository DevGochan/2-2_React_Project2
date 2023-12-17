import "./taskManager.css";
import Task from "./Task";
import { useState, useEffect, useCallback } from "react";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  Timestamp,
} from "firebase/firestore";
import { db } from "../firebaseinit";

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [chat, setChat] = useState("");

  const onChange = useCallback((e) => {
    setChat(e.target.value);
  }, []);

  const handleSubmit = async (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      // 공백 처리 부분
      if (chat.trim() === "") {
        return;
      }

      try {
        await addDoc(collection(db, "chat"), {
          chat: chat,
          created: Timestamp.now(),
          
        });
        setChat("");
      } catch (err) {
        alert(err);
      }
    }
  };

  // firebase에서 실시간으로 데이터를 가져옴
  useEffect(() => {
    const chatColRef = query(
      collection(db, "chat"),
      orderBy("created", "desc")
    );
    onSnapshot(chatColRef, (snapshot) => {
      setTasks(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="taskManager">
      <div
        className="taskManager__container"
        style={{ paddingBottom: "100px" }}
      >
        <input
          type="text"
          name="chat"
          placeholder="채팅을 입력하세요"
          value={chat}
          onChange={onChange}
          onKeyDown={handleSubmit}
        />
        <div className="taskManager__tasks">
          {tasks.map((task) => (
            <Task
              id={task.id}
              key={task.id}
              title={task.data.title}
              description={task.data.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TaskManager;
