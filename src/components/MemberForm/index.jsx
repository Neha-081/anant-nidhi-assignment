import Slider from "../Slider";
import Tabs from "../Tabs";

export default function MemberForm() {
  return (
    <>
      <div className="min-h-full flex my-5">
        <div className="hidden lg:block relative w-0 basis-2/4 mx-auto md:mx-10">
          <Slider />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center py-10 p-6 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-primary m-2 md:mx-10 rounded-xl">
          <div className="mx-auto w-full px-16 py-5 m-5 bg-white rounded-xl md:w-full">
            <div>
              <h2 className="mt-6 text-3xl font-semibold text-gray-900">
                Become a member
              </h2>
            </div>
            <Tabs />

            <div className="mt-8">
              <div className="mt-6">
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label
                      htmlFor="text"
                      className="block text-sm text-left font-medium text-gray-700"
                    >
                      Enter Aadhar no.
                    </label>
                    <div className="mt-1">
                      <input
                        id="text"
                        name="text"
                        type="text"
                        autoComplete="text"
                        required
                        placeholder="Enter Aadhar no."
                        className="appearance-none block w-full p-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-xl font-bold text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                      Get OTP
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
