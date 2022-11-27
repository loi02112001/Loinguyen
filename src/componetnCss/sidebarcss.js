import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    sidebarStyle: {
        height: "100%",
        position: "relative",
        backgroundColor: "#151534",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100vh"
        },
        [theme.breakpoints.up("md")]: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100vh"
        }
    },
    sidebarAvatar: {
        borderBottom: "1px solid #bdbdbd",
        height: "35vh"
    },
    sidebarAvatar__content: {
        width: "85px",
        margin: "0 auto ",
        height: "100%"
    },
    sidebarLiscene: {
        color: "#bdbdbd",
        fontSize: "10px",
        textAlign: "center",
        paddingBottom: "10px",

    },
    header__menu__link: {
        textDecoration: "none",
    },
    sidebarAvatar__content__name: {
        marginTop: "10px",
        color: "white",
        fontSize: "15px",
        textAlign: "center"
    },
    sidebarAvatar__content__job: {
        fontSize: "15px",
        color: "white",
        marginBottom: "24px",
        textAlign: "center",
        fontWeight: "fontWeightBold"
    },
    btn__signout: {
        padding: "10px 0 14px 13px ",
        display: "flex",
        color: "#fafafa",
        fontSize: "14px"
    },
    btn__signout__icon: {
        fontSize: "16px",
        marginLeft: "3px"
    },
    btn__signout__name: {
        fontSize: "13px"
    },
    listMenu: {
        fontSize: "13px",
        color: "white",
        padding: "10px 0 10px 17px"
    },
    listMenuClick: {
        backgroundColor: "white",
        color: "black"
    },
    box__img: {
        width: "85px",
        margin: "0 auto",
        height: "65%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end"

    },
    header__menu: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    }
}))