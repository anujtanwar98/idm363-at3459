import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react'
import { db } from '../../firestore';
import { collection, onSnapshot, query, getDocs, updateDoc } from 'firebase/firestore';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


const TableEdit = (headphones) => {
  return (
    <>
    {/* <div class="my-table"> */}
    <Table striped bordered hover variant="dark">
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
            {/* <button className="btn btn-danger"> */}
            <Link to={`/edit/${headphones.headphone.id}`}>Edit</Link>              
            {/* </button> */}
            <br />
            {/* <button className="btn btn-danger">Delete</button> */}
          </td>
        </tr>
      </tbody>
    </Table>
    {/* </div> */}
    </>
  );
}

export default TableEdit;