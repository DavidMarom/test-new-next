"use client";

import React from 'react';
import useStore from '@/store/useUserStore'
import Comp01 from '@/components/comp01'
import style from './page01.module.css'
import Link from 'next/link';
// import { getAllBooks, deleteBook } from "@/services/books";

interface PageProps { }

const Page: React.FC<PageProps> = () => {
    const { count, increase } = useStore();
   


    return (
        <div className={style.test}>
            <h1>{count}</h1>
            <div className={style.aaa}>
                <p>aaaa</p>
            </div>
            <button onClick={increase}>Increase</button>

            <br />
            <Link href="/">Go Home</Link>


            <Comp01 />
        </div>


    );
};

export default Page;