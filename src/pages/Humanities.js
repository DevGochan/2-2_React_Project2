import HumanitiesShowBookList from "../components/HumanitiesShowBookList";
import { HumanitiesHeaderBanner } from "../components/banner/banner";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";

const Novel = () => {
  return (
    <div id="main-wrapper">
      <Header />
      <div className="page-wrapper">
        <div className="container-fluid">
          <HumanitiesHeaderBanner />
          <HumanitiesShowBookList />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Novel;
