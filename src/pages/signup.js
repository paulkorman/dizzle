/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import withRoot from '../components/withRoot';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';

import MyLinkStyled from '../components/MyLink';
import HeaderLineStyled from '../components/HeaderLineStyled';

import Background from '../img/bg-women.png';
import facebookIco from '../img/facebook.svg';
import twitterIco from '../img/twitter.svg';


const bodyW = 414;
let windowH = window.innerHeight;
let windowW = window.innerWidth;
let k = windowH / bodyW;


const styles = theme =>  ({
  root: {
    minHeight: 'inherit'
  },
  wrapper: {
    width: document.body.offsetWidth,
    maxWidth: 414,
    minHeight: '100%',
    height: '100%',
  },
  wrap: {
    backgroundColor: '#887650',
    backgroundImage: 'url(' + Background + ')',
    backgroundPosition: '50% 0',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minHeight: '100vh'

  },
  wrapcontent: {
    minHeight: 'inherit',
    padding: '105px 32px 32px'
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 11,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#fff',
    marginBottom: 48,
    textAlign: 'center'
  },
  textFieldRoot: {
    padding: 0,
    'label + &': {
      marginTop: theme.spacing.unit * 6,
    },
  },
  textFieldInput: {
    borderRadius: 4,
    background: theme.palette.common.white,
    border: '1px solid #fff',
    fontSize: 12,
    padding: '15px 16px',
    marginBottom: theme.spacing.unit * 2,
    textAlign: 'center',
    color: '#887650',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  button: {
    width: '100%',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#fff',
    padding: '16px 20px',
    borderRadius: 4,
    backgroundColor: '#887650',
    fontSize: 12,
    marginBottom: 20,
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: 'rgba(136,118,80,0.8)',
    },
    '&:active': {
      boxShadow: 'none',
    }
  },
  link: {
    fontSize: 11,
    color: '#fff',
  },
  btnfacebook: {
    color: '#fff',
    backgroundColor: '#3b5998',
    width: '100%',
    borderRadius: 4,
    height: 47,
    fontSize: 11,
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: 'rgba(59,89,152,0.8)',
    },
  },
  btntwitter: {
    color: '#fff',
    backgroundColor: '#598dca',
    width: '100%',
    borderRadius: 4,
    height: 47,
    fontSize: 11,
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: 'rgba(89,141,202,0.8)',
    },
  },
  griditem: {
    padding: '5px 10px',
  },
  facebookico: {
    display: 'inline-block',
    width: 22,
    height: 20,
    background: 'url(' + facebookIco + ')',
  },
  twitter: {
    display: 'inline-block',
    width: 28,
    height: 22,
    background: 'url(' + twitterIco + ')',
  },
  hordivid: {
    color: '#fff',
    fontSize: 11,
    marginBottom: 30,
    '&:before': {
      backgroundColor: '#d9d8d6',
    },
    '&:after': {
      backgroundColor: '#d9d8d6',
    }
  }
});

class Signup extends Component {
  state = {
    open: false,
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };



  render() {

    return (
      <div className={this.props.classes.root}>
        <div className={this.props.classes.wrapper}>
          <div className={this.props.classes.wrap}>

            <div className={this.props.classes.wrapcontent}>
              <div className={this.props.classes.title}>DRIZZLE</div>
              <div className={this.props.classes.subtitle}>Buy gift card with friends and saving</div>
              <TextField
                  placeholder="Your Name"
                  fullWidth={true}
                  InputProps={{
                disableUnderline: true,
                classes: {
                  root: this.props.classes.textFieldRoot,
                  input: this.props.classes.textFieldInput,
                },
              }}
              />
              <TextField
                  placeholder="Your Email"
                  fullWidth={true}
                  InputProps={{
                disableUnderline: true,
                classes: {
                  root: this.props.classes.textFieldRoot,
                  input: this.props.classes.textFieldInput,
                },
              }}
              />
              <TextField
                  type="password"
                  placeholder="Password"
                  fullWidth={true}
                  InputProps={{
                disableUnderline: true,
                classes: {
                  root: this.props.classes.textFieldRoot,
                  input: this.props.classes.textFieldInput,
                },
              }}
              />
              <Button raised className={this.props.classes.button} href="#groupbuylist">Sign up</Button>
              <Grid container style={{fontSize: 11, marginBottom: 45, textAlign: 'center'}}>
                <Grid item xs={12} >
                  <MyLinkStyled href="#login" className={this.props.classes.link}>Already have an account? Log In!</MyLinkStyled>
                </Grid>
              </Grid>
              <HeaderLineStyled className={this.props.classes.hordivid} >or Login with</HeaderLineStyled>
              <Grid container spacing={0} style={{fontSize: 11}}>
                <Grid item xs={12} sm={6} className={this.props.classes.griditem}>
                  <Button className={this.props.classes.btnfacebook}><span className={this.props.classes.facebookico}></span>facebook</Button>
                </Grid>
                <Grid item xs={12} sm={6} className={this.props.classes.griditem}>
                  <Button className={this.props.classes.btntwitter}><span className={this.props.classes.twitter}></span>twitter</Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Signup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Signup));
