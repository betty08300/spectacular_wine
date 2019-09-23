import React from 'react';
import { connect } from 'react-redux';

import { fetchAllBottles, fetchNote } from '../actions/bottle_actions';

class BottleIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bottles: [],
            note: ''
        };
        this.handleMouseOver = this.handleMouseOver.bind(this)
    }

    componentDidMount() {
        this.props.fetchAllBottles().then(() => {
            this.setState({bottles: this.props.bottles})
        });
    }

    handleMouseOver(e) {  
            this.props.fetchNote(e.currentTarget.id).then(()=>{
                this.setState({note: this.props.note.note})
            })
    
    }

    render() {
        const {bottles, note} = this.state;

        return (
            <div className="wrapper">
                <div className="header">
                    <div>
                        <div>
                            Logo
                        </div>
                        <div>
                            Title
                        </div>
                    </div>
                    <div>
                        {note}
                    </div>
                </div>
                {bottles.map(bottle => {
                    console.log(bottle.bottle_id)
                    return (
                        <div className='bottle-container' key={bottle.bottle_id} id={bottle.bottle_id} onMouseOver={this.handleMouseOver}>
                            {/* Make the above div relative */}
                            <div className='rank'>
                                {bottle.top100_rank}
                            </div>
                            <div className='score'>
                                {bottle.score}
                            </div>
                            <div className='winery'>
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

}

const msp = (state) => {
    return {
        bottles: state.bottles,
        note: state.note
    }

}

const mdp = (dispatch) => {
    return {
        fetchAllBottles: () => dispatch(fetchAllBottles()),
        fetchNote: id => dispatch(fetchNote(id))
    }
}

export default connect(msp, mdp)(BottleIndex)