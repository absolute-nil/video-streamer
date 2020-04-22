import React, {Component} from 'react'

class SearchBar extends Component{

    state = {
        term: ''
    }

    onInputChange = (event) =>{
        this.setState({term:event.target.value})
    }

    onFormSubmit = (event) =>{
        event.preventDefault();
        this.props.onTermSubmit(this.state.term);
    }

    render(){
        return (
            <div className="ui segment" style={{marginTop:'10px'}}>
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Search Video</label>
                        <input value={this.state.term} type="text" onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>
        )
    }

}

export default SearchBar
