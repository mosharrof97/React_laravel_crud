import { Outlet } from "react-router-dom";
import Header from "./pages/Header";
import Footer from "./pages/footer";

const Index = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Index;
