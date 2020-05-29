import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import {Menu, Add} from '@material-ui/icons';
import { Table, TableRow, TableCell, TableHead, TableBody} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';


const styles ={
    root:{
        flexGrow:1,
    },
    menuButton:{
        marginRight:'auto'
    },
    addButton:{
        marginLeft:'auto'
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
                        <IconButton  color="inherit" >
                            <Menu className={classes.menuButton} onClick={this.handleDrawerToggle} />
                            <Add className={classes.addButton} />
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
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell id="tableHC">グループ名</TableCell>
                                <TableCell id="tableHCL">グループ長</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            
                        </TableBody>
                    </Table>
                </div>
            </Box>
        )
    }
}

export default withStyles(styles)(Display)