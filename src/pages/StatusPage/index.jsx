import React from "react";
import Footer from "../../components/Footer";
import StatusNav from "../../components/Navbar/StatusNav";
import ProgessBar from "../../components/ProgressBar";

const StatusPage = () => {
  return (
    <div>
      <StatusNav />
      <div className="min-h-full flex my-5">
        <div className="hidden lg:block relative w-0 basis-2/4 mx-auto md:mx-16 border border-primary rounded-2xl">
          <h2 className="text-primary rounded-full p-3 text-3xl text-left my-5 mx-2 md:mx-10 font-semibold">
            Personal Details
          </h2>
          <form className="space-y-8 mx-4 my-2 p-3 md:px-10 rounded-lg text-left">
            <div className="space-y-8 md:flex">
              <div className="pt-8 md:basis-3/4">
                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-primary"
                    >
                      First name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        placeholder="Enter First Name"
                        autoComplete="given-name"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-primary"
                    >
                      Surname
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        placeholder="Enter Last Name"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label
                      htmlFor="text"
                      className="block text-sm font-medium text-primary"
                    >
                      Aadhar number.
                    </label>
                    <div className="mt-1">
                      <input
                        placeholder="Enter Aadhar number"
                        type="text"
                        autoComplete="text"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-primary"
                    >
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        placeholder="Enter Email Address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="text"
                      className="block text-sm font-medium text-primary"
                    >
                      Mobile Number
                    </label>
                    <div className="mt-1">
                      <input
                        placeholder="Enter Mobile Address"
                        type="text"
                        autoComplete="text"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:basis-2/4 md:px-5">
                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-6">
                    <div className="mt-1 flex items-center">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl2ZGIvjqTdFw0SFm4NnQ-jbWWwIZJY0_Q7NtKXavYxVtV-0W_6uZ-nHHqMeliX2efc-U&usqp=CAU"
                        alt="bg-image"
                        className="h-[180px] w-auto rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="md:w-1/2 flex flex-col justify-center text-primary p-6 sm:px-6 lg:flex-none lg:px-20 xl:px-24 mx-2 md:mx-10 rounded-xl">
          <h1 className="text-left font-bold my-2 text-2xl">
            Application Status
          </h1>
          <ProgessBar />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StatusPage;
