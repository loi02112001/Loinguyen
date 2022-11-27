import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
    confirm: {
        backgroundColor: "rgb(245,245,245)",
        height: "100vh"
    },
    confirm__width: {
        width: "90%",
        margin: "0 auto",
        paddingTop: "40px",
        [theme.breakpoints.down("sm")]: {
            padding: "0"
        },
        [theme.breakpoints.down("xs")]: {
            width: "95%"
        }
    },
    confirm__header: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "35px",
        [theme.breakpoints.down("xs")]: {
            paddingTop: "30px"
        }
    },
    confirm__header__select: {
        width: "15%",
        backgroundColor: "#d9d8da",
        [theme.breakpoints.down("xs")]: {
            width: "30%"
        }
    },
    confirm__boxData: {
        marginBottom: "25px",
        [theme.breakpoints.down("xs")]: {
            display: "none"
        }
    },
    confirm__boxData__item: {
        textAlign: "center",
        padding: "16px 0",
        borderRadius: "5px"
    },
    order__box: {
        padding: "16px 16px 30px 16px",
        backgroundColor: "#ffffff",
        borderRadius: "6px"
    },
    order__box__radioButton: {
        marginTop: "10px"
    },
    order__btn: {
        [theme.breakpoints.down("sm")]: {
            position: "fixed",
            bottom: "0",
            left: "0",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "space-around ",
            padding: "15px 0"
        }
    },
    radioBtn: {
        [theme.breakpoints.down("sm")]: {
            width: "100%"
        }
    },
    btn: {
        width: "100%",
    },
    btn__customize1: {
        width: "100%",
        backgroundColor: "green",
        color: "white",
        borderRadius: "4px",
        padding: "4px 0",
        maxWidth: "200px"
    },
    btn__customize2: {
        width: "100%",
        backgroundColor: "orange",
        color: "white",
        borderRadius: "4px",
        padding: "4px 0",
        maxWidth: "200px"

    },
    btn__customize3: {
        width: "100%",
        backgroundColor: "red",
        color: "white",
        borderRadius: "4px",
        padding: "4px 0",
        maxWidth: "200px"

    },
    btn__customize4: {
        width: "100%",
        backgroundColor: "#00897b",
        color: "white",
        borderRadius: "4px",
        padding: "4px 0",
        maxWidth: "200px"
    },

}))