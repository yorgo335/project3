import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts, setProducts } from "../productSlice";
import { useNavigate } from "react-router-dom";

const Store = () => {
  document.title = "Store";
  const dispatch = useDispatch();
  const products = useSelector(selectProducts); //we get the productsList from the products slice
  const navigate = useNavigate(); //used to navigate

  //I want it to refresh and check if any new products was added to database every time we go to store
  //and thanks to redux I don't need to repeat the same thing when i click on a product and instead
  //use the original code i had.
  useEffect(() => {
    fetch("/api/store")
      .then((res) => res.json())
      .then((data) => {
        dispatch(setProducts(data.data));
      })
      .catch((err) => console.error("Failed to load products", err));
  }, [dispatch]);

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
