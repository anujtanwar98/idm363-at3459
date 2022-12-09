import React from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../firestore';
import { doc, getDoc, collection, updateDoc } from "firebase/firestore";
import { async } from '@firebase/util';
import { useState } from 'react';
import { useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import  {Card}  from 'react-bootstrap';
import { format_price } from '../utilities/Currency';


const DetailPage = (headphones) => {
    const { documentId } = useParams();
    const [headphone, setHeadphone] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getHeadphone = async () => {
            try {
                const docRef = doc(db, "headphones", documentId);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setHeadphone(docSnap.data());
                } else {
                    setError("No such document!");
                }
            } catch (error) {
                setError(error.message);
            }
            setLoading(false);
        };
        getHeadphone();
    }, [documentId]);
    return (
        <>
        <h1 className="text-center">About this Proudct</h1>
        <div className="allheadphones">
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {headphone && (
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={headphone.headphoneimage} />
                    <Card.Body>
                        <Card.Title>{headphone.name}</Card.Title>
                        <Card.Text>
                            {headphone.description}
                        </Card.Text>
                        <Card.Text>
                            {format_price(headphone.price)}
                        </Card.Text>
                        <Link to={`/`}>
                            <Button variant="primary">Go Back</Button>
                        </Link>
                    </Card.Body>
                </Card>
            )}
        </div>
        
        </>
    )
}

export default DetailPage;