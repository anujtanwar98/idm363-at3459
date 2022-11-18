import { collection, onSnapshot, query, getDocs, updateDoc } from 'firebase/firestore';
import Form from 'react-bootstrap/Form';
import Headphonescard from '../headphones/Headphonescard';


import { useState, useEffect } from 'react'
import { db } from '../../firestore';

export function Edit () {
    return (
        <>
        <h1 className="text-center">Edit</h1>
        </>
    )
}