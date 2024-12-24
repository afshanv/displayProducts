import React from "react";
import Link from "next/link";


interface IBook {
  id: number;
  name: string;
  type: string;
  available: boolean;
}
  
const Page = async () => {
  // Fetch data from API on the server side
  const response = await fetch("https://simple-books-api.glitch.me/books/");
  const books: IBook[] = await response.json();

  return (
    <div className="min-h-screen bg-gradient-to-br bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white flex flex-col items-center justify-between">
      <div className="min-h-screen bg-100">
        <div className="max-w-7xl mx-auto py-10 px-6">
          <h1 className="text-5xl font-extrabold tracking-widest animate-pulse mb-16">Server-Side Rendering</h1>
          <Link href="/"
          className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mt-20 ">
            Go Back to Home
          </Link>
          <h2 className="text-3xl font-bold text-center mb-16 text-white mt-16">Books Available</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 6">
            {books.map((book) => (
              <div
                key={book.id}
                className="bg-white p-5 rounded-lg shadow-md flex flex-col items-center"
              >
                <h2 className="text-xl font-semibold">{book.name}</h2>
                <p className="text-md text-gray-700">Type: {book.type}</p>
                <p className="text-md text-gray-700">
                  Availability: {book.available ? "Available" : "Not Available"}
                </p>
              </div>
            ))
            }
          </div>
          <div className="text-center mt-16">
            <Link
              href="Client-Side"
              className="text-2l font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
               Go Back to Client-Side
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
  
export default Page;
  