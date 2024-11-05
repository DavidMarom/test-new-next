"use client";
import { useEffect, useState } from "react";
import { getAllBooks } from "@/services/books";

export default function Home() {
  const [books, setBooks] = useState<any[]>([])

  useEffect(() => {
    getAllBooks().then((books) => setBooks(books));
  }, []);

  if (books) {
    return (
      <div>
        <h1>Hi</h1>

        {books.map((book: any) => <div key={book._id}>{book.model_name}</div>)}


      </div>
    )
  }
}
