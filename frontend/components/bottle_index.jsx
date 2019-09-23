import React from 'react';
import { connect } from 'react-redux';

import { fetchAllBottles } from '../actions/bottle_actions';

class BottleIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = [];
    }

    componentDidMount() {
        this.props.fetchAllBottles().then(() => {
            this.setState(this.props.bottles)
        });
    }

    render() {
        return (
            <div>
                {this.props.bottles.map(bottle => {
                    console.log(bottle)
                    return (
                        <div key={bottle.bottle_id} id={bottle.bottle_id}>
                            <div>
                                {bottle.top100_rank}
                            </div>
                            <div>
                                {bottle.score}
                            </div>
                            <div>
                                {bottle.winery_full}
                            </div>
                            <div>
                                {bottle.wine_full}
                            </div>
                            <div>
                                {bottle.vintage}
                            </div>
                            <div>
                                {bottle.color}
                            </div>
                            <div>
                                {bottle.region}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }

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