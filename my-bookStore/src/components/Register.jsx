import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");

  const [accountType, setAccountType] = useState("User");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate()

  const bank_end_port = "http://localhost:5000";

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      //alert("Password do not match");
      return;
    }

    if (email === "" || username === "" || password === "") {
      //alert("Input required field");
      return;
    }

    try {
      const response = await axios.post(`${bank_end_port}/auth/register`, {
        email,
        password,
        username,
      });
     

      console.log("Server response:", response);
      if (response.data) {
        console.log(response);
        setTimeout(() => {
          navigate('/')
        }, 1000)
        //alert("Your account has been created");
        setSuccess("Registration successful");
        setEmail("");
        setUsername("");
        setPassword("");
        setConfirmPassword("");
      }
    } catch (error) {
      setError("Email has been registered");
      //alert(error.response.data.msg);
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex min-h-screen">
        <div className="bg-white border-2 rounded-[5px] w-[400px] h-[400px] text-center shadow-lg shadow-purple-500/50 m-[auto]">
          <div className="flex flex-col gap-[10px]">
            <h1 className="font-bold mt-[5px]">REGISTER NOW</h1>
            <form className="flex flex-col gap-[10px]" onSubmit={handleSubmit}>
              <div>
                <input
                  required
                  className="border border-black rounded-[5px] h-[40px] w-[300px] p-[5px]"
                  name="name"
                  type="text"
                  value={username}
                  placeholder="enter your name"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </div>
              <div>
                <input
                  required
                  className="border border-black rounded-[5px] h-[40px] w-[300px] p-[5px]"
                  name="email"
                  type="email"
                  value={email}
                  placeholder="enter your email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div>
                <input
                  required
                  className="border border-black rounded-[5px] h-[40px] w-[300px] p-[5px]"
                  name="password"
                  type="password"
                  value={password}
                  placeholder="enter your password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div>
                <input
                  required
                  className="border border-black rounded-[5px] h-[40px] w-[300px] p-[5px]"
                  name="confrim pass"
                  type="password"
                  value={confirmPassword}
                  placeholder="confirm your password"
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                />
              </div>
              <div>
                <select
                  id="options"
                  className="border border-black rounded-[5px] text-sm w-[300px] p-2.5 "
                >
                  <option
                    value="USER"
                    onClick={() => {
                      setAccountType("User");
                    }}
                  >
                    user
                  </option>
                  <option
                    value="ADMIN"
                    onClick={() => {
                      setAccountType("Admin");
                    }}
                  >
                    admin
                  </option>
                </select>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-purple-800 w-[100px] h-[35px] rounded-[5px] text-white"
                >
                  Register
                </button>
                {error && <p style={{ color: "red" }}>{error}</p>}
                {success && <p style={{ color: "green" }}>{success}</p>}
              </div>
            </form>
            <p>
              already have an account?{" "}
              <span className="text-blue-800 hover:underline">
                <Link to="/">login now</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
