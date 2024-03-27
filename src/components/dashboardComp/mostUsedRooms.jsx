'use client'

import { Table } from "@mui/joy";
import * as React from "react";
import { useEffect, useState } from "react";
import styles from './mostUsedRooms.module.css'

export default function MostUsedRooms() {

    const [highestRooms, setHighestRooms] = useState([])

    useEffect(() => {
        const fetchData = async() => {
        fetch('/api/get-highest-rooms', { method: 'GET', next: { revalidate: 1900 } }) // Fetch data from the backend API
        .then(response => {
            if(!response.ok) {
                alert('Unable to fetch API...'); // Display an alert if the response is not ok
            }
            return response.json(); // Parse the JSON response
        })
        .then(data => {
            setHighestRooms(data.rooms); // Update the state with the fetched data
        })
        .catch(error => console.log(error.message)); // Log any errors
        };
        fetchData();
        const intarval = setInterval(fetchData, 60000);
        return () => clearInterval(intarval); 
    },[]);

    return(
        <Table className={styles.tableContainer} hoverRow="true">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Device Count</th>
                </tr>
            </thead>
            <tbody>
                {highestRooms.map((row) => (
                    <tr key={row.Name}>
                        <td>{row.Name}</td>
                        <td>{row.ActiveCount}</td>

                    </tr>
                ))}
            </tbody>
        </Table>
    );

};