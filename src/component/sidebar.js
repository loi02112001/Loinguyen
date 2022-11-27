import { Box } from "@material-ui/core"
import { listMenu } from "../mockup";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from "react-router-dom";
import { useStyles } from "../componetnCss/sidebarcss";
import { useLocation } from "react-router-dom";

export default function SideBarComponent(props) {
    const location = useLocation()
    const classes = useStyles();
    return (
        <Box display={props.list === true ? "flex" : "none"} className={classes.sidebarStyle}>
            <Box >
                <Box className={classes.sidebarAvatar}>
                    <Box className={classes.sidebarAvatar__content}>
                        <Box className={classes.box__img}><Box mt="30px" component="img" borderRadius="6px" width="100%" src="https://1.bp.blogspot.com/--cwALLkjCmE/YGLZYq7VqvI/AAAAAAAArCw/4uWXNg5iBYQsblpvSO2UDHEG5NF4RYWtgCNcBGAsYHQ/s0/2d27fefccf755efa36a6ba7c9c8ff5db.jpeg" /></Box>
                        <Box className={classes.sidebarAvatar__content__name}>Loi</Box>
                        <Box className={classes.sidebarAvatar__content__job}>Professor</Box>
                    </Box>
                </Box>
                <Box className="header__menu" height="65vh" display="flex" flexDirection="column" justifyContent="space-between">
                    <Box>
                        {listMenu.map((item) => {
                            return (
                                <Link key={item.id} className={classes.header__menu__link} to={item.path}>
                                    <Box className={`${classes.listMenu} ${location.pathname === item.path ? classes.listMenuClick : 'none'}`}>{item.menuName}</Box>
                                </Link>
                            )
                        })}
                        <Box className={classes.btn__signout}>
                            <Box className={classes.btn__signout__name}>
                                <ExitToAppIcon className={classes.btn__signout__icon}></ExitToAppIcon>
                                Đăng xuất
                            </Box>
                        </Box>
                    </Box>
                    <Box className={classes.sidebarLiscene}>Copyright 2022 Eledevo Software</Box>
                </Box>
            </Box>
        </Box>
    )
}