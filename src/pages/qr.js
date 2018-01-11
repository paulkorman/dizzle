import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import withRoot from '../components/withRoot';
import MyAppBar from '../components/MyAppBar';
import Card, { CardContent } from 'material-ui/Card';
import QR from '../img/qr.png';


let width=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);

const styles = theme => ({
    root: {
        minHeight: 'inherit',
        padding: '55px 0 44px',
        minHeight: scrollHeight,
        '&>div:last-child div': {
            marginBottom: 0
        }
    },
    card: {
        borderRadius: 6,
        boxShadow: 'none',
        backgroundColor: '#877650',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 45,
        position: 'relative',
        textAlign: 'center',
        paddingTop: 135,
        paddingBottom: 135,
    },

    cardcontent: {
        padding: '0 18px 10px'
    },
    qrwrap: {
        textAlign: 'center',
        paddingBottom: 5,
    },
    qrcode: {
        '& img': {
            display: 'inline-block',
            border: '16px solid #fff',
            borderRadius: 8
        }
    },
    text: {
        fontSize: 11,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#fff',
    },
    number: {
        fontSize: 11,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#fff',
        letterSpacing: 1.5,
        marginTop: -5,
        opacity: 0.3
    }

});

class QRqode extends Component {
    state = {
        open: false,
    };

    render() {

        return (
            <div className={this.props.classes.root}>
                <MyAppBar
                    title="Edit profile"
                />
                <Card className={this.props.classes.card}>
                    <CardContent className={this.props.classes.cardcontent}>
                        <div className={this.props.classes.qrwrap}>
                            <div className={this.props.classes.qrcode}><img src={QR} alt=""/></div>
                        </div>
                        <p className={classNames(this.props.classes.text)} style={{marginBottom: 25}}>Your redeem QR code</p>
                        <p className={classNames(this.props.classes.text)}>Your member ID</p>
                        <p className={classNames(this.props.classes.number)}>#3552222511112</p>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

QRqode.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(QRqode));

