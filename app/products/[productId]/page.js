"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Products from "@/app/components/Products";

function ProductDetails({ params }) {
  const productUrl = params.productId;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productUrl}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product details");
        }
        const productData = await response.json();
        setProduct(productData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [productUrl]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="m-0 my-4 flex container mx-auto">
      <div class=" ml-14 flex">
        <Link href="/" class="text-black font-bold text-4xl">
          &larr;
        </Link>
      </div>
      <div className="container md:w-1/2">
        <Image
          width={200}
          height={200}
          src={product.image}
          priority
          alt={product.title}
          className="h-auto w-auto mx-auto"
        />
      </div>
      <div className="container bg-slate-50 rounded-lg p-4 mr-8 grid">
        <h4 className="text-uppercase font-semibold text-4xl" style={{ textTransform: 'capitalize' }}>{product.category}</h4>
        <h1 className="text-2xl font-medium">{product.title}</h1>
        <p className="text-md font-normal">{product.description}</p>
        <p className="font-bold text-lg">${product.price}</p>
        <Link href="#" className=" flex w-20 h-10 rounded-md text-white text-center outline-dark hover:bg-gray-900 px-4 py-2 bg-black">Add to Cart</Link>
      </div>
    </div>
  );
}

export default ProductDetails;
