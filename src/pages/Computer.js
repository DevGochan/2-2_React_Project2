import ShowBookList from "../components/ShowBookList";
import { HeaderBanner } from "../components/banner/banner";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";

const IT = () => {
  const category = '컴퓨터/IT';
  const category2 = 'IT';
  return (
    <div id="main-wrapper">
      <Header />
      <div className="page-wrapper">
        <div className="container-fluid">
          <HeaderBanner category = {category} />
          <ShowBookList category = {category2}/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IT;
