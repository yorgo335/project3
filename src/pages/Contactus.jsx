import React from "react";
import Navbar from "../components/Navbar";

const Contactus = () => {
  document.title = "Contact Us";
  return (
    <div>
      <Navbar />
      <h1 className="headerStyle1">Contact Us!</h1>
      <div className="flex justify-center items-center mt-[5%]">
        <form
          action=""
          method="get"
          className=" bg-accent text-accenttext rounded-4xl p-12"
        >
          <label className="labelStyle1" htmlFor="name">
            Name:
          </label>
          <input
            className="formInputStyle1"
            type="text"
            name="name"
            placeholder="type your name"
            autoComplete="off"
            autoFocus
            required
          />
          <br />
          <label className="labelStyle1" htmlFor="email">
            Email:
          </label>
          <input
            className="formInputStyle1"
            type="email"
            name="email"
            placeholder="type your email"
            autoComplete="off"
            required
          />
          <br />
          <label className="labelStyle1" htmlFor="phonenumber">
            Phone:
          </label>
          <input
            className="formInputStyle1"
            type="tel"
            name="phonenumber"
            autoComplete="off"
            placeholder="type your phone number"
          />
          <br />
          <label className="labelStyle1" htmlFor="comment">
            Comment:
          </label>
          <textarea
            className="textAreaStyle1"
            name="comment"
            placeholder="type your comment"
            required
          ></textarea>
          <br />
          <input className="formButtonStyle1" type="submit" value="Submit" />
          <br />
          <input className="formButtonStyle1" type="reset" value="Clear" />
        </form>
      </div>
    </div>
  );
};

export default Contactus;
