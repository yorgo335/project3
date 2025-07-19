import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import backArrowImg from "../assets/backarrow.png";

const Productinfo = () => {
  //first we are loading the id passed down when routing
  const { id } = useParams();

  //this will store the product's info
  const [productInfo, setProductInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  //fetch the product's info from database if it exists
  useEffect(() => {
    async function fetchProduct() {
      try {
        setIsLoading(true);
        const res = await fetch(`/api/store/${id}`);
        const data = await res.json();
        setProductInfo(data.data);
      } catch (err) {
        console.error("Failed to load product", err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  //used to navigate
  const navigate = useNavigate();
  //these 2 states are used to track if a popup is visible or not
  const [isConfirmPopupVisible, setIsConfirmPopupVisible] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  //loading screen while fetching
  if (isLoading) {
    return (
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

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
                {productInfo.description
                  .replace(/\\n/g, "\n")
                  .split("\n")
                  .map((line, index) => (
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
