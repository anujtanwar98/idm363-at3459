import Button from 'react-bootstrap/Button';
import { collection, onSnapshot, query, getDocs, addDoc } from 'firebase/firestore';
import Form from 'react-bootstrap/Form';

import { useState, useEffect } from 'react'
import { db } from '../../firestore';
import { storage } from '../../firestore';
import { async } from '@firebase/util';


export function AddHeadphones () {

    const [newHeadphones, setNewHeadphones] = useState("")
    const [newHeadphonesPrice, setNewHeadphonesPrice] = useState("")
    const [newHeadphonesImage, setNewHeadphonesImage] = useState("")
    
   

    const createHeadphones = async () => {
            await addDoc(collection(db, "headphones"), {name: newHeadphones, price: newHeadphonesPrice, headphoneimage: newHeadphonesImage})
    }
    return (
        <>
        <h1 className="text-center">Add Headphones</h1>
        <div className="d-flex justify-content-center">
            <div className="d-flex flex-column" style={{ gap: "1rem"}}>
                {/* <input type="text" placeholder="Headphones Name" onChange={(e) => setNewHeadphones(e.target.value)} />
                <input type="number" placeholder="Headphones Price" onChange={(e) => setNewHeadphonesPrice(e.target.value)} />
                <input type="file" accept="image/png image/jpg" onChange={(e) => setNewHeadphonesImage(e.target.files[0])} />
                <Button className="center" variant="primary" onClick={createHeadphones}>Add Headphones</Button> */}

                

                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Headphones Name</Form.Label>
                    <Form.Control type="text" placeholder="Normal text" onChange={(e) => setNewHeadphones(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Headphones Price</Form.Label>
                    <Form.Control type="text" placeholder="Normal text"onChange={(e) => setNewHeadphonesPrice(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Headphones image</Form.Label>
                    <Form.Control type="file" onChange={(e) => setNewHeadphonesImage(e.target.files[0])} />
                </Form.Group>
                <Button className="center" variant="primary" onClick={createHeadphones}>Add Headphones</Button>
                
               
            </div>
        </div>
        
        </>
    )
}