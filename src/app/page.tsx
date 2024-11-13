"use client";
import { getAllBooks, deleteBook } from "@/services/books";
import Card from "@/components/Card/Card";
import { useQuery } from '@tanstack/react-query';

import Link from "next/link";

export default function Home() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['books'],
    queryFn: getAllBooks,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading books</div>;

  const handleDelete = async (id: string) => {
    console.log(id);
    // await deleteBook(id);
    // const newBooks = books.filter((book) => book._id !== id);
    // setBooks(newBooks);
  }

  return (
    <div>
      <h1>Books</h1>
      <Link href="/page01">Go to page 01</Link>
      {
        data && data.map((book: any, idx: number) => <Card
          key={idx}
          data={book}
          handleDelete={handleDelete}
        />)
      }


    </div>
  )
}
