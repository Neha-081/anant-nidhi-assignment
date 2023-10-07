import {
  ArrowCircleRightIcon,
} from "@heroicons/react/solid";
import React from "react";
import Footer from "../../components/Footer";
import DashboardNav from "../../components/Navbar/DashboardNav";

const Login = () => {
  return (
    <div>
      <DashboardNav />
      <div className="min-h-full flex my-5">
        <div className="hidden lg:block relative w-0 basis-2/4 mx-auto md:mx-16 border border-primary rounded-xl">
          <h2 className="text-white bg-primary rounded-full p-3 text-center my-5 mx-10 font-semibold">
            Benefits of Saving Account
          </h2>
          <div className="text-primary flex">
            <ArrowCircleRightIcon className="h-8 w-8 m-5 ml-10" />
            <p className="mt-3 text-left">
              Liquidity. One of the benefits of opening a savings account <br />
              is that it offers you liquidity
            </p>
          </div>
          <div className="text-primary flex">
            <ArrowCircleRightIcon className="h-8 w-8 m-5 ml-10" />
            <p className="mt-3 text-left">
              Liquidity. One of the benefits of opening a savings account <br />
              is that it offers you liquidity
            </p>
          </div>
          <div className="text-primary flex">
            <ArrowCircleRightIcon className="h-8 w-8 m-5 ml-10" />
            <p className="mt-3 text-left">
              Liquidity. One of the benefits of opening a savings account <br />
              is that it offers you liquidity
            </p>
          </div>
          <div className="text-primary flex">
            <ArrowCircleRightIcon className="h-8 w-8 m-5 ml-10" />
            <p className="mt-3 text-left">
              Liquidity. One of the benefits of opening a savings account <br />
              is that it offers you liquidity
            </p>
          </div>
          <div className="text-primary flex">
            <ArrowCircleRightIcon className="h-8 w-8 m-5 ml-10" />
            <p className="mt-3 text-left">
              Liquidity. One of the benefits of opening a savings account <br />
              is that it offers you liquidity
            </p>
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col ml-auto justify-center py-5 p-6 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-primary mx-10 rounded-xl">
          <div className="mx-auto w-full px-16 py-5 m-5 bg-white rounded-xl md:w-full">
            <div>
              <h2 className="mt-6 text-3xl font-semibold text-gray-900">
                Become a member
              </h2>
            </div>

            <div className="mt-8">
              <div className="mt-6">
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label
                      htmlFor="text"
                      className="block text-sm text-left font-medium text-gray-700"
                    >
                      Enter Number
                    </label>
                    <div className="mt-1">
                      <input
                        id="text"
                        name="text"
                        type="text"
                        autoComplete="text"
                        required
                        placeholder="Enter mobile no."
                        className="appearance-none block w-full p-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="text"
                      className="block text-sm text-left font-medium text-gray-700"
                    >
                      Enter Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="text"
                        name="text"
                        type="text"
                        autoComplete="text"
                        required
                        placeholder="Enter password"
                        className="appearance-none block w-full p-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-medium text-primary hover:text-indigo-500"
                      >
                        Forgot your password?
                      </a>
                    </div>
                  </div>
                  <div>
                    <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-xl font-bold text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="mt-2">
              <a
                href="/"
                className="font-bold text-xl text-primary hover:text-indigo-500 font-extrabold"
              >
                Become a Member
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
