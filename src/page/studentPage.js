import { Box, Grid } from "@material-ui/core";
import { Outlet } from "react-router-dom";
import Sidebar from "../component/sidebar";

export default function StudentPage() {
    return (
        <Grid container spacing={0} display="flex" width="100%" >
            <Grid item xs={2}>
                <Sidebar ></Sidebar>
            </Grid>
            <Grid item xs={10}>
                <Outlet></Outlet>
            </Grid>

        </Grid>
    )
}