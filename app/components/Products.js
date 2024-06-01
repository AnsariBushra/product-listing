"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Products = () => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const getProducts = async () => {
    const url = "https://fakestoreapi.com/products";
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setProducts(parsedData);
    setFilteredProducts(parsedData);
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    const lowercasedQuery = searchQuery.toLowerCase();
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredProducts(filtered);
  }, [searchQuery, products]);

  const handleBuyClick = (productId) => {
    router.push(`/products/${productId}`);
  };

  return (
    <>
      <div className="text-center">
        <h1 className="font-medium text-3xl mb-4">PRODUCT LIST</h1>
        <input
          type="text"
          placeholder="Search Products"
          className="border mb-5 p-2 rounded-md"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <hr />
      </div>
      <div className="">
        {loading ? (
          <div className="justify-center text-center">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-10">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((element) => (
                <div key={element.id} className="hover:outline mt-8">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <Image
                      width={200}
                      height={200}
                      priority
                      className="rounded-lg mx-auto w-fit h-40"
                      src={element.image}
                      alt={element.title}
                    />
                    <h5 className="text-lg font-medium text-center mt-6">
                      {element.title.substring(0, 20)}
                    </h5>
                    <p className="text-gray-700 p-2 text-center">
                      ${element.price}
                    </p>
                    <div className="justify-center align-center text-center m-4">
                      <button
                        className="bg-black text-white py-2 mt-4 px-6 rounded-md justify-center"
                        onClick={() => handleBuyClick(element.id)}
                      >
                        Buy
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-1 md:col-span-2 lg:col-span-4 text-center text-gray-500 mt-10 text-2xl">
                No data found
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Products;
