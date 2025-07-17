import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import backArrowImg from "../assets/backarrow.png";
import { selectProducts } from "../productSlice";

const Productinfo = () => {
  //first we are loading the id passed down when routing
  const { id } = useParams();
  //second we load the productsList form the products slice
  const products = useSelector(selectProducts);
  //third we check if an item with the id specified exists, if yes then we can display its info else we show an error 404
  const productInfo = products.find((product) => product.id.toString() === id);
  //used to navigate
  const navigate = useNavigate();
  //these 2 states are used to track if a popup is visible or not
  const [isConfirmPopupVisible, setIsConfirmPopupVisible] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  //if no product exist with such id then it returns false so !false is true
  if (!productInfo) {
    document.title = "404: Item not found.";
    return (
      <div>
        <h1 className="headerStyle1">Product Info</h1>
        <h1 className="text-5xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
          404: no such product with an id of {id} was found.
        </h1>
        <button
          className="absolute top-3 left-2 hover:brightness-75 cursor-pointer"
          onClick={() => {
            navigate("/store");
          }}
        >
          <img src={backArrowImg} className="w-12 h-12" />
        </button>
      </div>
    );
  }

  document.title = productInfo.name;
  return (
    <div>
      {/* okay so here we envelopped all the content I wish to blur so that if either of the popup's state are set to true meaning they are displayed then blur everything in the back */}
      <div
        className={
          isConfirmPopupVisible || isOrderPlaced
            ? "blur-sm pointer-events-none"
            : ""
        }
      >
        <div>
          <h1 className="headerStyle1">Product Info</h1>
        </div>

        <div className="flex justify-center flex-wrap relative top-7">
          <img
            src={productInfo.imagepath}
            alt={productInfo.name}
            title={productInfo.name}
            className="w-[400px] h-[400px] m-auto"
          />

          <div className="flex justify-center items-center flex-col gap-y-[20px]">
            <p className="text-center text-2xl">
              <strong>Name:</strong> {productInfo.name}
              <br />
              <strong>Price:</strong> ${productInfo.price}
              <br />
            </p>
            <span className="mr-auto ml-2 text-2xl">
              <strong>About the item: </strong>
            </span>
            <br />
            <div className="ml-10 mr-2">
              <ul className="list-disc">
                {productInfo.description.split("\n").map((line, index) => (
                  <li key={index} className="max-w-[960px]">
                    {line.trim()}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <button
          className="flex ml-auto mr-auto mt-[70px] w-[160px] h-[100px] bg-accent text-accenttext text-center px-5 py-2.5 text-4xl rounded-4xl hover:brightness-75 cursor-pointer"
          onClick={() => setIsConfirmPopupVisible(true)}
        >
          Order Now!
        </button>

        <button
          className="absolute top-3 left-2 hover:brightness-75 cursor-pointer"
          onClick={() => {
            navigate("/store");
          }}
        >
          <img src={backArrowImg} className="w-12 h-12" />
        </button>
      </div>

      {/* ok so this is react conditional rendering where if its true it will display what is after the &&. I used the same for the order placed popup */}
      {isConfirmPopupVisible && (
        <div className="fixed backdrop-blur-2xl left-1/2 -translate-x-1/2 bg-accent text-accenttext w-[90%] h-[200px] text-xl text-center rounded-3xl animate-moveTopToCenter z-50">
          <h1 className="font-bold text-4xl mt-1">Confirmation Required</h1>
          <p className="mt-8">Are you sure you want to place your order?</p>

          <div className="flex flex-col justify-center items-center mt-6">
            <button
              className="w-[200px] h-[30px] cursor-pointer text-black bg-white border-2 border-gray-300 hover:brightness-75"
              onClick={() => {
                setIsConfirmPopupVisible(false);
                setIsOrderPlaced(true);
              }}
            >
              Confirm
            </button>
            <button
              className="w-[200px] h-[30px] cursor-pointer text-black bg-white border-2 border-gray-300 hover:brightness-75"
              onClick={() => setIsConfirmPopupVisible(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {isOrderPlaced && (
        <div className="fixed backdrop-blur-2xl left-1/2 -translate-x-1/2 bg-accent text-accenttext w-[90%] h-[200px] text-xl text-center rounded-3xl animate-moveTopToCenter z-50">
          <h1 className="font-bold text-4xl mt-1">Order Placed!</h1>
          <p className="mt-5">
            You will receive the receipt to your email in a few moments.
          </p>
          <button
            className="w-[200px] h-[30px] cursor-pointer text-black bg-white border-2 border-gray-300 hover:brightness-75 mt-10"
            onClick={() => setIsOrderPlaced(false)}
          >
            OK
          </button>
        </div>
      )}
    </div>
  );
};

export default Productinfo;
