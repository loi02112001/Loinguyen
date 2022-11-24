import { Grid } from "@material-ui/core";
import { Outlet } from "react-router-dom";
import Sidebar from "../component/sidebar";
import MuiDrawer from "../component/drawer";

export default function StudentPage() {
    return (
        <Grid container spacing={0} display="flex" width="100%" >
            <Grid item md={2} sm={12} xs={12}>
                <MuiDrawer></MuiDrawer>
                <Sidebar ></Sidebar>
            </Grid>
            <Grid item md={10} sm={12} xs={12}>
                <Outlet></Outlet>
            </Grid>
        </Grid>
    )
}