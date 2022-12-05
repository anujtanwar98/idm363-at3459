import { collection, onSnapshot, query, getDocs, updateDoc } from 'firebase/firestore';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Headphonescard from '../headphones/Headphonescard';
import TableEdit from '../table/TableEdit';


import { useState, useEffect } from 'react'
import { db } from '../../firestore';

export function Edit () {
    return (
        <>
        <h1 className="text-center">Edit</h1>
        {/* <TableEdit /> */}
        <div className="d-flex justify-content-center">
            <div className="d-flex flex-column" style={{ gap: "1rem"}}>
                <Form>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Headphones Name</Form.Label>
                    <Form.Control type="text" placeholder="Title" />
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Headphones Price</Form.Label>
                    <Form.Control type="text" placeholder="Price" />
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Headphones image</Form.Label>
                    <Form.Control type="text" placeholder="Image Url" />
                </Form.Group>
                <Button className="center" variant="primary">Edit Headphones</Button>
                </Form>
            </div>
        </div>
        </>
    )
}