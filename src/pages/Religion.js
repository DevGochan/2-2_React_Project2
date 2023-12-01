import SelfDevelopmentShowBookList from "../components/ShowBookList";
import { HeaderBanner } from "../components/banner/banner";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";

const Religion = () => {
  const category = '종교'
  return (
    <div id="main-wrapper">
      <Header />
      <div className="page-wrapper">
        <div className="container-fluid">
          <HeaderBanner category = {category}/>
          <SelfDevelopmentShowBookList />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Religion;
