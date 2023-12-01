import HumanitiesShowBookList from "../components/HumanitiesShowBookList";
import { HeaderBanner } from "../components/banner/banner";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";

const Humanities = () => {
  const category = '인문';
  return (
    <div id="main-wrapper">
      <Header />
      <div className="page-wrapper">
        <div className="container-fluid">
          <HeaderBanner category = {category}/>
          <HumanitiesShowBookList />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Humanities;
