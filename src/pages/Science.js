import ScienceShowBookList from "../components/HumanitiesShowBookList";
import { HeaderBanner } from "../components/banner/banner";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";

const Science = () => {
  const category = '과학';
  return (
    <div id="main-wrapper">
      <Header />
      <div className="page-wrapper">
        <div className="container-fluid">
          <HeaderBanner category = {category}/>
          <ScienceShowBookList />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Science;
