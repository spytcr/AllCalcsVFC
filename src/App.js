import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import '@vkontakte/vkui/dist/vkui.css';

import { Panel, PanelHeader, Tabbar, TabbarItem, Epic } from '@vkontakte/vkui';
import MenuIco from '@vkontakte/icons/dist/28/grid_square_outline';
import ConvIco from '@vkontakte/icons/dist/28/sort_outline';
import CalcIco from '@vkontakte/icons/dist/28/add_circle_outline';
import MoreIco from '@vkontakte/icons/dist/28/settings_outline';


import Calculator from "./panels/calc";
import Main from "./panels/main";
import Conv from "./panels/conv";

class App extends React.Component {
	constructor (props) {
	  super(props);
  
	  this.state = {
		activeStory: 'math',
		Bar: true,
	  };
	  this.onStoryChange = this.onStoryChange.bind(this);
	}
	onStoryChange (e) {
	  this.setState({ activeStory: e.currentTarget.dataset.story })
	}
	
	chStBar = Bar => {this.setState({ Bar })}

	static Calc;
	render () {			
		let ret;
		if (this.state.Bar){
			ret = (
				<Epic activeStory={this.state.activeStory} tabbar={
				  <Tabbar>
					<TabbarItem
					  onClick={this.onStoryChange}
					  selected={this.state.activeStory === 'math'}
					  data-story="math"
					  text="Главная"
					><MenuIco /></TabbarItem>
					<TabbarItem
					  onClick={this.onStoryChange}
					  selected={this.state.activeStory === 'conv'}
					  data-story="conv"
					  text="Конвертеры"
					><ConvIco/></TabbarItem>
					<TabbarItem
					  onClick={this.onStoryChange}
					  selected={this.state.activeStory === 'calc'}
					  data-story="calc"
					  text="Калькулятор"
					><CalcIco /></TabbarItem>
					<TabbarItem
					  onClick={this.onStoryChange}
					  selected={this.state.activeStory === 'set'}
					  data-story="set"
					  text="Инструменты"
					><MoreIco /></TabbarItem>
				  </Tabbar>
				}>
				  <View id="math" activePanel="math">
					<Panel id="math">
						<PanelHeader>Список калькуляторов</PanelHeader>
						<Main SetBar = {this.chStBar.bind(this, this.state.Bar ? false : true)} View = 'main'/>		
					</Panel>		    
				  </View>
				  <View id="conv" activePanel="conv">
					<Panel id="conv">
					  <PanelHeader>Конвертеры</PanelHeader>
						<Conv/>
					</Panel>
				  </View>
				  <View id="calc" activePanel="calc">
					<Panel id="calc">
						<PanelHeader>Простой калькулятор</PanelHeader>
					  <Calculator/>
					</Panel>
				  </View>
				  <View id="set" activePanel="set">
					<Panel id="set">
					  <PanelHeader>Инструменты</PanelHeader>
					</Panel>
				  </View>
				</Epic>
			  );
		}  
	
		else {
			if(this.state.activeStory == "math"){
				ret = (			
					<Main SetBar = {this.chStBar.bind(this, this.state.Bar ? false : true)} View = 'calcs'/>	    
				);
			}
	
			else if (this.state.activeStory == "conv"){
				ret = (			
					<Conv/>	    
				);
			}
			}

	return(
		<div>
			{ret}
		</div>
	);
}
}



export default App;

