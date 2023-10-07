  import React from "react";
import DetailsForm from "../../components/DetailsForm";
  import Footer from "../../components/Footer";
  import DashboardNav from "../../components/Navbar/DashboardNav";
  
  const PersonalDetails = () => {
    return (
      <div>
        <DashboardNav />
          <DetailsForm/>
        <Footer />
      </div>
    );
  };
  
  export default PersonalDetails;
  