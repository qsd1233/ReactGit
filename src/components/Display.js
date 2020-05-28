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
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

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
    }
};


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
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        
                    </MuiPickersUtilsProvider>
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