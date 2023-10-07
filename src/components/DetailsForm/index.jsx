export default function DetailsForm() {
  return (
    <form className="space-y-8 mx-4 my-2 lg:mx-20 p-3 md:px-20 rounded-lg text-left">
      <div className="space-y-8 md:flex">
        <div className="pt-8 md:basis-3/4">
          <div>
            <h3 className="text-lg leading-6 font-medium text-primary">
              Personal Information
            </h3>
            <p className="mt-1 text-sm text-primary">
              Use a permanent address where you can receive mail.
            </p>
          </div>
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
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-primary"
              >
                Address
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  placeholder="Enter Address"
                  name="first-name"
                  id="first-name"
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
                Pincode
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  placeholder="Enter Pincode"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-primary"
              >
                Country
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  placeholder="Enter Country"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-primary"
              >
                State
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  placeholder="Enter State"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-primary"
              >
                District
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  placeholder="Enter District"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-primary"
              >
                Gender
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  placeholder="Enter Gender"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-primary"
              >
                Date of birth
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  placeholder="Enter DOB"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium text-primary"
              >
                Street address
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  placeholder="Enter Street address"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-primary"
              >
                City
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  placeholder="Enter City"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="region"
                className="block text-sm font-medium text-primary"
              >
                State / Province
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  placeholder="Enter State"
                  name="region"
                  id="region"
                  autoComplete="address-level1"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="postal-code"
                className="block text-sm font-medium text-primary"
              >
                ZIP / Postal code
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  placeholder="Enter ZIP"
                  name="postal-code"
                  id="postal-code"
                  autoComplete="postal-code"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="md:basis-1/4 md:ml-12 md:px-5">
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-6">
              <div className="mt-1 flex items-center">
                <span className="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                  <svg
                    className="h-full w-full text-primary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>
                <button
                  type="button"
                  className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-primary hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Change
                </button>
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium text-primary"
              >
                Cover photo
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-primary"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-primary">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-primary">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="pt-8">
          <div>
            <h3 className="text-lg leading-6 font-medium text-primary">
              Nominee Details
            </h3>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-primary"
              >
                Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  placeholder="Enter Name"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-primary"
              >
                Middle
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  placeholder="Enter middle name"
                  name="middle-name"
                  id="middle-name"
                  autoComplete="family-name"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-primary"
              >
                Surname
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  placeholder="Enter last name"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="text"
                className="block text-sm font-medium text-primary"
              >
                Nominee Realtion
              </label>
              <div className="mt-1">
                <input
                  placeholder="Enter Relation"
                  type="text"
                  autoComplete="text"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="text"
                className="block text-sm font-medium text-primary"
              >
                PAN Card no.
              </label>
              <div className="mt-1">
                <input
                  placeholder="Enter Pan card no"
                  type="text"
                  autoComplete="text"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-center">
          <button className="ml-3 inline-flex justify-center py-2 px-12 border border-transparent shadow-sm text-sm font-semibold rounded-full text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
