
import MenuIcon from '@mui/icons-material/Menu'
import { Drawer, Box, IconButton } from "@mui/material";
import { useState } from "react";
import SideBarComponent from './sidebar';
import { useStyle } from './drawerCss';
import { listTitle } from '../mockup';
import Grid from '@material-ui/core/Grid'

import { useLocation } from 'react-router-dom';


export default function MuiDrawer() {
    const location = useLocation()
    console.log(location.pathname,'day la location')
    const classes = useStyle();
    const [isOpen, setIsOpen] = useState(false)
    return (
        <Box className={classes.drawer} >
            <Grid container spacing={0}>
                <Grid item xs={2} sm={3}>
                    <IconButton size="large" edge="start" color='inherit' aria-label='logo'
                        onClick={() => setIsOpen(true)}>
                        <MenuIcon></MenuIcon>
                    </IconButton>
                    <Drawer sx={{
                        "& .MuiPaper-root": {
                            width: "40%"
                        }
                    }}
                        anchor="left" open={isOpen} onClose={() =>
                            setIsOpen(false)
                        }>
                        <SideBarComponent list={isOpen} />
                    </Drawer>
                </Grid>
                <Grid item xs={10} sm={9} className={classes.confirm__boxData} >
                    <Grid container spacing={0} >
                        {listTitle.map((item, key) => {
                            return (
                                <Grid item xs={3} sm={3} key={item.id} >
                                    {/* <Box  display={location.pathname=="/confirm" ? 'block' : 'none'} className={classes.confirm__boxData__item} bgcolor={item.bgColor}> */}
                                    <Box className={location.pathname==='/confirm'?classes.mobile:classes.laptop} bgcolor={item.bgColor}>
                                        <Box fontSize={30}>0</Box>
                                        <Box fontSize={13}>{item.titleName}</Box>
                                    </Box>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Grid>

            </Grid>
        </Box >
    )
}

