import { makeStyles } from "@material-ui/core/styles";
export const useStyle = makeStyles((theme) => ({

    drawer: {
        backgroundColor: "rgb(245,245,245)",
        display: "none",
        [theme.breakpoints.down("sm")]: {
            display: "block",
        },
        [theme.breakpoints.down('xs')]: {
            display: 'flex',
            justifyContent: "space-between"
        }
    },
    // confirm__boxData__item:{
    //     textAlign: "center",
    //     color:"white",
    //     paddingBottom:"10px",
    //     display:"none",

    //     [theme.breakpoints.down('xs')]:{
    //         display:'block',
    //     }

    // },
    // confirm__boxData__click:{
    //     display:'block'
    // }
    mobile: {
        display:"none",
        [theme.breakpoints.down('xs')]: {
            display: 'block',
            textAlign: "center",
            color: "white",
            paddingBottom: "10px",
        }
    },
    laptop:{
        display:"none"
    }
}))


