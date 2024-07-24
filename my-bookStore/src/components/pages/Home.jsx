import { Link } from "react-router-dom";
import Header from "../sharedFolder/Header";
import Footer from "../sharedFolder/Footer";
import Product from "./product";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [products, setProducts] = useState([]);

  const fetch_products = async () => {
    try {
      const response = await axios.get("http://localhost:5000/find-products");

      console.log(response.data);

      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch_products();
  }, []);

  return (
    <>
      <Header />
      {/* BACKGROUND IMAGE */}
      <div className="w-full h-[400px] bg-no-repeat bg-cover bg-center bg-[url('https://media.istockphoto.com/id/1372988836/photo/abstract-wave-background-with-many-glowing-particles-musical-wave-digital-network-background.webp?b=1&s=170667a&w=0&k=20&c=JdCBVqKgudKrldRCkABgCxls1gFPEjN2atQ_CJy_bhU=')]">
        <div className="w-full h-full bg-gradient-to-b from-black">
          <div className="text-white font-bold max-w-xl mx-auto flex flex-col pt-36 px-4">
            <h1 className="text-4xl md:text-5xl text-center">
              HAND PICKED BOOKS <br /> TO YOUR DOOR.
            </h1>
            <p className="mt-4 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, id
              odio aspernatur similique ipsa itaque.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION1 */}
      <div className="w-11/12 max-w-6xl mx-auto mt-8">
        <div className="text-center mb-8">
          <h1 className="font-bold text-2xl md:text-3xl">LATEST PRODUCTS</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  gap-[20px]">
          {products.map((value, index) => {
            return <Product data={value} key={index} />;
          })}
        </div>
        <div className="text-center mt-8">
          <button className="bg-orange-500 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded">
            View more
          </button>
        </div>
      </div>

      {/* ABOUT US SECTION */}
      <div className="flex flex-col lg:flex-row items-center justify-center w-11/12 max-w-4xl mx-auto mt-12">
        <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
          <img
            className="w-full h-auto rounded"
            src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_290,h_226/https://www.mtdtraining.com/wp-content/uploads/2017/05/bigstock-157715366.jpg"
            alt="About Us"
          />
        </div>
        <div className="w-full lg:w-1/2 lg:pl-8 bg-gray-200 rounded p-4">
          <h1 className="font-bold text-xl">ABOUT US</h1>
          <p className="mt-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
            cumque explicabo veniam fuga pariatur saepe! Enim vitae qui
            accusamus nesciunt?
          </p>
          <div className="mt-4">
            <Link to="/About">
              <button className="bg-purple-800 text-white py-2 px-4 rounded">
                Read more
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* QUESTION SECTION */}
      <div className="bg-black text-white py-12 flex justify-center items-center mt-12">
        <div className="text-center max-w-lg">
          <h1 className="text-2xl font-bold">HAVE ANY QUESTIONS?</h1>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            facilis sint dicta eius fugiat similique?
          </p>
          <div className="mt-4">
           <Link to="/Contact">
             <button className="bg-purple-800 text-white py-2 px-4 rounded">
               Contact Us
             </button>
           </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
