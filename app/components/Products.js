"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';

const Products = () => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    const url = `https://dummyjson.com/products`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setProducts(parsedData.products);
    setFilteredProducts(parsedData.products); // Initialize filtered products with all products
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleBuyClick = (productId) => {
    // Navigate to the product details page with the product ID as a parameter
    router.push(`/products/${productId}`);
  };

  return (
    <>
      <div className="text-center">
        <h1 className="font-medium text-3xl mb-4">PRODUCT LIST</h1>
        <hr />
      </div>
      <div className="row justify-content-center">
        {loading ? (
          <div className="justify-center text-center">Loading...</div>
        ) : (
          <div className="flex flex-row gap-14 flex-wrap justify-center items-center">
            {filteredProducts.map((element) => (
              <div key={element.id} className="hover:outline mt-8">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <img
                    className="rounded-lg h-52 w-64"
                    src={element.thumbnail}
                    alt={element.title}
                  />
                  <h5 className="text-lg font-medium text-center mt-6">
                    {element.title.substring(0, 20)}
                  </h5>
                  <p className="text-gray-700 p-2 text-center">${element.price}</p>
                  <div className="justify-center align-center text-center m-4">
                    <button
                      className="bg-black text-white py-2 mt-4 px-6 rounded-md justify center"
                      onClick={() => handleBuyClick(element.id)}
                    >
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Products;
