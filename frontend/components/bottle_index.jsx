import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchAllBottles } from '../actions/bottle_actions';

const BottleIndex = props => {
    const { bottles, fetchAllBottles } = props;

    useEffect(() => {
        fetchAllBottles();
    },[])

    return (
        <div>
            { bottles.map(bottle => {
                return (
                    <div key={bottle.bottle_id} className="row">
                        <div className="score">
                            {bottle.score}
                        </div>
                        <div className="winery">
                            {bottle.winery_full}
                        </div>
                        <div className='wine'>
                            {bottle.wine_full}
                        </div>
                        <div className='vintage'>
                            {bottle.vintage}
                        </div>
                        <div className='color'>
                            {bottle.color}
                        </div>
                        <div className='region'>
                            {bottle.region}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

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

export default connect(msp, mdp)(BottleIndex)