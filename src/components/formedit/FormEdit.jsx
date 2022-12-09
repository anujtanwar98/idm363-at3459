import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { db } from '../../firestore';
import { doc, getDoc, collection, updateDoc } from "firebase/firestore";
import { async } from '@firebase/util';
import { useState } from 'react';
import { useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";



export const FormEdit = () => {
    const [ headphone, setHeadphone ] = useState({})

    const [headphoneNewName, setHeadphoneNewName] = useState("")
    const [headphoneNewPrice, setHeadphoneNewPrice] = useState("")
    const [headphoneNewImage, setHeadphoneNewImage] = useState("")
    const [headphoneNewDescription, setHeadphoneNewDescription] = useState("")

    
    


    const updateHeadphone = async () => {
        await updateDoc(doc(db, "headphones", documentId), 
        {
            name: headphoneNewName || headphone.name, 
            price: headphoneNewPrice || headphone.price, 
            headphoneimage: headphoneNewImage || headphone.headphoneimage,
            description: headphoneNewDescription || headphone.description
        })

        // redirect to edit page 
        // const history = useHistory()
        // return history.push("/edit")
        
}
    

    const { documentId } = useParams()
    console.log(documentId)

   async function getHeadphonesByDocumentId() {
        const docRef = doc(db, "headphones", documentId);
        const docSnap = await getDoc(docRef);
    
        if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setHeadphone(docSnap.data())

        } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        }
    }
    
    // const handleOnChange = () => {
    //     // setHeadphoneNewName(headphone.name)
    //     // setHeadphoneNewPrice(headphone.price)
    //     // setHeadphoneNewImage(headphone.headphoneimage)
    //     console.log("handleOnChange")
    // }
    useEffect (() => {
        getHeadphonesByDocumentId()
    }, [])
    // getHeadphonesByDocumentId() ;


    // const docRef = doc(db, "headphones", "documentId");
    // const docSnap =  getDoc(docRef);

    // if (docSnap.exists()) {
    // console.log("Document data:", docSnap.data());
    // } else {
    // // doc.data() will be undefined in this case
    // console.log("No such document!");
    // }

    if (!headphone) {
        return <h1>Loading...</h1>
    }


    
  return (
    <>
    <Form>
        <h1 className='text-center'>FormEdit</h1>
        <div className="d-flex justify-content-center">
        <div className="d-flex flex-column" style={{ gap: "1rem", width: "40rem"}}>

        {/* <div className="block">
            <label for="">Recipe Title</label>
            <input type="text" name=""
            value=>
        </div> */}

        <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Headphones Name</Form.Label>
            <Form.Control type="text" placeholder="Title" value={headphoneNewName || headphone.name}  onChange={(e) => setHeadphoneNewName(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Headphones Price</Form.Label>
            <Form.Control type="number" placeholder="Price" value={headphoneNewPrice || headphone.price} onChange={(e) => setHeadphoneNewPrice(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Headphones image</Form.Label>
            <Form.Control type="text" placeholder="Image Url" value={headphoneNewImage || headphone.headphoneimage} onChange={(e) => setHeadphoneNewImage(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Headphones Description</Form.Label>
            <Form.Control as="textarea" rows={8} placeholder="Description" value={headphoneNewDescription || headphone.description} onChange={(e) => setHeadphoneNewDescription(e.target.value)} />
        </Form.Group>
        <Button className="center" variant="primary" onClick={updateHeadphone}>Update</Button>
        <Link className='btn btn-dark' to={`/edit`}>Back</Link>
        <br />
        <br />
        <br />
        </div>
        </div>
    </Form>
    </>
  )
}
