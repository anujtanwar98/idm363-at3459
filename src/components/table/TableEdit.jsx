import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react'
import { db } from '../../firestore';
import { collection, onSnapshot, query, getDocs, updateDoc } from 'firebase/firestore';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function TableEdit() {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Headphone Name</th>
          <th>Headphone Price</th>
          <th>Headphone Image URL</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>hello</td>
          <td>hello</td>
          <td>hello</td>
          <td>
            <button className="btn btn-primary">Edit</button>
            <br />
            <button className="btn btn-danger">Delete</button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableEdit;