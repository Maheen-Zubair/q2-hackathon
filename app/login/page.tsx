import Section8 from "../section8/page";
export default function Login() {
    return (
      <div className="flex flex-col mt-5 items-center justify-center min-h-screen ">
         <div className="lg:h-[286px] h-[120px] md:h-[220px] w-full bg-[#F6F5FF] flex flex-col items-start justify-center">
            <div className=" flex flex-col items-start justify-center lg:pl-28 pl-10 md:pl-16">
                <h1 className="lg:text-[36px] text-[20px] md:text-[28px] font-bold text-[#101750]">Login</h1>
                <p className="text-black lg:text-[16px] text-[12px] md:text-[14px] ">Home . Pages <span className="text-[#FB2E86]">. Login</span></p>
            </div>

        </div>
        <div className="w-full mt-10 sm:mt-36 max-w-md bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-3">Login</h2>
          <p className="text-center text-[#9096B2] mb-6">
            Please login using account details below.
          </p>
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-[#9096B2] text-sm font-medium mb-2"
              >
            
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-[2px] focus:outline-none focus:ring-2 focus:ring-pink-400"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-[#9096B2] text-sm font-medium mb-2"
              >
                
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-[2px] focus:outline-none focus:ring-2 focus:ring-pink-400"
                placeholder="Enter your password"
              />
            </div>
            <div className="text-left mb-4">
              <a href="#" className="text-[#9096B2] text-sm hover:underline">
                Forgot your password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-[#FB2E86] text-white font-semibold py-2 px-4 rounded-[2px] hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              Sign In
            </button>
          </form>
          <p className="text-center text-[#9096B2] mt-6">
            Don’t have an account?{" "}
            <a href="#" className=" text-[#9096B2] font-medium hover:underline">
              Create account
            </a>
          </p>
        </div>
        <Section8/>
      </div>
    );
  }