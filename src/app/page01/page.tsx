"use client";

import React from 'react';
import useStore from '@/store/useUserStore'
import Comp01 from '@/components/comp01'

interface PageProps { }

const Page: React.FC<PageProps> = () => {
    const { count, increase } = useStore();

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increase}>Increase</button>
            <Comp01 />
        </div>


    );
};

export default Page;