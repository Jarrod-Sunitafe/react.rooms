'use client'

import * as React from "react"
import { useState, useEffect } from "react";
import { Card, CardContent, Stack, Typography } from "@mui/joy";
import styles from "./statsStack.module.css"
import CircleIcon from '@mui/icons-material/Circle';

export default function StatsStack() {
    const [totalInuse, setTotalInuse] = useState(0);
    const [totalOnline, setTotalOnline] = useState(0);
    const [totalDevice, setTotalDevice] = useState(0);

    useEffect(() => {
        fetch('/api/get-all-inuse/') // Fetch data from the backend API
        .then(response => {
            if(!response.ok) {
                alert('Unable to fetch API...'); // Display an alert if the response is not ok
            }
            return response.json(); // Parse the JSON response
        })
        .then(data => {
            setTotalInuse(data.agents); // Update the state with the fetched data
        })
        .catch(error => console.log(error.message)); // Log any errors
    },[]);

    useEffect(() => {
        fetch('/api/get-all-online/') // Fetch data from the backend API
        .then(response => {
            if(!response.ok) {
                alert('Unable to fetch API...'); // Display an alert if the response is not ok
            }
            return response.json(); // Parse the JSON response
        })
        .then(data => {
            setTotalOnline(data.agents); // Update the state with the fetched data
        })
        .catch(error => console.log(error.message)); // Log any errors
    },[]);

    useEffect(() => {
        fetch('/api/get-all-device/') // Fetch data from the backend API
        .then(response => {
            if(!response.ok) {
                alert('Unable to fetch API...'); // Display an alert if the response is not ok
            }
            return response.json(); // Parse the JSON response
        })
        .then(data => {
            setTotalDevice(data.devices); // Update the state with the fetched data
        })
        .catch(error => console.log(error.message)); // Log any errors
    },[]);


    return(
        <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        justifyContent="space-between"
        alignItems="flex-start"
        flexWrap="wrap" 
        useFlexGap
        className={styles.stack}
        >
            <Card variant="outlined" className={styles.card} sx={{ flexGrow: 1, flexShrink: 1, flexBasis: 0 }}>
                <CardContent>
                    <Typography level="title-md" className={styles.cardTitle}>{totalDevice}</Typography>
                    <Typography className={styles.cardText}>Total Devices</Typography>
                </CardContent>
                <CircleIcon color="primary"/>
            </Card>
            <Card variant="outlined" className={styles.card} sx={{flexGrow: 1, flexShrink: 1, flexBasis: 0}}>
                <CardContent>
                    <Typography level="title-md" className={styles.cardTitle}>{totalOnline}</Typography>
                    <Typography className={styles.cardText}>Online</Typography>
                </CardContent>
                <CircleIcon color="warning"/>
            </Card>
            <Card variant="outlined" className={styles.card} sx={{flexGrow: 1, flexShrink: 1, flexBasis: 0}}>
                <CardContent>
                    <Typography level="title-md" className={styles.cardTitle}>{totalInuse}</Typography>
                    <Typography className={styles.cardText}>Inuse</Typography>
                </CardContent>
                <CircleIcon color="success"/>
            </Card>
        </Stack>
    );
}