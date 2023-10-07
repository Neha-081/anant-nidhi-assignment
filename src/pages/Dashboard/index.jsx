import React from "react";
import Footer from "../../components/Footer";
import MemberForm from "../../components/MemberForm";
import DashboardNav from "../../components/Navbar/DashboardNav";

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
