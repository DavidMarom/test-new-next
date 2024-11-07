"use client";
import { useEffect, useState } from "react";
import { getAllBooks, deleteBook } from "@/services/books";
import Card from "@/components/Card/Card";

export default function Home() {
  const [books, setBooks] = useState<any[]>([])

  useEffect(() => { getAllBooks().then((books) => setBooks(books)) }, []);

  const handleDelete = async (id: string) => {
    console.log(id);
    // await deleteBook(id);
    // const newBooks = books.filter((book) => book._id !== id);
    // setBooks(newBooks);
  }

  if (books) {
    return (
      <div>
        <h1>Hi</h1>

        {
          books.map((book: any, idx: number) => <Card
            key={idx}
            data={book}
            handleDelete={handleDelete}
          />)
        }


      </div>
    )
  }
}
