import { Box } from "@material-ui/core"
import { grey } from "@material-ui/core/colors"
import { listMenu } from "../mockup";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
    sidebarStyle: {
        height: "100vh",
        width: "20%",
        position: "relative",
        backgroundColor: "#151534",
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between"
    },
    sidebarAvatar: {
        borderBottom: "1px solid white",
        // boxSizing:"unset",
        padding:"30px 0"
    },
    sidebarAvatar__img:{
        width:"40%",
        margin: "0 auto "
    },
    sidebarLiscene: {
        color: "white",
        fontSize: "10px",
        textAlign:"center"
       
    },
    btn__signout: {
        padding: "13px 0 14px 13px ",
        display: "flex",
        color: "#fafafa",
        fontSize: "14px"
    }
})
export default function SideBarComponent() {
    const classes = useStyles();
    const menuColor = grey[50]

    return (
        <Box className={classes.sidebarStyle}  /*sx={{ display: { xs: 'none', sm: 'block' } }}*/     >
            <Box>
                <Box className={classes.sidebarAvatar}>
                    <Box className={classes.sidebarAvatar__img}>
                        <Box width="100%" component="img" src="https://1.bp.blogspot.com/--cwALLkjCmE/YGLZYq7VqvI/AAAAAAAArCw/4uWXNg5iBYQsblpvSO2UDHEG5NF4RYWtgCNcBGAsYHQ/s0/2d27fefccf755efa36a6ba7c9c8ff5db.jpeg"></Box>
                        <Box mt={1} color={menuColor} fontSize={16} textAlign="center">Diep</Box>
                        <Box mb={3} color={menuColor} fontWeight="fontWeightBold" textAlign="center">Executor</Box>
                    </Box>
                </Box>

                <Box className="header__menu">
                    <Box>
                        {listMenu.map((item, key) => {
                            return (
                                <Link key={item.id} style={{ textDecoration: 'none' }} to={item.path}
                                    onClick={() => {
                                        for (let i = 0; i < listMenu.length; i++) {
                                            document.querySelector(`.Menu${listMenu[i].id}`).removeAttribute("style", "background-color: black")
                                        }
                                        document.querySelector(`.Menu${item.id}`).setAttribute("style", "background-color: #fafafa;color:black")
                                    }}><Box className={`Menu${item.id}`} pl={3} py={2.5   } fontSize={14} color={menuColor}>{item.menuName}</Box></Link>
                            )
                        })}

                        <Box className={classes.btn__signout}>
                            <ExitToAppIcon fontSize="small"></ExitToAppIcon>
                            <Box fontSize={14}>Đăng xuất</Box>
                        </Box>
                    </Box>

                </Box>
            </Box>
            <Box className={classes.sidebarLiscene}>Copyright 2022 Eledevo Software</Box>

        </Box>

    )
}
