"use client";
import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";

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
    <div>
      <h1>{product.title}</h1>
      <Image
        width={200}
        height={200}
        src={product.image}
        priority
        alt={product.title}
        className="h-auto w-auto"
      />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
}

export default ProductDetails;
