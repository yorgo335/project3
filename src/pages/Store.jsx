import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

import { useNavigate } from "react-router-dom";

const Store = () => {
  document.title = "Store";

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate(); //used to navigate

  //I want it to refresh and check if any new products was added to database every time we go to store
  //and thanks to redux I don't need to repeat the same thing when i click on a product and instead
  //use the original code i had.
  useEffect(() => {
    async function fetchProducts() {
      try {
        setIsLoading(true);
        const res = await fetch("/api/store");
        const data = await res.json();
        setProducts(data.data);
      } catch (err) {
        console.error("Failed to load products", err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, []);

  //loading screen while fetching
  if (isLoading) {
    return (
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <h1 className="headerStyle1">Browse</h1>
      <div className="flex flex-wrap gap-y-2.5 gap-x-14 ml-5 mt-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="hover:scale-110 transition-transform duration-200 hover:bg-bgcolor hover:shadow-accent hover:shadow-2xl hover:rounded-sm"
          >
            <button
              onClick={() => {
                navigate(`/store/${product.id}`);
              }}
            >
              <img
                src={product.imagepath}
                title={product.name}
                alt={product.name}
                className="w-[200px] h-[200px] cursor-pointer"
              />
            </button>

            <p className="max-w-[200px]">
              <strong>Name:</strong> {product.name}
              <br />
              <strong>Price:</strong> ${product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
