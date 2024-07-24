import { Link } from "react-router-dom";
import Header from "../sharedFolder/Header";
import Footer from "../sharedFolder/Footer";
import axios from 'axios';
import { useEffect, useState } from "react";

export default function Shop() {
  const [products, setProducts] = useState([])

  async function getProducts(){
    try {
      const response = await axios.get('http://localhost:5000/find-products');

      console.log(response.data);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(products);

  useEffect(() => {
    getProducts();
  },[])

  return (
    <>
      <Header />
      <div>
        <div className=" w-[100%] h-[300px] bg-no-repeat bg-cover bg-center  bg-[url('https://img.freepik.com/premium-photo/side-view-world-book-day-banner-design-collection-stack-books-clean-background_358001-3643.jpg')]">
          <div className="w-[100%] h-[300px] bg-gradient-to-b from-black ">
            <div className="text-white font-bold w-[480px] text-center m-[auto] flex flex-col pt-[140px]">
              <h1 className="text-5xl">OUR SHOP</h1>
              <p>
                <Link
                  to={"/Home"}
                  className="hover:underline hover:text-blue-700"
                >
                  home
                </Link>{" "}
                <span>/ shop</span>{" "}
              </p>
            </div>
          </div>
        </div>

        <div className=" text-center">
          <div>
            <h1 className="font-bold text-3xl m-[20px]">LATEST PRODUCTS</h1>
          </div>
          <div className="w-[80%] m-[auto] grid grid-cols-4 gap-[20px] content-center">
            {/* BOOKS/CONTENTS */}
            <div>
              <div className="border border-black w-[250px] rounded-[5px] shadow-xl">
                <div className="w-[180px] flex flex-col gap-[10px] m-[auto] p-[10px] text-center static">
                  <div className="bg-red-600 absolute text-white rounded-[5px] w-[50px] h-[35px] ml-[-20px] mt-[-5px] content-center">
                    <h1>$50/</h1>
                  </div>
                  <img
                    width="100%"
                    height="100%"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiQv_LrJLNAxtIXUg3LNNeF9Z47IGhW2GErH5cxKUy1zAl92u7SgBt_RcvG1YETcCpUJQ&usqp=CAU"
                    alt=""
                  />

                  <h2 className="font-bold">Choose your adventure</h2>
                  <div>
                    <input
                      className="border border-black rounded-[5px] w-[150px] h-[35px]"
                      type="number"
                    />
                  </div>
                  <div>
                    <button className="bg-purple-700 w-[120px] h-[30px] text-white font-bold rounded-[5px]">
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="border border-black w-[250px] rounded-[5px] shadow-xl">
                <div className="w-[180px] flex flex-col gap-[10px] m-[auto] p-[10px] text-center static">
                  <div className="bg-red-600 absolute text-white rounded-[5px] w-[50px] h-[35px] ml-[-20px] mt-[-5px] content-center">
                    <h1>$20/</h1>
                  </div>
                  <img
                    className=""
                    width="100%"
                    height="100%"
                    src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/abstract-art-book-cover-art-template-design-215e36873c7cdba5e4eb50fb35a1b5e1_screen.jpg?ts=1637028741"
                    alt=""
                  />

                  <h2 className="font-bold">the world is beautiful</h2>
                  <div>
                    <input
                      className="border border-black rounded-[5px] w-[150px] h-[35px]"
                      type="number"
                    />
                  </div>
                  <div>
                    <button className="bg-purple-700 w-[120px] h-[30px] text-white font-bold rounded-[5px]">
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="border border-black w-[250px] rounded-[5px] shadow-xl">
                <div className="w-[180px] flex flex-col gap-[10px] m-[auto] p-[10px] text-center static">
                  <div className="bg-red-600 absolute text-white rounded-[5px] w-[50px] h-[35px] ml-[-20px] mt-[-5px] content-center">
                    <h1>$16/</h1>
                  </div>
                  <img
                    width="100%"
                    height="100%"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx2w6gnpgmPxibAZV3iBmRW83nPacZG1p7Uw9uNLYHZwgKrtpgDn8Mwj8W77Z7dCGkMtQ&usqp=CAU"
                    alt=""
                  />

                  <h2 className="font-bold">love is all we need maybe</h2>
                  <div>
                    <input
                      className="border border-black rounded-[5px] w-[150px] h-[35px]"
                      type="number"
                    />
                  </div>
                  <div>
                    <button className="bg-purple-700 w-[120px] h-[30px] text-white font-bold rounded-[5px]">
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="border border-black w-[250px] rounded-[5px] shadow-xl">
                <div className="w-[180px] flex flex-col gap-[10px] m-[auto] p-[10px] text-center static">
                  <div className="bg-red-600 absolute text-white rounded-[5px] w-[50px] h-[35px] ml-[-20px] mt-[-5px] content-center">
                    <h1>$40/</h1>
                  </div>
                  <img
                    width="100%"
                    height="100%"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUqdH7zuGfcmtSkPwCzAQmvotQiBH5hexVgkYWM7pOuVUoc3PgETOMLyppfX_Zo5a6-T8&usqp=CAU"
                    alt=""
                  />

                  <h2 className="font-bold">the hypocrite world by sophia</h2>
                  <div>
                    <input
                      className="border border-black rounded-[5px] w-[150px] h-[35px]"
                      type="number"
                    />
                  </div>
                  <div>
                    <button className="bg-purple-700 w-[120px] h-[30px] text-white font-bold rounded-[5px]">
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="border border-black w-[250px] rounded-[5px] shadow-xl">
                <div className="w-[180px] flex flex-col gap-[10px] m-[auto] p-[10px] text-center static">
                  <div className="bg-red-600 absolute text-white rounded-[5px] w-[50px] h-[35px] ml-[-20px] mt-[-5px] content-center">
                    <h1>$35/</h1>
                  </div>
                  <img
                    width="100%"
                    height="100%"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9_zOrb_jZsB75AzkNywyPowjyWdYKNiblOS1ebJfupE6zR38FpZ4Qsm0_UCIdSOzEOG0&usqp=CAU"
                    alt=""
                  />

                  <h2 className="font-bold">
                    5 ways to live better by mary ann
                  </h2>
                  <div>
                    <input
                      className="border border-black rounded-[5px] w-[150px] h-[35px]"
                      type="number"
                    />
                  </div>
                  <div>
                    <button className="bg-purple-700 w-[120px] h-[30px] text-white font-bold rounded-[5px]">
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 mt-[20px]">
        <Footer />
      </div>
    </>
  );
}
