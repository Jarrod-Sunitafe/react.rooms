import * as React from "react"
import { Card, CardContent, Stack, Typography } from "@mui/joy";

const StatsStack = () => {
    return(
        <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        justifyContent="space-between"
        alignItems="flex-start"
        flexWrap="wrap" 
        useFlexGap
        >
            <Card variant="outlined" sx={{ flexGrow: 1, flexShrink: 1, flexBasis: 0 }}>
                <CardContent>
                    <Typography level="title-md" >123</Typography>
                    <Typography>Total Devices</Typography>
                </CardContent>
            </Card>
            <Card variant="outlined" sx={{flexGrow: 1, flexShrink: 1, flexBasis: 0}}>
                <CardContent>
                    <Typography level="title-md">628</Typography>
                    <Typography>Online</Typography>
                </CardContent>
            </Card>
            <Card variant="outlined" sx={{flexGrow: 1, flexShrink: 1, flexBasis: 0}}>
                <CardContent>
                    <Typography level="title-md">190</Typography>
                    <Typography>Inuse</Typography>
                </CardContent>
            </Card>
        </Stack>
    )
}
export default StatsStack;