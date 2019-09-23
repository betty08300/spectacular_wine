import React, { useState, useEffect } from 'react';
import { fetchAllBottles } from '../actions/bottle_actions';
import { connect } from 'react-redux';


const msp = (state) => {
    return {
        bottles: state.bottles
    }

}

const mdp = (dispatch) => {
    return {
        fetchAllBottles: () => dispatch(fetchAllBottles()),
    }
}

const BottleIndex = props => {
    const { bottles, fetchAllBottles } = props;

    useEffect(() => {
        fetchAllBottles();
    })

    console.log(bottles)

    return (
        <div>
            Hi
        </div>
    )
}

export default connect(msp, mdp)(BottleIndex)