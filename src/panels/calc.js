import React from 'react';

import './css/calc.css'
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from "./components/KeyPadComponent";


class Calculator extends React.Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    onClick = Button => {

        if(Button === "="){
            this.calculate()
        }

        else if(Button === "C"){
            this.reset()
        }
        else if(Button === "CE"){
            this.backspace()
        }

        else {
            this.setState({
                result: this.state.result + Button
            })
        }
    };


    calculate = () => {
        var checkResult = ''
        if(this.state.result.includes('--')){
            checkResult = this.state.result.replace('--','+')
        }

        else {
            checkResult = this.state.result
        }

        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(checkResult) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "Ошибка"
            })

        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
            <div>
                <div className="calculator-body">
                    <ResultComponent result={this.state.result}/>
                    <KeyPadComponent onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default Calculator;