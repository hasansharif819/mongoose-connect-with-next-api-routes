import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";

const CommonLayout = ({ children }) => {
    return (
      <div className="bg-gray-100 min-h-screen">
        <Navbar />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </div>
    );
  };
  
  export default CommonLayout;