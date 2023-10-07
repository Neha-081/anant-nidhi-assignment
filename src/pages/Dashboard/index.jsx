import React from "react";
import Footer from "../../components/Footer";
import MemberForm from "../../components/MemberForm";
import DashboardNav from "../../components/Navbar/DashboardNav";


// Define the Dashboard component as a functional component
const Dashboard = () => {
  return (
    <div>
      <DashboardNav />
        <MemberForm />
      <Footer />
    </div>
  );
};

export default Dashboard;
