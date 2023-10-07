import React from "react";
import DetailsForm from "../../components/DetailsForm";
import Footer from "../../components/Footer";
import DashboardNav from "../../components/Navbar/DashboardNav";

const OTP = () => {
  return (
    <div>
      <DashboardNav />
      <div className="blur-[1px]">
        <DetailsForm />
        </div>
      <Footer />
    </div>
  );
};

export default OTP;
