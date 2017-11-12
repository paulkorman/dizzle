/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import withRoot from '../components/withRoot';
import MyAppBar from '../components/MyAppBar';

import MyCard from '../components/MyCard'

import Avatar1 from '../img/avatar-1.jpg';



let width=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);

const styles = theme =>  ({
    root: {
        minHeight: 'inherit',
        paddingTop: 55,
        paddingBottom: 44,
        height: (width>320)?'auto':'100%'
    },

});

class GroupBuyList extends Component {
    state = {
        open: false,
    };

    render() {

        return (
            <div className={this.props.classes.root}>
                <MyAppBar title="My Group Buy" />
                <MyCard
                    name="Starbucks"
                    avatar={Avatar1}
                    status="ongoing"
                    giftcard="$100"
                    sell="$80"
                    groupbuyowner="jacky"
                    href="#ingroupbuysuccessful"
                />
                <MyCard
                    name="Starbucks"
                    avatar={Avatar1}
                    status="bought"
                    giftcard="$100"
                    sell="$30"
                    groupbuyowner="yourself"
                    href="#ingroupbuy"
                />
                <MyCard
                    name="Starbucks"
                    avatar={Avatar1}
                    status="expired"
                    giftcard="$100"
                    sell="$30"
                    groupbuyowner="Mike"
                    href="#starbucks"
                />
            </div>
        );
    }
}

GroupBuyList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(GroupBuyList));
