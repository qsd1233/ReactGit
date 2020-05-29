import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Menulcon from '@material-ui/icons/Menu';
import { Table, TableRow, TableCell, TableHead, TableBody} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

const styles ={
    root:{
        flexGrow:1,
    },
    menuButton:{
        marginRight:'auto'
    },
    link:{
        textDecoration:'none',
        color:'black'
    },
    container:{
        display: 'flex',
        flexWrap: 'wrap'
    },
    textField:{
        width:200
    }
};
const dateNow = new Date();
const year = dateNow.getFullYear();
const monthWithOffset = dateNow.getUTCMonth()+1;
const month = monthWithOffset.toString().length < 2 ? `0${monthWithOffset}` : monthWithOffset;
const date = dateNow.getUTCDate().toString().length < 2 ? `0${dateNow.getUTCDate()}` : dateNow.getUTCDate();
const dateInput = `${year}-${month}-${date}`;


class Display extends Component {
    constructor(props){
        super(props);
        this.state ={
            toggle:false
        };
    }
    handleDrawerToggle = () => this.setState({toggle:!this.state.toggle})
    render(){
        const { classes } = this.props;
        return (
            <Box>
                <div className={classes.root}>
                    <AppBar position="static">
                        <IconButton className={classes.menuButton} color="inherit" onClick={this.handleDrawerToggle}>
                            <Menulcon />
                        </IconButton>
                    </AppBar>
                    <Drawer open={this.state.toggle}>
                        <MenuItem onClick={this.handleDrawerToggle}>閉じる</MenuItem>
                        <MenuItem><Link to="success" className={classes.link}>MyList</Link></MenuItem>
                        <MenuItem><Link to="group" className={classes.link}>グループリスト</Link></MenuItem>
                        <MenuItem><Link to="team" className={classes.link}>チームリスト</Link></MenuItem>
                        <MenuItem><Link to="/" className={classes.link}>LogOut</Link></MenuItem>
                    </Drawer>
                </div>
                <div>
                    <form className={classes.container} noValidate>
                        <TextField
                            id="date"
                            label="day"
                            type="date"
                            defaultValue={dateInput}
                            className={classes.textField}
                            InputLabelProps={{
                                shrink:true,
                            }}
                        />
                    </form>
                </div>
                <div>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell id="tableHC">勤務日付</TableCell>
                                <TableCell id="tableHC">出勤時間</TableCell>
                                <TableCell id="tableHC">出勤場所</TableCell>
                                <TableCell id="tableHC">退社時間</TableCell>
                                <TableCell id="tableHC">退社場所</TableCell>
                                <TableCell id="tableHCL">勤務状態</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>1</TableCell>
                                <TableCell>2</TableCell>
                                <TableCell><Link to='maps'>map</Link></TableCell>
                                <TableCell>4</TableCell>
                                <TableCell>5</TableCell>
                                <TableCell>6</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </Box>
        )
    }
}

export default withStyles(styles)(Display)