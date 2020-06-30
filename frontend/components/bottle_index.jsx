import React from 'react';
import { connect } from 'react-redux';
import Header from './header';
import Dropdown from './dropdown'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { fetchAllBottles, fetchNote } from '../actions/bottle_actions';

class BottleIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bottles: [],
            filterText: '',
            isColorActive: false,
            isRegionActive: false,
            isVintageActive: false,
            isWineActive: false,
            isWineryActive: false,
            note: "To see a taster's notes, please hover over a wine.",
            noteDefault: true,
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
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

    handleClick(e) {
        this.setState({ filterText: e.target.innerText });
    }

    handleToggle(field) {
        this.setState({ [field]: !this.state[field] })
    }

    caseInsensitiveIncludes(str1, str2) {
        return str1.toString().toLowerCase().includes(str2.toLowerCase());
    }

    getUniqueValues(field) {
        const values = this.state.bottles.map((bottle) => bottle[field])
        const uniqueValues = new Set(values);
        return Array.from(uniqueValues).sort((a, b) => a - b);
    }

    render() {
        const { bottles, isColorActive, isRegionActive, isVintageActive, isWineActive, isWineryActive, note } = this.state;

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
                    <div className='search-bar'>
                        <div className='search-bar-container'>
                            <input type='text' placeholder="Search" value={this.state.filterText} onChange={this.handleChange} />
                            <div className='search-icon'>
                                <FontAwesomeIcon icon={faSearch} />
                            </div>
                        </div>
                    </div>

                    <div className={noteCss}>
                        {note}
                    </div>
                    <div className='title'>
                        <div className='rank'>Rank</div>
                        <div className='score'>Score</div>
                        <div className='colorTitle' onClick={() => this.handleToggle('isColorActive')} > Type
                            <FontAwesomeIcon icon={isColorActive ? faCaretUp : faCaretDown} style={{ marginLeft: '4px' }} />
                            <Dropdown data={this.getUniqueValues('color')} field={'isColorActive'} isActive={isColorActive} handleClick={this.handleClick} handleToggle={this.handleToggle} />
                            {/* <select onChange={(e) => this.setState({ filterText: e.target.value })}>
                                {
                                    this.getUniqueValues("color").map((value, key) => <option value={value} key={key}>{value}</option>)
                                }
                            </select> */}
                        </div>

                        <div className='wineryTitle' onClick={() => this.handleToggle('isWineryActive')}> Winery
                            <FontAwesomeIcon icon={isWineryActive ? faCaretUp : faCaretDown} style={{ marginLeft: '4px' }} />
                            <Dropdown data={this.getUniqueValues('winery_full')} field={'isWineryActive'} isActive={isWineryActive} handleClick={this.handleClick} handleToggle={this.handleToggle} />
                            {/* <select onChange={(e) => this.setState({ filterText: e.target.value })}>
                                {
                                    this.getUniqueValues("winery_full").map((value, key) => <option value={value} key={key}>{value}</option>)
                                }
                            </select> */}
                        </div>
                        <div className='wineTitle' onClick={() => this.handleToggle('isWineActive')}> Wine
                            <FontAwesomeIcon icon={isWineActive ? faCaretUp : faCaretDown} style={{ marginLeft: '4px' }} />
                            <Dropdown data={this.getUniqueValues('wine_full')} field={'isWineActive'} isActive={isWineActive} handleClick={this.handleClick} handleToggle={this.handleToggle} />
                            {/* <select onChange={(e) => this.setState({ filterText: e.target.value })}>
                                {
                                    this.getUniqueValues("wine_full").map((value, key) => <option value={value} key={key}>{value}</option>)
                                }
                            </select> */}
                        </div>
                        <div className='vintageTitle' onClick={() => this.handleToggle('isVintageActive')}> Vintage
                            <FontAwesomeIcon icon={isVintageActive ? faCaretUp : faCaretDown} style={{ marginLeft: '4px' }} />
                            <Dropdown data={this.getUniqueValues('vintage')} field={'isVintageActive'} isActive={isVintageActive} handleClick={this.handleClick} handleToggle={this.handleToggle} />
                            {/* <select onChange={(e) => this.setState({ filterText: e.target.value })}>
                                {
                                    this.getUniqueValues("vintage").map((value, key) => <option value={value} key={key}>{value}</option>)
                                }
                            </select> */}
                        </div>
                        <div className='regionTitle' onClick={() => this.handleToggle('isRegionActive')}> Region
                            <FontAwesomeIcon icon={isRegionActive ? faCaretUp : faCaretDown} style={{ marginLeft: '4px' }} />
                            <Dropdown data={this.getUniqueValues('region')} field={'isRegionActive'} isActive={isRegionActive} handleClick={this.handleClick} handleToggle={this.handleToggle} />
                            {/* <select onChange={(e) => this.setState({ filterText: e.target.value })}>
                                {
                                    this.getUniqueValues("region").map((value, key) => <option value={value} key={key}>{value}</option>)
                                }
                            </select> */}
                        </div>
                    </div>
                </div>
                <div className="bottle-wrapper">
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
            </div >
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