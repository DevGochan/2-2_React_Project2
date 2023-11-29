import ShowBookList from "../components/ShowBookList";
import { NovelHeaderBanner } from "../components/banner/banner";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";


const Novel = () => {
  return (
    <div id="main-wrapper">
      <Header />
      <div className="page-wrapper">
        <div className="container-fluid">
        <NovelHeaderBanner />
          <ShowBookList />

          {/* <HeaderBanner />
          <Cards />
          <TooltipPopover />
          <PagePagination />
          <Images />
          <Breadcrumbs />
          <Dropdowns />
          <PageForm />
          <PageTable />
          <Notification />
         
          <Typography />
          <JsComponents />
          <CallToAction />  */}
        </div>
      </div>
      <Footer />
    </div>
    
  );
};

export default Novel;
