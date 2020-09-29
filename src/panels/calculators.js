import React, { useState, useEffect } from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import {Input, Button, Div} from '@vkontakte/vkui';
import './css/main.css'
import algebra from 'algebra.js'

class Ur extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
            result: ' '
        }
        this.urInput = null;

      }
      handleChange = event => {
        this.urInput = event.target.value;

      }
      
      calc = () =>{  
        try{var eq = algebra.parse(this.urInput);
        var ans = eq.solveFor("x");
        console.log(ans.toString());
        this.setState({result: "x = " + ans.toString()})
        }
        catch (TypeError){
            this.setState({result: "Ошибка! Введено неверное уравнение."})
        }
      }
    
    render(){
        return(
            <div className="CalcDiv">
                <Input type="text" placeholder='Введите уравнение с неизвестным "x"' onChange={this.handleChange}/>
                <Button onClick={this.calc} className="CalcBtn" mode="commerce">Вычислить</Button>
                <h1 className="CalcsRes">{this.state.result}</h1>
            </div>
        );
    }  
}
export default Ur;