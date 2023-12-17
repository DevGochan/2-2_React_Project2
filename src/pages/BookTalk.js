import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../components/firebaseinit";
import Header from "../components/header/header";
import { HeaderBanner } from "../components/banner/banner";
import Footer from "../components/footer/footer";
import BookTalkManager from "../components/booktalk/BookTalkManager";

export default function Newsfeed() {
  const category = "북토크";

  const [todos, setTodos] = useState([]);
  async function getTodos() {
    const qry = query(collection(db, "todos")); // todos 컬렉션 데이터 검색
    const unsub = await onSnapshot(qry, (querySnapshot) => {
      const todosArray = [];
      querySnapshot.forEach((element) => {
        todosArray.push({ ...element.data(), id: element.id });
      });
      setTodos(todosArray);
    });
    return () => unsub();
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div id="main-wrapper">
      <Header />
      <div className="page-wrapper">
        <div className="container-fluid">
          <HeaderBanner category={category} />
          <BookTalkManager />
        </div>
      </div>
      <Footer />
    </div>
  );
}
