import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();
  document.title = "Home";
  return (
    <div>
      <Navbar />

      <div>
        <h1 className="headerStyle1">Welcome to NotAmazon!</h1>
        <p className="text-[40px] font-semibold text-center mt-3">
          Everything You Need, All in One Place — We Ship Globally
        </p>
      </div>

      <div className="flex justify-center items-center mt-[20vh]">
        <button
          onClick={() => {
            navigate("/store");
          }}
          className="text-[40px] leading-11 px-3 py-0.5 w-40 h-[100px] text-center text-accenttext bg-accent border-1 border-black rounded-[30px] hover:brightness-75 cursor-pointer"
        >
          Shop Now!
        </button>
      </div>
    </div>
  );
}

export default Home;
