import { Link } from "react-router-dom";
import Header from "../sharedFolder/Header";
import { MdStarRate } from "react-icons/md";
import { IoStarHalfSharp } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Footer from "../sharedFolder/Footer";
import "./style.css";

const About = () => {
  const authors_arr = [
    {
      img: "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1720310400&semt=ais_user",
      name: "John Doe",
    },
    {
      img: "https://headshots-inc.com/wp-content/uploads/2023/03/LinkedIn-Headshot-Examples-1.jpg",
      name: "John Doe",
    },
    {
      img: "https://kpstudios.com/wp-content/uploads/2022/02/corporate-headshots_kp-studios_22-1024x1024.jpg",
      name: "John Doe",
    },
    {
      img: "https://images.squarespace-cdn.com/content/v1/5aee389b3c3a531e6245ae76/1704335161345-2EXFJ1VEYPZGHM3LLF1Y/HeadshotsMatter_CrystalMercredi_Calgary_LinkedInPortraits_01.jpg",
      name: "John Doe",
    },
    {
      img: "https://images.squarespace-cdn.com/content/v1/5aee389b3c3a531e6245ae76/1628444769450-0AAE0PZIJ0K03LXI66JB/Franklin_Knox_Headshots+%283%29.jpg",
      name: "John Doe",
    },
    {
      img: "https://cdn.openart.ai/stable_diffusion/20bf8d8b80ef5b05d76f4ce396d4b664467fddac_2000x2000.webp",
      name: "John Doe",
    },
  ];

  const reviews = [
    {
      img: "https://marketplace.canva.com/EAFqNrAJpQs/1/0/1600w/canva-neutral-pink-modern-circle-shape-linkedin-profile-picture-WAhofEY5L1U.jpg",
      comments:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo tempore nulla, maxime provident veniam exercitationem. Laborum quibusdam repellendus eius necessitatibus?",
      name: "Jane Doe",
    },
    {
      img: "https://marketplace.canva.com/EAFqNrAJpQs/1/0/1600w/canva-neutral-pink-modern-circle-shape-linkedin-profile-picture-WAhofEY5L1U.jpg",
      comments:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo tempore nulla, maxime provident veniam exercitationem. Laborum quibusdam repellendus eius necessitatibus?",
      name: "Jane Doe",
    },
    {
      img: "https://marketplace.canva.com/EAFqNrAJpQs/1/0/1600w/canva-neutral-pink-modern-circle-shape-linkedin-profile-picture-WAhofEY5L1U.jpg",
      comments:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo tempore nulla, maxime provident veniam exercitationem. Laborum quibusdam repellendus eius necessitatibus?",
      name: "Jane Doe",
    },
    {
      img: "https://marketplace.canva.com/EAFqNrAJpQs/1/0/1600w/canva-neutral-pink-modern-circle-shape-linkedin-profile-picture-WAhofEY5L1U.jpg",
      comments:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo tempore nulla, maxime provident veniam exercitationem. Laborum quibusdam repellendus eius necessitatibus?",
      name: "Jane Doe",
    },
    {
      img: "https://marketplace.canva.com/EAFqNrAJpQs/1/0/1600w/canva-neutral-pink-modern-circle-shape-linkedin-profile-picture-WAhofEY5L1U.jpg",
      comments:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo tempore nulla, maxime provident veniam exercitationem. Laborum quibusdam repellendus eius necessitatibus?",
      name: "Jane Doe",
    },
    {
      img: "https://marketplace.canva.com/EAFqNrAJpQs/1/0/1600w/canva-neutral-pink-modern-circle-shape-linkedin-profile-picture-WAhofEY5L1U.jpg",
      comments:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo tempore nulla, maxime provident veniam exercitationem. Laborum quibusdam repellendus eius necessitatibus?",
      name: "Jane Doe",
    },
  ];

  return (
    <>
      <Header />
      <div>
        <div className=" w-[100%] h-[300px] bg-no-repeat bg-cover bg-center  bg-[url('https://img.freepik.com/premium-photo/side-view-world-book-day-banner-design-collection-stack-books-clean-background_358001-3643.jpg')]">
          <div className="w-[100%] h-[300px] bg-gradient-to-b from-black ">
            <div className="text-white font-bold w-[480px] text-center m-[auto] flex flex-col pt-[140px]">
              <h1 className="text-5xl">ABOUT US</h1>
              <p>
                <Link
                  to={"/Home"}
                  className="hover:underline hover:text-blue-700"
                >
                  home
                </Link>{" "}
                <span>/ about</span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION */}
      <div className="w-[80%] m-[auto] mt-[30px]">
        <div className="flex w-[80%] m-[auto]">
          <div className="w-[450px] h-[450px]">
            <img
              width="100%"
              height="100%"
              src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_290,h_226/https://www.mtdtraining.com/wp-content/uploads/2017/05/bigstock-157715366.jpg"
              alt=""
            />
          </div>
          <div className="bg-gray-100 w-[450px] h-[317px] p-[20px] flex flex-col gap-[10px]">
            <h1 className="text-2xl font-bold">WHY CHOOSE US?</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
              veniam ab quam possimus totam, neque quae eveniet vitae molestiae
              voluptatum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae officia esse amet at quia vitae aperiam, doloremque
              nostrum deserunt officiis.
            </p>

            <div>
              <button className="bg-purple-800 text-white w-[130px] h-[35px] rounded-[5px] hover:bg-black">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CLIENT REVIEWS */}
      <div className="bg-gray-200 ">
        <div className="w-[80%] m-[auto] ">
          <div className="text-center font-bold text-4xl mt-[-100px]  p-[20px]">
            <h1>CLIENT'S REVIEWS</h1>
          </div>
          <div className="grid grid-cols-3 gap-[50px] pb-[50px]">
            {reviews.map((review, index) => {
              return (
                <div
                  key={index}
                  className="w-[350px] flex flex-col gap-[5px] items-center text-center bg-gray-100 p-[10px] border border-black rounded-[5px] shadow-2xl"
                >
                  <div className="w-[60px] rounded-[50%] overflow-hidden ">
                    <img width="100%" height="100%" src={review.img} alt="" />
                  </div>
                  <div>
                    <p>{review.comments}</p>
                    <div className="flex bg-gray-200 w-[100px] h-[25px] justify-center m-[auto] mt-[10px] mb-[10px] items-center border border-black rounded-[5px]">
                      <MdStarRate className="text-yellow-500" />
                      <MdStarRate className="text-yellow-500" />
                      <MdStarRate className="text-yellow-500" />
                      <MdStarRate className="text-yellow-500" />
                      <IoStarHalfSharp className="text-yellow-500" />
                    </div>

                    <h1 className="font-bold text-lg">{review.name}</h1>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* AUTHORS */}
      <div className="mb-[30px]">
        <div className=" text-center font-bold text-4xl m-[20px]">
          <h1>GREAT AUTHORS</h1>
        </div>

        <div className="grid grid-cols-3 gap-[20px] w-[80%] m-auto ">
          {authors_arr.map((author, index) => {
            return (
              <div
                key={index}
                className="w-[300px] h-[340px] flex flex-col items-center border border-black rounded-[5px] overflow-hidden relative author"
              >
                <img width="100%" height="100%" src={author.img} alt="" />
                <div className="m-[auto]">
                  <h1 className="font-bold text-lg">{author.name}</h1>
                </div>

                <div className="absolute left-[-40px] showAllSocials">
                  <div className="bg-white h-[25px] w-[25px] m-[10px] flex justify-center items-center rounded-sm hover:bg-black hover:text-white">
                    <a href="">
                      <FaFacebookF />
                    </a>
                  </div>
                  <div className="bg-white h-[25px] w-[25px] m-[10px] flex justify-center items-center rounded-sm hover:bg-black hover:text-white">
                    <a href="">
                      <FaInstagram />
                    </a>
                  </div>
                  <div className="bg-white h-[25px] w-[25px] m-[10px] flex justify-center items-center rounded-sm hover:bg-black hover:text-white">
                    <a href="">
                      <FaXTwitter />
                    </a>
                  </div>
                  <div className="bg-white h-[25px] w-[25px] m-[10px] flex justify-center items-center rounded-sm hover:bg-black hover:text-white">
                    <a href="">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-gray-100 ">
        <Footer />
      </div>
    </>
  );
};

export default About;
