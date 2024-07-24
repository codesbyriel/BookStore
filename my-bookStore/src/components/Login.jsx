import { useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("")

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");
   
  

    try {
      const response = await axios.post("http://localhost:5000/auth/login", {
        email,
        password
      });

      console.log("Server response", response.data);
      
      if(response.data.access_token){
        setSuccess("Login successfuly")
        //alert("Login successfull")
        setTimeout(() => {
          navigate("/Home")
        },1000)
      }
      
    } catch (error) {
      setError("Invalid email or password");
      console.log(error)
      //alert("Invalid email or pass")
    }
  }


  return (
    <>
      <div className="flex min-h-screen">
        <div className="bg-white border-2 rounded-[5px] w-[300px] h-[350px] text-center shadow-lg shadow-purple-500/50 m-[auto]">
          <div className="flex flex-col gap-[10px] p-[10px] m-[20px]">
            <h1 className="font-bold text-xl">LOGIN NOW</h1>
                {error && <p style={{ color: "red" }} className="text-xs h-[10px] mt-[-10px]">{error}</p>}
                {success && <p style={{ color: "green" }} className="text-xs h-[10px] mt-[-10px]">{success}</p>}

            <form className="flex flex-col gap-[20px]" onSubmit={handleSubmit}>
              <div>
                <input
                 required
                  className="border-b-[3px] border-purple-800 rounded-[5px] h-[40px] w-[250px] p-[5px]"
                  name="email"
                  type="email"
                  placeholder="enter your email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div>
                <input
                  required
                  className="border-b-[3px] border-purple-800 rounded-[5px] h-[40px] w-[250px] p-[5px]"
                  name="password"
                  type="password"
                  placeholder="enter your password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div>
                <button
                  className="bg-purple-800 text-white w-[100px] rounded-[5px] h-[40px] "
                  type="submit"
                
                >
                  Login Now
                </button>
              </div>
              <p className="mt-[15px] text-sm">
                don't have an account?{" "}
                <span className="text-blue-800 hover:underline">
                  <Link to="/Register">Register now</Link>
                </span>{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
