import React from 'react';
import useStore from '@/store/useUserStore'

interface Comp01Props { }

const Comp01: React.FC<Comp01Props> = ({ }) => {
    const { decrease } = useStore();

    return (
        <div className="aaa">
            <button onClick={decrease}>Decrease</button>
        </div>
    );
};

export default Comp01;