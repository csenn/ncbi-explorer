import React from 'react'

class Author extends React.Component {
    render() {
        return (
            <span style={{color:'#008CBA'}}>{this.props.author.forename} {this.props.author.lastname}</span>
        );
    }
}

export default Author;