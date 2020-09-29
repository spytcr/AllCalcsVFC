import React, {Component} from 'react';


class KeyPadComponent extends Component {

    render() {
        return (
            <div className="button">
    
                <button name="CE" className="Button--lvl-secondary" onClick={e => this.props.onClick(e.target.name)}>CE</button>
                <button name="C" className="Button--lvl-secondary" onClick={e => this.props.onClick(e.target.name)}>C</button>
                <button name="(" className="Button--lvl-secondary" onClick={e => this.props.onClick(e.target.name)}>(</button>
                <button name=")" className="Button--lvl-secondary" onClick={e => this.props.onClick(e.target.name)}>)</button><br/>



                <button name="1" className="Button--lvl-outline" onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button name="2" className="Button--lvl-outline" onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button name="3" className="Button--lvl-outline" onClick={e => this.props.onClick(e.target.name)}>3</button>
                <button name="+" className="Button--lvl-secondary" onClick={e => this.props.onClick(e.target.name)}>+</button><br/>


                <button name="4" className="Button--lvl-outline" onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button name="5" className="Button--lvl-outline" onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button name="6" className="Button--lvl-outline" onClick={e => this.props.onClick(e.target.name)}>6</button>
                <button name="-" className="Button--lvl-secondary" onClick={e => this.props.onClick(e.target.name)}>-</button><br/>

                <button name="7" className="Button--lvl-outline" onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button name="8" className="Button--lvl-outline" onClick={e => this.props.onClick(e.target.name)}>8</button>
                <button name="9" className="Button--lvl-outline" onClick={e => this.props.onClick(e.target.name)}>9</button>
                <button name="*" className="Button--lvl-secondary" onClick={e => this.props.onClick(e.target.name)}>x</button><br/>


                <button name="." className="Button--lvl-secondary" onClick={e => this.props.onClick(e.target.name)}>.</button>
                <button name="0" className="Button--lvl-outline" onClick={e => this.props.onClick(e.target.name)}>0</button>
                <button name="=" className="Button--lvl-commerce" onClick={e => this.props.onClick(e.target.name)}>=</button>
                <button name="/" className="Button--lvl-secondary" onClick={e => this.props.onClick(e.target.name)}>÷</button><br/>
            </div>
        );
    }
}


export default KeyPadComponent;
