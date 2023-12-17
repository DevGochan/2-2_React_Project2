import "./bookTalkManager.css";
import Task from "./Talk.js";
import { useState, useEffect, useCallback } from "react";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  Timestamp,
} from "firebase/firestore";
import { db } from "../firebaseinit.js";
import { useAuth } from "../UserContext.js";

function BookTalkManager() {
  const [isFocused, setFocused] = useState(false);
  const { userData } = useAuth();
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
          userName: userData.displayName, // 로그인한 사용자의 구글계정 이름
          photoURL: userData.photoURL, // 로그인한 사용자의 구글계정 이미지
        });
        setChat("");
      } catch (e) {
        alert("로그인이 필요한 서비스입니다.");
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
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            padding: "10px",
            fontSize: "16px",
            border: `1px solid ${isFocused ? "#007bff" : "#ccc"}`,
            borderRadius: "5px",
            boxSizing: "border-box",
            margin: "0 auto",
            maxWidth: "700px",
            transition: "border-color 0.3s",
            boxShadow: isFocused ? "0 0 5px rgba(0, 123, 255, 0.5)" : "none",
            outline: "none"
          }}
        />
        <div className="taskManager__tasks">
          {tasks.map((task) => (
            <Task
              id={task.id}
              key={task.id}
              chat={task.data.chat}
              time={task.data.created}
              userName={task.data.userName}
              userPhoto={task.data.photoURL}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BookTalkManager;
