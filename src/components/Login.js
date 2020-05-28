import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import { Input, Box, Typography } from '@material-ui/core';

const styles = {
    root:{
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius:3,
        width:300
       
    },
    input:{
        width:300
    }
}

class Login extends Component {
    state = {id:'',pw:''}
    handleClick(){
        this.props.onClick(this.state.id,this.state.pw)
    }
    render(){
        const {classes} = this.props;
        let to = "";
        if(this.state.id === 'qsd1233' && this.state.pw === '1234'){
            to="/success"
        }else {
            to="/"
        }
        return (
            <Box>
                <div id="loginInput">
                    <Typography>
                        Email
                    </Typography>
                    <Input type="text" value={this.state.id} placeholder="xxx@xxx.xxx" className={classes.input}
                        onChange={function(e){this.setState({id:e.target.value})}.bind(this)} />
                    {/* <input type="text" value={this.state.id} 
                        onChange={function(e){this.setState({id:e.target.value})}.bind(this)} /> */}
                </div>
                <div id="loginInput">
                    <Typography>
                        Password
                    </Typography>
                    <Input type="password" value={this.state.pw} placeholder="・・・・・・" className={classes.input}
                        onChange={function(e){this.setState({pw:e.target.value})}.bind(this)} />
                </div>
                <div id="loginInput">
                    <Link to={to} style={{ textDecoration: 'none'}}>
                        <Input type="button" value="Login" onClick={this.handleClick.bind(this)} className={classes.root} />
                        {/* <input type="button" value="Login" onClick={this.handleClick.bind(this)} className={classes.root} /> */}
                    </Link>
                </div>
            </Box>
        )

    }
}

export default withStyles(styles)(Login)
