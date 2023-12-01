import ITShowBookList from "../components/HumanitiesShowBookList";
import { HeaderBanner } from "../components/banner/banner";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";

const IT = () => {
  const category = '컴퓨터/IT';
  return (
    <div id="main-wrapper">
      <Header />
      <div className="page-wrapper">
        <div className="container-fluid">
          <HeaderBanner category = {category} />
          <ITShowBookList />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IT;
