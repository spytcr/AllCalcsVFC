import React, { useState, useEffect } from 'react';

import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import '@vkontakte/vkui/dist/vkui.css';

import { Panel, PanelHeader, PanelHeaderClose, Group,  Button, Header, Root} from '@vkontakte/vkui';

import './css/main.css'
import App from '../App';
import Ur from './calculators'

class Main extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          activePanel: App.Calc,
          activeView: this.props.View
        }
      }

    render () { 
        const {SetBar} = this.props;
        return (
            <Root activeView={this.state.activeView}>
                <View id="main" header = {false}>
                        <Group header={<Header mode="secondary">Математика</Header>}>
                            <div className = "BtnList">
                                <Button onClick={App.Calc='calc1', SetBar} size="xl" mode="secondary">Уравнение с одним неизвестным</Button>
                            </div>
                            <div className = "BtnList">
                                <Button size="xl" mode="secondary">Система уравнений</Button>
                            </div>
                            <div className = "BtnList">
                                <Button size="xl" mode="secondary">Квадратное уравнение</Button>
                            </div>
                            <div className = "BtnList">
                                <Button size="xl" mode="secondary">Операции с дробями</Button>
                            </div>
                            <div className = "BtnList">
                                <Button size="xl" mode="secondary">Упростить выражение</Button>
                            </div>
                            <div className = "BtnList">
                                <Button size="xl" mode="secondary">Раскрыть скобки</Button>
                            </div>
                            <div className = "BtnList">
                                <Button size="xl" mode="secondary">Округление чисел</Button>
                            </div>
                            <div className = "BtnList">
                                <Button size="xl" mode="secondary">Процент от числа</Button>
                            </div>
                        </Group>

                        <Group header={<Header mode="secondary">Физика</Header>}>
                            <div className = "BtnList">
                                <Button size="xl" mode="secondary">Плотность веществ</Button>
                            </div>
                            <div className = "BtnList">
                                <Button size="xl" mode="secondary">Скорость, время и расстояние</Button>
                            </div>
                            <div className = "BtnList">
                                <Button size="xl" mode="secondary">Масса, плотность и объём</Button>
                            </div>
                            <div className = "BtnList">
                                <Button size="xl" mode="secondary">Коэффициент трения</Button>
                            </div>
                            <div className = "BtnList">
                                <Button size="xl" mode="secondary">Кинетическая энергия</Button>
                            </div>
                        </Group>
                        
                        <Group header={<Header mode="secondary">Текстовые и числовые калькуляторы</Header>}>
                            <div className = "BtnList">
                                <Button size="xl" mode="secondary">Количество символов</Button>
                            </div>
                            <div className = "BtnList">
                                <Button size="xl" mode="secondary">Системы счисления</Button>
                            </div>
                            <div className = "BtnList">
                                <Button size="xl" mode="secondary">Распределение чисел</Button>
                            </div>
                        </Group>
                </View>

                <View id="calcs" activePanel={this.state.activePanel}>
                    <Panel id="calc1">
                    <PanelHeader
                        left={<PanelHeaderClose onClick={SetBar} />}
                        >
                        Решить уравнение с одним неизвестным
                        </PanelHeader>
                        
                        <Ur/>
                    </Panel>

                </View>
            </Root>

            );
        }
      }
    
    
    
    export default Main;