import React from 'react'

class SelectedResultHeader extends React.Component {

    render() {
        if (!this.props.selectedResultSummary) return <div></div>;
        return (
            <div>
                <strong>{this.props.selectedResultSummary.title}</strong>
            </div>
        )
    }
}

export default SelectedResultHeader