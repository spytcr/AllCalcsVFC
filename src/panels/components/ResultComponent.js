import React, {Component} from 'react';

class ResultComponent extends Component {


    render() {
        let {result} = this.props;
        return (
            <input readOnly={true} value={result} className="result"/>
                
    )
        ;
    }
}


export default ResultComponent;

