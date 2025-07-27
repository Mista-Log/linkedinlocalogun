import Scrollspy from "react-scrollspy";
import RegisterSection from "@/components/RegisterSection";

import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import Seo from "@/components/Seo";

const Register = () => {

  return (
    <div className="min-h-screen bg-background">
      <Seo />
      <ScrollProgressBar />
      <Scrollspy  currentClassName="active" offset={-50}>
        <RegisterSection />
      </Scrollspy>
      <Footer />
    </div>
  );
};

export default Register;
