import React from 'react';
import { connect } from 'react-redux';
import Header from './header'

import { fetchAllBottles, fetchNote } from '../actions/bottle_actions';

class BottleIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bottles: [],
            note: "To see a taster's notes, please hover over a wine.",
            noteDefault: true,
            filterText: ''
        };
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllBottles().then(() => {
            this.setState({ bottles: this.props.bottles })
        });
    }

    handleMouseOver(e) {
        if (this.state.noteDefault) this.setState({ noteDefault: false })
        this.props.fetchNote(e.currentTarget.id).then(() => {
            this.setState({ note: this.props.note.note })
        })
    }

    handleChange(e) {
        this.setState({ filterText: e.target.value });
    }

    caseInsensitiveIncludes(str1, str2) {
        return str1.toString().toLowerCase().includes(str2.toLowerCase());
    }

    getUniqueValues(field) {
        const values = this.state.bottles.map((bottle) => bottle[field])
        const uniqueValues = new Set(values);
        console.log(uniqueValues);
        return Array.from(uniqueValues);
    }

    render() {
        const { bottles, note } = this.state;

        const filterFields = [
            "color",
            "winery_full",
            "wine_full",
            "vintage",
            "region",
            "score"
        ];

        const selectBottles = bottles.filter((bottle) => {
            return filterFields.some((field) => this.caseInsensitiveIncludes(bottle[field], this.state.filterText))
        });

        const noteCss = this.state.noteDefault ? 'noteDefault' : 'note'

        return (
            <div className="wrapper">
                <div className='header-container'>
                    <Header />

                    <input type='text' value={this.state.filterText} onChange={this.handleChange} />

                    <div className={noteCss}>
                        {note}
                    </div>
                    <div className='title'>
                        <div className='rank'>Rank</div>
                        <div className='score'>Score</div>
                        <div className='color'>Type
                            <select onChange={(e) => this.setState({ filterText: e.target.value })}>
                                {
                                    this.getUniqueValues("color").map((value, key) => <option value={value} key={key}>{value}</option>)
                                }
                            </select>
                        </div>

                        <div className='winery'>Winery
                            <select onChange={(e) => this.setState({ filterText: e.target.value })}>
                                {
                                    this.getUniqueValues("winery_full").map((value, key) => <option value={value} key={key}>{value}</option>)
                                }
                            </select>
                        </div>
                        <div className='wine'>Wine
                            <select onChange={(e) => this.setState({ filterText: e.target.value })}>
                                {
                                    this.getUniqueValues("wine_full").map((value, key) => <option value={value} key={key}>{value}</option>)
                                }
                            </select>
                        </div>
                        <div className='vintage'>Vintage
                            <select onChange={(e) => this.setState({ filterText: e.target.value })}>
                                {
                                    this.getUniqueValues("vintage").map((value, key) => <option value={value} key={key}>{value}</option>)
                                }
                            </select>
                        </div>
                        <div className='region'>Region
                            <select onChange={(e) => this.setState({ filterText: e.target.value })}>
                                {
                                    this.getUniqueValues("region").map((value, key) => <option value={value} key={key}>{value}</option>)
                                }
                            </select>
                        </div>
                    </div>
                </div>
                <div>
                    {selectBottles.map(bottle => {
                        return (
                            <div className='bottle-container' key={bottle.bottle_id} id={bottle.bottle_id} onMouseOver={this.handleMouseOver}>

                                <div className='rank'>
                                    {bottle.top100_rank}
                                </div>
                                <div className='score'>
                                    {bottle.score}
                                </div>
                                <div className='color'>
                                    {bottle.color === 'Red' &&
                                        <img src={redWine} />
                                    }
                                    {bottle.color === 'White' &&
                                        <img src={whiteWine} />
                                    }
                                    {bottle.color === 'Dessert' &&
                                        <img src={dessert} />
                                    }
                                    {bottle.color === 'Sparkling' &&
                                        <img src={sparkling} />
                                    }

                                    {bottle.color === 'Blush' &&
                                        <img src={blush} />
                                    }
                                    <div className='color-text'>
                                        {bottle.color}
                                    </div>
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
                                <div className='region'>
                                    {bottle.region}
                                </div>

                            </div>
                        )
                    })}
                </div>
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