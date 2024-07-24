import { Link } from "react-router-dom";
import Header from "../sharedFolder/Header";
import Footer from "../sharedFolder/Footer";
import "./style.css";

export default function CheckoutPage() {
  return (
    <>
      <Header />
      <div>
        <div className=" w-[100%] h-[300px] bg-no-repeat bg-cover bg-center  bg-[url('https://img.freepik.com/premium-photo/side-view-world-book-day-banner-design-collection-stack-books-clean-background_358001-3643.jpg')]">
          <div className="w-[100%] h-[300px] bg-gradient-to-b from-black ">
            <div className="text-white font-bold w-[480px] text-center m-[auto] flex flex-col pt-[140px]">
              <h1 className="text-5xl">CHECKOUT</h1>
              <p>
                <Link
                  to={"/Home"}
                  className="hover:underline hover:text-blue-700"
                >
                  home
                </Link>{" "}
                <span>/ checkout </span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[5px]">
        <div className="flex gap-[9px] m-[auto] mt-[20px]">
          <div className=" bg-gray-100 w-[160px] border border-black text-center p-[3px] text-sm">
            <h1>
              nightside{" "}
              <span className="text-orange-500 text-sm">($12/-x 2)</span>
            </h1>
          </div>
          <div className=" bg-gray-100 w-[160px] border border-black text-center p-[3px] text-sm">
            <h1>
              red queen{" "}
              <span className="text-orange-500 text-sm">($22/-x 1)</span>
            </h1>
          </div>
          <div className=" bg-gray-100 w-[160px] border border-black text-center p-[3px] text-sm">
            <h1>
              be well bee{" "}
              <span className="text-orange-500 text-sm">($12/-x 3)</span>
            </h1>
          </div>
        </div>

        <div className="m-[auto]">
          <div>
            <h1>
              grand total : <span className="text-orange-500">$82/-</span>
            </h1>
          </div>
        </div>

        <div className=" ">
          <div className="text-center m-[20px] text-2xl font-bold">
            <h1>PLACE YOUR ORDER</h1>
          </div>
          <div className="">
            <form className="grid grid-cols-2 gap-[10px] w-[60%] bg-gray-400 m-[auto] p-[10px] rounded-[5px]">
              <div className="flex flex-col">
                <label htmlFor="name">your name:</label>
                <input
                  type="text"
                  placeholder="enter your name"
                  className="border border-black w-[350px] text-xs p-[7px] rounded-[3px]"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="number">your number:</label>
                <input
                  type="text"
                  placeholder="enter your number"
                  className="border border-black w-[350px] text-xs p-[7px] rounded-[3px]"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email">your email:</label>
                <input
                  type="text"
                  placeholder="enter your email"
                  className="border border-black w-[350px] text-xs p-[7px] rounded-[3px]"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="name">payment method:</label>
                <select
                  name=""
                  id=""
                  className="border border-black w-[350px] text-xs p-[7px] rounded-[3px]"
                >
                  <option value="">cash on delivery</option>
                  <option value="">paypal</option>
                  <option value="">bank transfer</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="name">address line 01:</label>
                <input
                  type="text"
                  placeholder="e.g. flat no."
                  className="border border-black w-[350px] text-xs p-[7px] rounded-[3px]"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="name">address line 02:</label>
                <input
                  type="text"
                  placeholder="e.g. street name"
                  className="border border-black w-[350px] text-xs p-[7px] rounded-[3px]"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="name">city:</label>
                <input
                  type="text"
                  placeholder="e.g. surulere"
                  className="border border-black w-[350px] text-xs p-[7px] rounded-[3px]"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="name">state:</label>
                <input
                  type="text"
                  placeholder="e.g. lagos"
                  className="border border-black w-[350px] text-xs p-[7px] rounded-[3px]"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="name">country:</label>
                <input
                  type="text"
                  placeholder="nigeria"
                  className="border border-black w-[350px] text-xs p-[7px] rounded-[3px]"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="name">postal code:</label>
                <input
                  type="text"
                  placeholder="e.g. 100101"
                  className="border border-black w-[350px] text-xs p-[7px] rounded-[3px]"
                  required
                />
              </div>
              <div>
                <button className="bg-purple-600 p-[4px] rounded-[3px] text-white text-sm">
                  Order now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 mt-[20px]">
        <Footer />
      </div>
    </>
  );
}
