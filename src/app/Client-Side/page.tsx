"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const Page = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Fetch data from API on the client side
        const response = await fetch("https://fakestoreapi.com/products");
        const data: IProduct[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  return (
    
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto py-10 px-6">
        <h1 className="text-5xl text-white font-extrabold tracking-widest animate-pulse mb-16">Clint-Side Rendering</h1>
        <Link href="/"
        className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
        >
          Go Back to Home
        </Link>
        
        <h1 className="text-3xl font-bold text-center mb-16 text-white">Products Available</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-5 rounded-lg shadow-md flex flex-col items-center hover:shadow-lg transition-shadow"
            >
              <div className="h-40 w-40 flex justify-center items-center">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={100}
                  height={90}

                  className="rounded-lg object-contain"
                />
              </div>
              <h2 className="text-xl font-semibold mt-4 text-center">{product.title}</h2>
              <p className="text-md text-green-700 font-bold mt-2">Price: ${product.price}</p>
              <p className="text-sm text-gray-700 mt-2">
                <span className="font-bold text-blue-600">Description:</span> {product.description}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                <span className="font-bold text-orange-600">Category:</span> {product.category}
              </p>
              </div>
            ))};
          </div>
          
          <div className="text-center mt-16">
            <Link
            href="Server-Side"
            className="text-2l font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
          >
            Go Back to Server-Side
            </Link>
          </div>
        </div>
    </div>
    );
};

export default Page;
