import React from 'react';
import styles from './Card.module.css';

interface CardProps {
    data: any;
    handleDelete: any;
}

const Card: React.FC<CardProps> = ({ data, handleDelete }) => {
    return (
        <div className={styles.container}>
            <p>{data.model_name}</p>
            <p>{data.color}</p>
            <p>{data._id}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default Card;
