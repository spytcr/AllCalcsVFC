(this.webpackJsonpAllCalcs=this.webpackJsonpAllCalcs||[]).push([[0],{100:function(e,t,a){"use strict";var n=a(18),l=a(19),c=a(21),r=a(20),s=a(0),o=a.n(s),_=function(e){Object(c.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"button"},o.a.createElement("button",{name:"CE",className:"Button--lvl-secondary",onClick:function(t){return e.props.onClick(t.target.name)}},"CE"),o.a.createElement("button",{name:"C",className:"Button--lvl-secondary",onClick:function(t){return e.props.onClick(t.target.name)}},"C"),o.a.createElement("button",{name:"(",className:"Button--lvl-secondary",onClick:function(t){return e.props.onClick(t.target.name)}},"("),o.a.createElement("button",{name:")",className:"Button--lvl-secondary",onClick:function(t){return e.props.onClick(t.target.name)}},")"),o.a.createElement("br",null),o.a.createElement("button",{name:"1",className:"Button--lvl-outline",onClick:function(t){return e.props.onClick(t.target.name)}},"1"),o.a.createElement("button",{name:"2",className:"Button--lvl-outline",onClick:function(t){return e.props.onClick(t.target.name)}},"2"),o.a.createElement("button",{name:"3",className:"Button--lvl-outline",onClick:function(t){return e.props.onClick(t.target.name)}},"3"),o.a.createElement("button",{name:"+",className:"Button--lvl-secondary",onClick:function(t){return e.props.onClick(t.target.name)}},"+"),o.a.createElement("br",null),o.a.createElement("button",{name:"4",className:"Button--lvl-outline",onClick:function(t){return e.props.onClick(t.target.name)}},"4"),o.a.createElement("button",{name:"5",className:"Button--lvl-outline",onClick:function(t){return e.props.onClick(t.target.name)}},"5"),o.a.createElement("button",{name:"6",className:"Button--lvl-outline",onClick:function(t){return e.props.onClick(t.target.name)}},"6"),o.a.createElement("button",{name:"-",className:"Button--lvl-secondary",onClick:function(t){return e.props.onClick(t.target.name)}},"-"),o.a.createElement("br",null),o.a.createElement("button",{name:"7",className:"Button--lvl-outline",onClick:function(t){return e.props.onClick(t.target.name)}},"7"),o.a.createElement("button",{name:"8",className:"Button--lvl-outline",onClick:function(t){return e.props.onClick(t.target.name)}},"8"),o.a.createElement("button",{name:"9",className:"Button--lvl-outline",onClick:function(t){return e.props.onClick(t.target.name)}},"9"),o.a.createElement("button",{name:"*",className:"Button--lvl-secondary",onClick:function(t){return e.props.onClick(t.target.name)}},"x"),o.a.createElement("br",null),o.a.createElement("button",{name:".",className:"Button--lvl-secondary",onClick:function(t){return e.props.onClick(t.target.name)}},"."),o.a.createElement("button",{name:"0",className:"Button--lvl-outline",onClick:function(t){return e.props.onClick(t.target.name)}},"0"),o.a.createElement("button",{name:"=",className:"Button--lvl-commerce",onClick:function(t){return e.props.onClick(t.target.name)}},"="),o.a.createElement("button",{name:"/",className:"Button--lvl-secondary",onClick:function(t){return e.props.onClick(t.target.name)}},"\xf7"),o.a.createElement("br",null))}}]),a}(s.Component);t.a=_},169:function(e,t,a){e.exports=a(268)},256:function(e,t,a){},268:function(e,t,a){"use strict";a.r(t);a(170),a(196),a(198),a(199),a(201),a(202),a(203),a(204),a(205),a(206),a(207),a(208),a(210),a(211),a(212),a(213),a(214),a(215),a(216),a(217),a(218),a(219),a(221),a(222),a(223),a(224),a(225),a(226),a(227),a(228),a(229),a(230),a(231),a(232),a(233),a(234),a(235),a(236),a(237),a(238);var n=a(0),l=a.n(n),c=a(95),r=a.n(c),s=a(27),o=a.n(s),_=a(18),i=a(19),m=a(52),u=a(21),E=a(20),d=a(28),C=a.n(d),p=(a(49),a(2)),h=a(102),b=a.n(h),v=a(103),k=a.n(v),B=a(104),y=a.n(B),O=a(105),f=a.n(O),P=a(98),N=(a(66),a(101)),L=a.n(N),D=function(e){Object(u.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(_.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.urInput=e.target.value},n.calc=function(){try{var e=L.a.parse(n.urInput).solveFor("x");console.log(e.toString()),n.setState({result:"x = "+e.toString()})}catch(t){n.setState({result:"\u041e\u0448\u0438\u0431\u043a\u0430! \u0412\u0432\u0435\u0434\u0435\u043d\u043e \u043d\u0435\u0432\u0435\u0440\u043d\u043e\u0435 \u0443\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435."})}},n.state={result:" "},n.urInput=null,n}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"CalcDiv"},l.a.createElement(p.d,null,l.a.createElement("p",null,l.a.createElement("strong",null,"\u041b\u0438\u043d\u0435\u0439\u043d\u043e\u0435 \u0443\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435")," \u2014 \u0442\u0430\u043a\u043e\u0435, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043f\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043b\u0438\u0448\u044c \u043e\u0434\u043d\u0430 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f, \u043f\u0440\u0438\u0447\u0451\u043c \u0438\u0441\u043a\u043b\u044e\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0432 \u043f\u0435\u0440\u0432\u043e\u0439 \u0441\u0442\u0435\u043f\u0435\u043d\u0438."),l.a.createElement("p",null,"\u041f\u043e\u0434 \u043f\u0440\u043e\u0441\u0442\u0435\u0439\u0448\u0438\u043c \u0443\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435\u043c \u043f\u043e\u0434\u0440\u0430\u0437\u0443\u043c\u0435\u0432\u0430\u0435\u0442\u0441\u044f \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f: ",l.a.createElement("strong",null,"ax+b=0")),l.a.createElement("p",null,"\u0412\u0441\u0435 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u043b\u0438\u043d\u0435\u0439\u043d\u044b\u0435 \u0443\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044f \u0441\u0432\u043e\u0434\u044f\u0442\u0441\u044f \u043a \u043f\u0440\u043e\u0441\u0442\u0435\u0439\u0448\u0438\u043c \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u0430:"),l.a.createElement("ol",null,l.a.createElement("li",null,"\u0420\u0430\u0441\u043a\u0440\u044b\u0442\u044c \u0441\u043a\u043e\u0431\u043a\u0438, \u0435\u0441\u043b\u0438 \u043e\u043d\u0438 \u0435\u0441\u0442\u044c;"),l.a.createElement("li",null,"\u041f\u0435\u0440\u0435\u043d\u0435\u0441\u0442\u0438 \u0441\u043b\u0430\u0433\u0430\u0435\u043c\u044b\u0435, \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u0435 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e, \u0432 \u043e\u0434\u043d\u0443 \u0441\u0442\u043e\u0440\u043e\u043d\u0443 \u043e\u0442 \u0437\u043d\u0430\u043a\u0430 \u0440\u0430\u0432\u0435\u043d\u0441\u0442\u0432\u0430, \u0430 \u0441\u043b\u0430\u0433\u0430\u0435\u043c\u044b\u0435 \u0431\u0435\u0437 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u2014 \u0432 \u0434\u0440\u0443\u0433\u0443\u044e;"),l.a.createElement("li",null,"\u041f\u0440\u0438\u0432\u0435\u0441\u0442\u0438 \u043f\u043e\u0434\u043e\u0431\u043d\u044b\u0435 \u0441\u043b\u0430\u0433\u0430\u0435\u043c\u044b\u0435 \u0441\u043b\u0435\u0432\u0430 \u0438 \u0441\u043f\u0440\u0430\u0432\u0430 \u043e\u0442 \u0437\u043d\u0430\u043a\u0430 \u0440\u0430\u0432\u0435\u043d\u0441\u0442\u0432\u0430;"),l.a.createElement("li",null,"\u0420\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u044c \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u043e\u0435 \u0443\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435 \u043d\u0430 \u043a\u043e\u044d\u0444\u0444\u0438\u0446\u0438\u0435\u043d\u0442 \u043f\u0440\u0438 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439."))),l.a.createElement(p.d,null,l.a.createElement(p.b,{size:"l",mode:"shadow",style:{height:185}},l.a.createElement(p.f,{type:"text",placeholder:'\u0423\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435 \u0441 \u043d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u043c "x"',size:"xl",onChange:this.handleChange}),l.a.createElement(p.a,{onClick:this.calc,size:"xl",className:"CalcBtn",mode:"commerce"},"\u0412\u044b\u0447\u0438\u0441\u043b\u0438\u0442\u044c"),l.a.createElement("h1",{className:"CalcsRes"},this.state.result))))}}]),a}(l.a.Component),M=function(e){Object(u.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(_.a)(this,a),(n=t.call(this,e)).state={activePanel:x.Calc,activeView:n.props.View},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.SetBar;return l.a.createElement(p.j,{activeView:this.state.activeView},l.a.createElement(C.a,{id:"main",header:!1},l.a.createElement(p.d,{header:l.a.createElement(p.e,{mode:"secondary"},"\u041c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0430")},l.a.createElement("div",{className:"BtnList"},l.a.createElement(p.a,{onClick:(x.Calc="calc1",e),size:"xl",mode:"secondary"},"\u041b\u0438\u043d\u0435\u0439\u043d\u043e\u0435 \u0443\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435")),l.a.createElement("div",{className:"BtnList"},l.a.createElement(p.a,{size:"xl",mode:"secondary"},"\u0421\u0438\u0441\u0442\u0435\u043c\u0430 \u0443\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0439")),l.a.createElement("div",{className:"BtnList"},l.a.createElement(p.a,{size:"xl",mode:"secondary"},"\u041a\u0432\u0430\u0434\u0440\u0430\u0442\u043d\u043e\u0435 \u0443\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435")),l.a.createElement("div",{className:"BtnList"},l.a.createElement(p.a,{size:"xl",mode:"secondary"},"\u041e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u0441 \u0434\u0440\u043e\u0431\u044f\u043c\u0438")),l.a.createElement("div",{className:"BtnList"},l.a.createElement(p.a,{size:"xl",mode:"secondary"},"\u0423\u043f\u0440\u043e\u0441\u0442\u0438\u0442\u044c \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435")),l.a.createElement("div",{className:"BtnList"},l.a.createElement(p.a,{size:"xl",mode:"secondary"},"\u0420\u0430\u0441\u043a\u0440\u044b\u0442\u044c \u0441\u043a\u043e\u0431\u043a\u0438")),l.a.createElement("div",{className:"BtnList"},l.a.createElement(p.a,{size:"xl",mode:"secondary"},"\u041e\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u0435 \u0447\u0438\u0441\u0435\u043b")),l.a.createElement("div",{className:"BtnList"},l.a.createElement(p.a,{size:"xl",mode:"secondary"},"\u041f\u0440\u043e\u0446\u0435\u043d\u0442 \u043e\u0442 \u0447\u0438\u0441\u043b\u0430"))),l.a.createElement(p.d,{header:l.a.createElement(p.e,{mode:"secondary"},"\u0424\u0438\u0437\u0438\u043a\u0430")},l.a.createElement("div",{className:"BtnList"},l.a.createElement(p.a,{size:"xl",mode:"secondary"},"\u041f\u043b\u043e\u0442\u043d\u043e\u0441\u0442\u044c \u0432\u0435\u0449\u0435\u0441\u0442\u0432")),l.a.createElement("div",{className:"BtnList"},l.a.createElement(p.a,{size:"xl",mode:"secondary"},"\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c, \u0432\u0440\u0435\u043c\u044f \u0438 \u0440\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0435")),l.a.createElement("div",{className:"BtnList"},l.a.createElement(p.a,{size:"xl",mode:"secondary"},"\u041c\u0430\u0441\u0441\u0430, \u043f\u043b\u043e\u0442\u043d\u043e\u0441\u0442\u044c \u0438 \u043e\u0431\u044a\u0451\u043c")),l.a.createElement("div",{className:"BtnList"},l.a.createElement(p.a,{size:"xl",mode:"secondary"},"\u041a\u043e\u044d\u0444\u0444\u0438\u0446\u0438\u0435\u043d\u0442 \u0442\u0440\u0435\u043d\u0438\u044f")),l.a.createElement("div",{className:"BtnList"},l.a.createElement(p.a,{size:"xl",mode:"secondary"},"\u041a\u0438\u043d\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u044d\u043d\u0435\u0440\u0433\u0438\u044f"))),l.a.createElement(p.d,{header:l.a.createElement(p.e,{mode:"secondary"},"\u0422\u0435\u043a\u0441\u0442\u043e\u0432\u044b\u0435 \u0438 \u0447\u0438\u0441\u043b\u043e\u0432\u044b\u0435 \u043a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440\u044b")},l.a.createElement("div",{className:"BtnList"},l.a.createElement(p.a,{size:"xl",mode:"secondary"},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432")),l.a.createElement("div",{className:"BtnList"},l.a.createElement(p.a,{size:"xl",mode:"secondary"},"\u0421\u0438\u0441\u0442\u0435\u043c\u044b \u0441\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f")),l.a.createElement("div",{className:"BtnList"},l.a.createElement(p.a,{size:"xl",mode:"secondary"},"\u0420\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0447\u0438\u0441\u0435\u043b")))),l.a.createElement(C.a,{id:"calcs",activePanel:this.state.activePanel},l.a.createElement(p.g,{id:"calc1"},l.a.createElement(p.h,{left:l.a.createElement(p.i,{onClick:e})},"\u041b\u0438\u043d\u0435\u0439\u043d\u043e\u0435 \u0443\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435"),l.a.createElement(D,null))))}}]),a}(l.a.Component),g=function(e){Object(u.a)(a,e);var t=Object(E.a)(a);function a(){return Object(_.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"FirstBtn"},l.a.createElement(p.a,{size:"xl",mode:"secondary"},"\u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0435\u0440 \u0432\u0430\u043b\u044e\u0442")),l.a.createElement(p.d,{header:l.a.createElement(p.e,{mode:"secondary"},"\u0424\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0432\u0435\u043b\u0438\u0447\u0438\u043d\u044b")},l.a.createElement("div",{className:"BtnList"},l.a.createElement(p.a,{size:"xl",mode:"secondary"},"\u0415\u0434\u0438\u043d\u0438\u0446\u044b \u0434\u043b\u0438\u043d\u044b")),l.a.createElement("div",{className:"BtnList"},l.a.createElement(p.a,{size:"xl",mode:"secondary"},"\u0415\u0434\u0438\u043d\u0438\u0446\u044b \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u0438")),l.a.createElement("div",{className:"BtnList"},l.a.createElement(p.a,{size:"xl",mode:"secondary"},"\u0415\u0434\u0438\u043d\u0438\u0446\u044b \u0432\u0440\u0435\u043c\u0435\u043d\u0438")),l.a.createElement("div",{className:"BtnList"},l.a.createElement(p.a,{size:"xl",mode:"secondary"},"\u0415\u0434\u0438\u043d\u0438\u0446\u044b \u043c\u043e\u0449\u043d\u043e\u0441\u0442\u0438")),l.a.createElement("div",{className:"BtnList"},l.a.createElement(p.a,{size:"xl",mode:"secondary"},"\u0415\u0434\u0438\u043d\u0438\u0446\u044b \u043c\u0430\u0441\u0441\u044b")),l.a.createElement("div",{className:"BtnList"},l.a.createElement(p.a,{size:"xl",mode:"secondary"},"\u0415\u0434\u0438\u043d\u0438\u0446\u044b \u0434\u0430\u0432\u043b\u0435\u043d\u0438\u044f")),l.a.createElement("div",{className:"BtnList"},l.a.createElement(p.a,{size:"xl",mode:"secondary"},"\u0415\u0434\u0438\u043d\u0438\u0446\u044b \u043f\u043b\u043e\u0442\u043d\u043e\u0441\u0442\u0438")),l.a.createElement("div",{className:"BtnList"},l.a.createElement(p.a,{size:"xl",mode:"secondary"},"\u0415\u0434\u0438\u043d\u0438\u0446\u044b \u0441\u0438\u043b\u044b")),l.a.createElement("div",{className:"BtnList"},l.a.createElement(p.a,{size:"xl",mode:"secondary"},"\u0415\u0434\u0438\u043d\u0438\u0446\u044b \u0442\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u044b")),l.a.createElement("div",{className:"BtnList"},l.a.createElement(p.a,{size:"xl",mode:"secondary"},"\u0415\u0434\u0438\u043d\u0438\u0446\u044b \u044d\u043d\u0435\u0440\u0433\u0438\u0438"))))}}]),a}(l.a.Component),x=function(e){Object(u.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(_.a)(this,a),(n=t.call(this,e)).chStBar=function(e){n.setState({Bar:e})},n.state={activeStory:"math",Bar:!0},n.onStoryChange=n.onStoryChange.bind(Object(m.a)(n)),n}return Object(i.a)(a,[{key:"onStoryChange",value:function(e){this.setState({activeStory:e.currentTarget.dataset.story})}},{key:"render",value:function(){var e;return this.state.Bar?e=l.a.createElement(p.c,{activeStory:this.state.activeStory,tabbar:l.a.createElement(p.k,null,l.a.createElement(p.l,{onClick:this.onStoryChange,selected:"math"===this.state.activeStory,"data-story":"math",text:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"},l.a.createElement(b.a,null)),l.a.createElement(p.l,{onClick:this.onStoryChange,selected:"conv"===this.state.activeStory,"data-story":"conv",text:"\u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0435\u0440\u044b"},l.a.createElement(k.a,null)),l.a.createElement(p.l,{onClick:this.onStoryChange,selected:"calc"===this.state.activeStory,"data-story":"calc",text:"\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440"},l.a.createElement(y.a,null)),l.a.createElement(p.l,{onClick:this.onStoryChange,selected:"set"===this.state.activeStory,"data-story":"set",text:"\u0418\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b"},l.a.createElement(f.a,null)))},l.a.createElement(C.a,{id:"math",activePanel:"math"},l.a.createElement(p.g,{id:"math"},l.a.createElement(p.h,null,"\u0421\u043f\u0438\u0441\u043e\u043a \u043a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440\u043e\u0432"),l.a.createElement(M,{SetBar:this.chStBar.bind(this,!this.state.Bar),View:"main"}))),l.a.createElement(C.a,{id:"conv",activePanel:"conv"},l.a.createElement(p.g,{id:"conv"},l.a.createElement(p.h,null,"\u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0435\u0440\u044b"),l.a.createElement(g,null))),l.a.createElement(C.a,{id:"calc",activePanel:"calc"},l.a.createElement(p.g,{id:"calc"},l.a.createElement(p.h,null,"\u041f\u0440\u043e\u0441\u0442\u043e\u0439 \u043a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440"),l.a.createElement(P.a,null))),l.a.createElement(C.a,{id:"set",activePanel:"set"},l.a.createElement(p.g,{id:"set"},l.a.createElement(p.h,null,"\u0418\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b")))):"math"==this.state.activeStory?e=l.a.createElement(M,{SetBar:this.chStBar.bind(this,!this.state.Bar),View:"calcs"}):"conv"==this.state.activeStory&&(e=l.a.createElement(g,null)),l.a.createElement("div",null,e)}}]),a}(l.a.Component);o.a.send("VKWebAppInit"),r.a.render(l.a.createElement(x,null),document.getElementById("root"))},66:function(e,t,a){},98:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_VkFreshCode_AllCalcs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(18),C_VkFreshCode_AllCalcs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(19),C_VkFreshCode_AllCalcs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(21),C_VkFreshCode_AllCalcs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(20),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_css_calc_css__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(256),_css_calc_css__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_css_calc_css__WEBPACK_IMPORTED_MODULE_5__),_components_ResultComponent__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(99),_components_KeyPadComponent__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(100),Calculator=function(_React$Component){Object(C_VkFreshCode_AllCalcs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(Calculator,_React$Component);var _super=Object(C_VkFreshCode_AllCalcs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(Calculator);function Calculator(){var _this;return Object(C_VkFreshCode_AllCalcs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Calculator),_this=_super.call(this),_this.onClick=function(e){"="===e?_this.calculate():"C"===e?_this.reset():"CE"===e?_this.backspace():_this.setState({result:_this.state.result+e})},_this.calculate=function(){var checkResult="";checkResult=_this.state.result.includes("--")?_this.state.result.replace("--","+"):_this.state.result;try{_this.setState({result:(eval(checkResult)||"")+""})}catch(e){_this.setState({result:"\u041e\u0448\u0438\u0431\u043a\u0430"})}},_this.reset=function(){_this.setState({result:""})},_this.backspace=function(){_this.setState({result:_this.state.result.slice(0,-1)})},_this.state={result:""},_this}return Object(C_VkFreshCode_AllCalcs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Calculator,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"calculator-body"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_ResultComponent__WEBPACK_IMPORTED_MODULE_6__.a,{result:this.state.result}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_KeyPadComponent__WEBPACK_IMPORTED_MODULE_7__.a,{onClick:this.onClick})))}}]),Calculator}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);__webpack_exports__.a=Calculator},99:function(e,t,a){"use strict";var n=a(18),l=a(19),c=a(21),r=a(20),s=a(0),o=a.n(s),_=function(e){Object(c.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.result;return o.a.createElement("input",{readOnly:!0,value:e,className:"result"})}}]),a}(s.Component);t.a=_}},[[169,1,2]]]);
//# sourceMappingURL=main.34cb3581.chunk.js.map