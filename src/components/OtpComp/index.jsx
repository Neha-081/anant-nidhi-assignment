  // Define a functional component called OTP
export default function OtpComp() {
  return (
    <div class="absolute top-[200px] md:w-[50%] md:left-[25%] left-16 flex rounded-2xl flex-col justify-center overflow-hidden bg-gray-50">
      <div class="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full rounded-2xl">
        <div class="mx-auto flex w-full max-w-md flex-col space-y-16">
          <div class="flex flex-col items-center justify-center text-center space-y-2">
            <div class="font-semibold text-3xl">
              <p>Enter OTP</p>
            </div>
          </div>

          <div>
            <form action="" method="post">
              <div class="flex flex-col space-y-16">
                <div class="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                  <div class="w-16 h-16 ">
                    <input
                      class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                      type="text"
                      name=""
                      id=""
                      placeholder="-"
                    />
                  </div>
                  <div class="w-16 h-16 ">
                    <input
                      class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                      type="text"
                      name=""
                      id=""
                      placeholder="-"
                    />
                  </div>
                  <div class="w-16 h-16 ">
                    <input
                      class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                      type="text"
                      name=""
                      id=""
                      placeholder="-"
                    />
                  </div>
                  <div class="w-16 h-16 ">
                    <input
                      class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                      type="text"
                      name=""
                      id=""
                      placeholder="-"
                    />
                  </div>
                </div>

                <div class="flex flex-col space-y-5">
                  <div>
                    <button class="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm">
                      Verify
                    </button>
                  </div>

                  <div class="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                    <p>Didn't recieve code?</p>{" "}
                    <a
                      href="/#"
                      class="flex flex-row items-center text-blue-600"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Resend
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
