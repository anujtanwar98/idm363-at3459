import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react'
import { db } from '../../firestore';
import { collection, onSnapshot, query, getDocs, updateDoc } from 'firebase/firestore';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { format_price } from '../utilities/Currency';
import './TableEdit.css';


const TableEdit = (headphones) => {
  return (
    <>
    {/* <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Headphone Name</th>
          <th>Headphone Price</th>
          <th>Headphone Image URL</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{headphones.headphone.name}</td>
          <td>{headphones.headphone.price}</td>
          <td>{headphones.headphone.headphoneimage}</td>
          <td>
            <Link className='btn btn-danger' to={`/edit/${headphones.headphone.id}`}>Edit</Link>
          </td>
        </tr>
      </tbody>
    </Table> */}

    <Card className='allcards' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={headphones.headphone.headphoneimage} />
      <Card.Body>
        <Card.Title>{headphones.headphone.name}</Card.Title>
        <Card.Text>{format_price(headphones.headphone.price)}</Card.Text>
        <div className="d-flex justify-content-center">
          <Link className='btn btn-danger' to={`/edit/${headphones.headphone.id}`}>Edit</Link>  
        </div>
      </Card.Body>
    </Card>

    {/* </div> */}
    </>
  );
}

export default TableEdit;