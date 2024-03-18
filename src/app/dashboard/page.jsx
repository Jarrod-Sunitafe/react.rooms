import * as react from 'react';
import StatsStack from "@/components/statsStack/statsStack";
import lineChart from "@/components/lineChart/lineChart"
import { Table } from "@mui/joy";
import MostUsedRooms from '@/components/dashboardComp/mostUsedRooms';

const dashboard = () => {
    return (
    <>  
        <h1>Rooms Dashboard</h1>
        <StatsStack/>
        <lineChart/>
        <MostUsedRooms/>
    </>
    )
}

export default dashboard