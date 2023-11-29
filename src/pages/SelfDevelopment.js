import SelfDevelopmentShowBookList from "../components/ShowBookList";
import { SelfDevelopmentHeaderBanner } from "../components/banner/banner";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";

const Novel = () => {
  return (
    <div id="main-wrapper">
      <Header />
      <div className="page-wrapper">
        <div className="container-fluid">
          <SelfDevelopmentHeaderBanner />
          <SelfDevelopmentShowBookList />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Novel;
