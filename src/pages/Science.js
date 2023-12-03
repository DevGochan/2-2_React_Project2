import ShowBookList from "../components/ShowBookList";
import { HeaderBanner } from "../components/banner/banner";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";

const Science = () => {
  const category = '과학';
  const category2 = 'science';
  return (
    <div id="main-wrapper">
      <Header />
      <div className="page-wrapper">
        <div className="container-fluid">
          <HeaderBanner category = {category}/>
          <ShowBookList category = {category2}/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Science;
