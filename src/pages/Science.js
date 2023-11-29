import ScienceShowBookList from "../components/HumanitiesShowBookList";
import { ScienceHeaderBanner } from "../components/banner/banner";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";

const Novel = () => {
  return (
    <div id="main-wrapper">
      <Header />
      <div className="page-wrapper">
        <div className="container-fluid">
          <ScienceHeaderBanner />
          <ScienceShowBookList />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Novel;
