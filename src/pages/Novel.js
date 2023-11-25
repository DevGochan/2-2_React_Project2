import ShowBookList from "../components/ShowBookList";
import Sidebar from "../components/Sidebar";
import HeaderBanner, { NovelHeaderBanner } from "../components/banner/banner";
import CallToAction from "../components/call-to-action/CallToAction";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Breadcrumbs from "../views/components/sections/breadcrumbs";
import Buttons from "../views/components/sections/buttons";
import Cards from "../views/components/sections/cards";
import Dropdowns from "../views/components/sections/dropdowns";
import PageForm from "../views/components/sections/form";
import Images from "../views/components/sections/images";
import JsComponents from "../views/components/sections/js-components";
import Labels from "../views/components/sections/labels";
import Notification from "../views/components/sections/notification";
import PagePagination from "../views/components/sections/pagination";
import PageTable from "../views/components/sections/table";
import TooltipPopover from "../views/components/sections/tooltip-popover";
import Typography from "../views/components/sections/typography";

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
