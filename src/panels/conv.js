import React, { useState, useEffect } from 'react';

import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import '@vkontakte/vkui/dist/vkui.css';

import { Panel, PanelHeader, Tabbar, TabbarItem, Epic, Group, Cell, Button, Header, div} from '@vkontakte/vkui';

import './css/main.css'


class Conv extends React.Component {


    render () { 
        return (
                    <div>
                            <div className = "FirstBtn">
                                <Button size="xl" mode="secondary">Конвертер валют</Button>
                            </div>
                        
                        <Group header={<Header mode="secondary">Физические величины</Header>}>
                            <div className = "BtnList">
                                <Button size="xl" mode="secondary">Единицы длины</Button>
                            </div>
                            <div className = "BtnList">
                                <Button size="xl" mode="secondary">Единицы скорости</Button>
                            </div>
                            <div className = "BtnList">
                                <Button size="xl" mode="secondary">Единицы времени</Button>
                            </div>
                            <div className = "BtnList">
                                <Button size="xl" mode="secondary">Единицы мощности</Button>
                            </div>
                            <div className = "BtnList">
                                <Button size="xl" mode="secondary">Единицы массы</Button>
                            </div>
                            <div className = "BtnList">
                                <Button size="xl" mode="secondary">Единицы давления</Button>
                            </div>
                            <div className = "BtnList">
                                <Button size="xl" mode="secondary">Единицы плотности</Button>
                            </div>
                            <div className = "BtnList">
                                <Button size="xl" mode="secondary">Единицы силы</Button>
                            </div>
                            <div className = "BtnList">
                                <Button size="xl" mode="secondary">Единицы температуры</Button>
                            </div>
                            <div className = "BtnList">
                                <Button size="xl" mode="secondary">Единицы энергии</Button>
                            </div>
                        </Group>

                    </div>

            );
        }
      }
    
    
    
    export default Conv;