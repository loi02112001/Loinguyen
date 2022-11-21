import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles({
    confirm: {
        backgroundColor: "rgb(245,245,245)",
        height: "100vh   "
    },
    confirm__width: {
        width: "85%",
        margin: "0 auto",
        paddingTop: "40px",
    },
    confirm__header: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom:"35px"
    },
    confirm__header__select:{
     width:"15%"   ,
        backgroundColor:"#d9d8da"
    },
    confirm__boxData:{
        marginBottom:"25px"
    },
    confirm__boxData__item:{
         textAlign:"center" ,
         padding:"16px"
    },
    order__box:{
        padding:"16px 16px 30px 16px",
         backgroundColor:"#ffffff",
         borderRadius:"6px"
    },
    order__box__radioButton:{
        marginTop:"10px"
    }
})