import * as React from "react"
import { Card, CardContent, Stack, Typography } from "@mui/joy";
import styles from "./statsStack.module.css"
import CircleIcon from '@mui/icons-material/Circle';

const StatsStack = () => {
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
                    <Typography level="title-md" className={styles.cardTitle}>628</Typography>
                    <Typography className={styles.cardText}>Total Devices</Typography>
                </CardContent>
                <CircleIcon color="primary"/>
            </Card>
            <Card variant="outlined" className={styles.card} sx={{flexGrow: 1, flexShrink: 1, flexBasis: 0}}>
                <CardContent>
                    <Typography level="title-md" className={styles.cardTitle}>628</Typography>
                    <Typography className={styles.cardText}>Online</Typography>
                </CardContent>
                <CircleIcon color="warning"/>
            </Card>
            <Card variant="outlined" className={styles.card} sx={{flexGrow: 1, flexShrink: 1, flexBasis: 0}}>
                <CardContent>
                    <Typography level="title-md" className={styles.cardTitle}>190</Typography>
                    <Typography className={styles.cardText}>Inuse</Typography>
                </CardContent>
                <CircleIcon color="success"/>
            </Card>
        </Stack>
    )
}
export default StatsStack;