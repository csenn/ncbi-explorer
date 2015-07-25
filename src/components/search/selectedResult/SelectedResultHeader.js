import React from 'react'

class SelectedResultHeader extends React.Component {

    render() {
        if (!this.props.selectedResultSummary) return <div></div>;
        return (
            <div  style={{fontSize:'22px', fontWeight:'200'}}>
                {this.props.selectedResultSummary.title}
            </div>
        )
    }
}

export default SelectedResultHeader