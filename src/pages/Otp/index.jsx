import React from "react";
import DetailsForm from "../../components/DetailsForm";
import Footer from "../../components/Footer";
import DashboardNav from "../../components/Navbar/DashboardNav";
import OtpComp from "../../components/OtpComp";

const OTP = () => {
  return (
    <div>
      <DashboardNav />
      <div className="blur-[5px] bg-gray-500">
        <DetailsForm />
        </div>
        <OtpComp />
      <Footer />
    </div>
  );
};

export default OTP;
