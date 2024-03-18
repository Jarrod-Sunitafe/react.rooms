"use client"

import * as React from "react";
import { useState, useEffect } from "react";
import { Card, CardContent, Stack, Typography } from "@mui/joy";
import { ResponsiveContainer, LineChart, Line, Tooltip } from "recharts"; 
import styles from "./statsStack.module.css";
import CircleIcon from '@mui/icons-material/Circle';

export default function StatsStack() {
    const [totalInuse, setTotalInuse] = useState(0);
    const [totalOnline, setTotalOnline] = useState(0);
    const [totalDevice, setTotalDevice] = useState(0);

    useEffect(() => {
        const fetchData = async() => {
        fetch('/api/get-all-inuse', { method: 'GET', next: { revalidate: 1900 } }) // Fetch data from the backend API
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
        };
        fetchData();
        const intarval = setInterval(fetchData, 60000);
        return () => clearInterval(intarval); 
    },[]);

    useEffect(() => {
        const fetchData = async() => {
        fetch('/api/get-all-online',) // Fetch data from the backend API
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
        };
        fetchData();
        const intarval = setInterval(fetchData, 60000);
        return () => clearInterval(intarval); 
    },[]);

    useEffect(() => {
        const fetchData = async() => {
        fetch('/api/get-all-device') // Fetch data from the backend API
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
        };
        fetchData();
        const intarval = setInterval(fetchData, 60000);
        return () => clearInterval(intarval); 
    },[]);


    const testData = 
    [{"Device": 142},
    {"Device": 134},
    {"Device": 136},
    {"Device": 60},
    {"Device": 36},
    {"Device": 140}]

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
                <ResponsiveContainer className={styles.lineContainer}>
                    <LineChart width={250} height={80} data={testData}>
                        <Tooltip/>
                        <Line type="monotone" dataKey="Device" stroke="#ADD8E6"/>
                    </LineChart>
                </ResponsiveContainer>
                <CircleIcon color="primary"/>
            </Card>
            <Card variant="outlined" className={styles.card} sx={{flexGrow: 1, flexShrink: 1, flexBasis: 0}}>
                <CardContent>
                    <Typography level="title-md" className={styles.cardTitle}>{totalOnline}</Typography>
                    <Typography className={styles.cardText}>Online</Typography>
                </CardContent>
                <ResponsiveContainer className={styles.lineContainer}>
                    <LineChart width={250} height={80} data={testData}>
                        <Tooltip/>
                        <Line type="monotone" dataKey="Device" stroke="#FFD580"/>
                    </LineChart>
                </ResponsiveContainer>
                <CircleIcon color="warning"/>
            </Card>
            <Card variant="outlined" className={styles.card} sx={{flexGrow: 1, flexShrink: 1, flexBasis: 0}}>
                <CardContent>
                    <Typography level="title-md" className={styles.cardTitle}>{totalInuse}</Typography>
                    <Typography className={styles.cardText}>Inuse</Typography>
                </CardContent>
                <ResponsiveContainer className={styles.lineContainer}>
                    <LineChart width={250} height={80} data={testData}>
                        <Tooltip className={styles.inuseToolTip}/>
                        <Line type="monotone" dataKey="Device" stroke="#B1F3B1" dot={{ stroke: 'green'}}/>
                    </LineChart>
                </ResponsiveContainer>
                <CircleIcon color="success"/>
            </Card>
        </Stack>
    );
}