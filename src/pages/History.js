import HistoryShowBookList from "../components/HistoryShowBookList";
import { HeaderBanner } from "../components/banner/banner";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";

const History = () => {
  const category = '역사';
  return (
    <div id="main-wrapper">
      <Header />
      <div className="page-wrapper">
        <div className="container-fluid">
          <HeaderBanner category = {category}/>
          <HistoryShowBookList />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default History;
