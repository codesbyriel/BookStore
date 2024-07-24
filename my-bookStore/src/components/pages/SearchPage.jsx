import { Link } from "react-router-dom"
import Header from "../sharedFolder/Header"
import Footer from "../sharedFolder/Footer"

export default function SearchPage(){

    return(
        <>
        <Header/>
        <div>
        <div className=" w-[100%] h-[300px] bg-no-repeat bg-cover bg-center  bg-[url('https://img.freepik.com/premium-photo/side-view-world-book-day-banner-design-collection-stack-books-clean-background_358001-3643.jpg')]">
          <div className="w-[100%] h-[300px] bg-gradient-to-b from-black ">
            <div className="text-white font-bold w-[480px] text-center m-[auto] flex flex-col pt-[140px]">
              <h1 className="text-5xl">SEARCH PAGE</h1>
              <p>
                <Link
                  to={"/Home"}
                  className="hover:underline hover:text-blue-700"
                >
                  home
                </Link>{" "}
                <span>/ search</span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

       <div className="">
         <div className="flex gap-[15px] justify-center mt-[30px]">
             <form>
                 <input type="text" placeholder="search products..."  className="p-[10px] bg-gray-200 rounded-[5px] border border-black w-[700px]"/>
             </form>
             <div>
                 <button className="bg-purple-500 p-[10px] rounded-[5px] w-[100px] hover:bg-purple-600 text-white">Search</button>
             </div>
         </div>

         <div className="flex justify-center m-[30px]">
            <button className="text-orange-500 p-[10px] w-[200px] border border-black rounded-[5px] hover:bg-gray-200">search something!</button>
         </div>
       </div>

       <div className="bg-gray-100 ">
        <Footer />
        </div>
 
        </>
    )
}