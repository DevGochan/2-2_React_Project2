import ITShowBookList from "../components/HumanitiesShowBookList";
import { ITHeaderBanner } from "../components/banner/banner";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";

const Novel = () => {
  return (
    <div id="main-wrapper">
      <Header />
      <div className="page-wrapper">
        <div className="container-fluid">
          <ITHeaderBanner />
          <ITShowBookList />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Novel;
