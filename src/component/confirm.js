import { Box, Select } from "@material-ui/core"
import { listTitle } from "../mockup"
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useStyles } from "../componetnCss/confirmcss";

export default function Confirm() {
    setInterval(() => {
        var date = new Date()
        var day = date.getDate()
        var year = date.getFullYear()
        var month = date.getMonth() + 1
        var hour = date.getHours()
        if (hour < 10) {
            hour = `0${hour}`
        }
        var minute = date.getMinutes()
        if (minute < 10) {
            minute = `0${minute}`
        }
        var seconds = date.getSeconds()
        if (seconds < 10) {
            seconds = `0${seconds}`
        }
        var timing = `${day}/${month}/${year} ${hour}:${minute}:${seconds}`
        if (document.querySelector('.confirm__header__time')) {
            document.querySelector('.confirm__header__time').innerHTML = timing
        }
    }, 1000);

    const classes = useStyles()
    return (
        <Box className={classes.confirm}>
            <Box className={classes.confirm__width} >
                <Box className={classes.confirm__header} >
                    <Box className="confirm__header__time">
                    </Box>
                    <Select className={classes.confirm__header__select} >
                    </Select>
                </Box>
                <Box className={classes.confirm__boxData}>
                    <Grid container spacing={3}>
                        {listTitle.map((item, key) => {
                            return (
                                <Grid item xs={3} key={item.id} >
                                    <Box className={classes.confirm__boxData__item} bgcolor={item.bgColor}>
                                        <Box fontSize={50}>0</Box>
                                        <Box fontSize={16}>{item.titleName}</Box>
                                    </Box>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Box>
                <Box className="order" >
                    <Grid container spacing={2}>
                        <Grid item md={10} sm={12}>
                            <Box className={classes.order__box}>
                                <Box >Đơn mới</Box>
                                <Box>
                                    <Grid container spacing={3} >
                                        <Grid item xs={6}>
                                            <TextField fullWidth label="Điện thoại *" />
                                            <TextField fullWidth label="Sản phẩm *" />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField fullWidth label="Tên người nhận *" />
                                            <TextField fullWidth label="Giá trị *" />
                                        </Grid>
                                    </Grid>
                                    <TextField fullWidth label="Địa chỉ *" />
                                    <Box className={classes.order__box__radioButton}>
                                        <Grid container spacing={3}>
                                            <Grid item xs={6}>
                                                <FormControl>
                                                    <RadioGroup row
                                                        aria-labelledby="demo-radio-buttons-group-label"
                                                        defaultValue="female"
                                                        name="radio-buttons-group">
                                                        <FormControlLabel className={classes.radioBtn} value="Miền Bắc" control={<Radio />} label="Miền bắc" />
                                                        <FormControlLabel className={classes.radioBtn} value="Miền Nam" control={<Radio />} label="Miền Nam" />
                                                    </RadioGroup>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <FormControl>
                                                    <RadioGroup row
                                                        aria-labelledby="demo-radio-buttons-group-label"
                                                        defaultValue="female"
                                                        name="radio-buttons-group" >
                                                        <FormControlLabel className={classes.radioBtn} value="Nam" control={<Radio />} label="Nam" />
                                                        <FormControlLabel className={classes.radioBtn} value="Nữ" control={<Radio />} label="Nữ" />
                                                    </RadioGroup>
                                                </FormControl>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    <TextField fullWidth label="Ghi chú *" />
                                </Box>
                            </Box >
                        </Grid>
                        <Grid item md={2} sm={12} >
                            <Grid container spacing={1} className={classes.order__btn}>
                                <Grid item sm={3} md={12} xs={3}>
                                    <Button className={classes.btn} ><Box className={classes.btn__customize1}>NHẬN</Box></Button>
                                </Grid>
                                <Grid item sm={3} md={12} xs={3}>
                                    <Button className={classes.btn} ><Box className={classes.btn__customize2} >HUỶ</Box></Button>
                                </Grid>
                                <Grid item sm={3} md={12} xs={3}>
                                    <Button className={classes.btn}><Box className={classes.btn__customize3}>GỌI LẠI</Box></Button>
                                </Grid>
                                <Grid item sm={3} md={12} xs={3}>
                                    <Button className={classes.btn}  ><Box className={classes.btn__customize4}>VỀ SALE</Box></Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}
