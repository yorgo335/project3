import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
  document.title = "About Us";

  return (
    <div>
      <Navbar />
      <h1 className="headerStyle1">About Us</h1>

      <div className="flex justify-center items-center text-center mt-[10%] text-2xl font-semibold leading-15">
        <p>
          My name is Yorgo Nassar, and I am the founder of NotAmazon.
          <br />
          As the name says we totally are NOT Amazon, please refrain from
          comparing us to Amazon.
          <br />
          We hope you will give us a chance and try our service and hopefully
          become a returning customer.
        </p>
      </div>
    </div>
  );
};

export default About;
