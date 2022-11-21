import { Box } from "@material-ui/core"
import { listMenu } from "../mockup";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from "react-router-dom";
import { useStyles } from "./sidebarcss";

export default function SideBarComponent() {
    const classes = useStyles();
    return (
        <Box className={classes.sidebarStyle}>
            <Box>
                <Box className={classes.sidebarAvatar}>
                    <Box className={classes.sidebarAvatar__content}>
                        <Box width="100%" component="img" src="https://1.bp.blogspot.com/--cwALLkjCmE/YGLZYq7VqvI/AAAAAAAArCw/4uWXNg5iBYQsblpvSO2UDHEG5NF4RYWtgCNcBGAsYHQ/s0/2d27fefccf755efa36a6ba7c9c8ff5db.jpeg"></Box>
                        <Box className={classes.sidebarAvatar__content__name}>Diep</Box>
                        <Box className={classes.sidebarAvatar__content__job}>Executor</Box>
                    </Box>
                </Box>
                <Box className="header__menu">
                    <Box>
                        {listMenu.map((item) => {
                            return (
                                <Link key={item.id} className={classes.header__menu__link} to={item.path}
                                    onClick={() => {
                                        for (let i = 0; i < listMenu.length; i++) {
                                            document.querySelector(`.Menu${listMenu[i].id}`).removeAttribute("style", "background-color: black")
                                        }
                                        document.querySelector(`.Menu${item.id}`).setAttribute("style", "background-color: #fafafa;color:black")
                                    }}><Box className={`Menu${item.id} ${classes.listMenu}`}>{item.menuName}</Box></Link>
                            )
                        })}
                        <Box className={classes.btn__signout}>
                            <Box className={classes.btn__signout__name}>
                                <ExitToAppIcon className={classes.btn__signout__icon}></ExitToAppIcon>
                                Đăng xuất
                            </Box>
                        </Box>
                    </Box>

                </Box>
            </Box>
            <Box className={classes.sidebarLiscene}>Copyright 2022 Eledevo Software</Box>
        </Box>
    )
}
