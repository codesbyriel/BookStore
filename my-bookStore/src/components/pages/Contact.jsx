import { Link } from "react-router-dom";
import Header from "../sharedFolder/Header";
import Footer from "../sharedFolder/Footer";

export default function Contact() {
  return (
    <>
      <Header />
      <div>
        <div className=" w-[100%] h-[300px] bg-no-repeat bg-cover bg-center  bg-[url('https://img.freepik.com/premium-photo/side-view-world-book-day-banner-design-collection-stack-books-clean-background_358001-3643.jpg')]">
          <div className="w-[100%] h-[300px] bg-gradient-to-b from-black ">
            <div className="text-white font-bold w-[480px] text-center m-[auto] flex flex-col pt-[140px]">
              <h1 className="text-5xl">CONTACT US</h1>
              <p>
                <Link
                  to={"/Home"}
                  className="hover:underline hover:text-blue-700"
                >
                  home
                </Link>{" "}
                <span>/ contact</span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 w-[400px] m-[auto] mt-[50px] mb-[50px] border border-black rounded-[5px] shadow-xl">
        <form className="flex flex-col gap-4 items-center">
          <h1 className="text-xl font-bold mt-[20px]">SAY SOMETHING!</h1>
          <div>
            <input
              type="text"
              placeholder="enter your name"
              className="w-[350px] border border-black h-[40px] p-[10px] rounded-[5px]"
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="enter your email"
              className="w-[350px] border border-black h-[40px] p-[10px] rounded-[5px]"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="enter your number"
              className="w-[350px] border border-black h-[40px] p-[10px] rounded-[5px]"
            />
          </div>
          <div>
            <textarea
              name=""
              id=""
              placeholder="enter your message"
              className="w-[350px] border border-black h-[150px] p-[10px] rounded-[5px]"
            ></textarea>
          </div>
        <div>
            <button className=" bg-purple-600 hover:bg-purple-700 rounded-[5px] p-[10px] mb-[30px] text-white">Send a message</button>
        </div>
        </form>
      </div>

      <div className="bg-gray-100 ">
        <Footer />
        </div>
    </>
  );
}
