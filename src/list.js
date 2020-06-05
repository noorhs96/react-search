import React, { Component } from 'react'
import countries from './Countries';
export default class list extends Component {
    constructor(props) {
        super(props)
        this.state = {
            suggestions: [],
            text: ''
        }
    }
    Ontextchange = (e) => {
        const value = e.target.value;
        let suggestions = [];
        if (value.length > 0) {
            const reg = new RegExp(`^${value}`, 'i');
            suggestions = countries.sort().filter(v => reg.test(v));
        }
        this.setState(() => ({
            suggestions,
            text: value
        }))
    }
    Selectedtext = (itm) => {
        this.setState(() => ({
            text: itm,
            suggestions: [],
        }))
    }
    render() {
     
        let { suggestions } = this.state;
        return (
            <div>
                <h2>Search for a country </h2>
                <input id="inpt" value={this.state.text} onChange={this.Ontextchange}></input>
                <ul>
                    {
                        suggestions.map((suggestions, text) => (
                            <li key={text} onClick={() => this.Selectedtext(suggestions)}>
                                {suggestions}
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
