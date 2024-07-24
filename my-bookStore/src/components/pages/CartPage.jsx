import { Link } from "react-router-dom";
import Header from "../sharedFolder/Header";
import Footer from "../sharedFolder/Footer";

export default function CartPage() {
  return (
    <>
      <Header />
      <div>
        <div className=" w-[100%] h-[300px] bg-no-repeat bg-cover bg-center  bg-[url('https://img.freepik.com/premium-photo/side-view-world-book-day-banner-design-collection-stack-books-clean-background_358001-3643.jpg')]">
          <div className="w-[100%] h-[300px] bg-gradient-to-b from-black ">
            <div className="text-white font-bold w-[480px] text-center m-[auto] flex flex-col pt-[140px]">
              <h1 className="text-5xl">SHOPPING CART</h1>
              <p>
                <Link
                  to={"/Home"}
                  className="hover:underline hover:text-blue-700"
                >
                  home
                </Link>{" "}
                <span>/ cart</span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="m-[auto] flex flex-col items-center gap-[20px] mt-[20px] mb-[20px]">
        <div className="text-3xl font-bold">
          <h1>PRODUCTS ADDED</h1>
        </div>
        <div>
          <div className="border border-black w-[200px] h-[50px] text-center content-center rounded-[5px] text-orange-500">
          <h3>your cart is empty</h3>
          </div>
          <div className="text-center mt-[20px]">
            <button className="bg-orange-300 hover:bg-orange-400 rounded-[5px] p-[10px] text-white">Delete All</button>
          </div>
        </div>
        <div className="border border-black w-[800px]  flex flex-col gap-[10px] text-center ">
          <h2 className="text-xl text-gray-400">grand total : <span className="text-orange-500">$0/-</span></h2>
          <div>
            <button className="bg-yellow-400 hover:bg-yellow-500 p-[5px] w-[200px] m-[10px] rounded-[5px] text-white">Continue Shopping</button>
            <Link to={"/CheckoutPage"}><button className="bg-purple-400 hover:bg-purple-500 p-[5px] w-[200px] rounded-[5px] text-white">Proceed To Checkout</button></Link>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 ">
        <Footer />
        </div>
    </>
  );
}
