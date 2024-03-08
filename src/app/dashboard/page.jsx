import * as react from 'react';
import StatsStack from "@/components/statsStack/statsStack";
import lineChart from "@/components/lineChart/lineChart"
import { Table } from "@mui/joy";

const dashboard = () => {
    return (
    <>  
        <h1>Rooms Dashboard</h1>
        <StatsStack/>
        <lineChart/>
        {/* <Table hoverRow>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Device Count</th>
                    <th>Currently Active</th>
                    <th>Usage</th>
                    <th>Time</th>
                </tr>
            </thead>
            <tbody>
                {row.map((row) => (
                    <tr key={row.name}>
                        <td>{row.name}</td>
                        <td>{row.deviceCount}</td>
                        <td>{row.currentActive}</td>
                        <td>{row.usage}</td>
                        <td>{row.time}</td>
                    </tr>
                ))}
            </tbody>
        </Table> */}
    </>
    )
}

export default dashboard