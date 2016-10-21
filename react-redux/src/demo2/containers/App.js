// 容器
import { extend } from 'jquery';
import { bindActionCreators } from 'redux';
import React, { findDOMNode, Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import PageBean from '../components/PageBean';
import Logs from '../components/Logs';
import Item from '../components/Item';
import * as Actions from '../actions/list'

// 引入样式
require("../style/1.css");


class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			itemCtrl:"",
			edit:{
				step:"",
				id:0,
				name:""
			}
		};
		
		
		this.list_reload = this.list_reload.bind(this)
		this.change_pageBean = this.change_pageBean.bind(this)
	}
	
	//初始化渲染后触发，只执行一次
	componentDidMount() {
		console.warn('lifecycle[1].初始化渲染后触发');
		
		this.props.actions.xhr_list_get();
	}
	
	//每次接受新的props触发
	componentWillReceiveProps(nextProps) {
		console.warn('lifecycle[>1].每次接受新的props触发',nextProps);
		const { actions, list, add, del, edit } = nextProps;
		
		// 请求列表数据-start
		if( list.step == "send" ){
			actions.xhr_list_get({current:list.pageBean.current})
			
		}
		
		// 添加：触发 request
		/* if( add.step == "loading" ){
			actions.xhr_add_request({name:add.name})
			
		} */
		
		if( del.step == "remove" ){
			actions.it_del_request(del);
			
		}
		
		if( edit.step == "complete"){
			this.setState({
				edit:extend({},this.state.edit,{
					step:""
				})
			});
		}
	}
	

	item_change(e) {
		console.log("item_change", e.target.value );
			
		this.setState({
			edit:extend({},this.state.edit,{
				name:e.target.value
			})
		});
	}
	
	item_edit_save(pd) {
		// 更新 store
		// this.props.dispatch( Actions.item_edit_save(pd) ); //写法 1
		this.props.actions.item_edit_save(pd); //写法 2
		
		// 改变当前组件 UI
		pd.step="send";
		this.setState({edit:pd})
	}
	
	list_add_send() {
		// 提交新增数据
		let val = this.refs.add_input.value;
		if(val){
			this.props.actions.list_add_send(val);
		}
	}
	
	list_reload() {
		this.props.actions.xhr_list_f5();
	}
	
	change_pageBean(op){
		this.props.actions.pageBean_go(op);
	}
	
	ui_item_ctrl_toggle(type){
		// 是否显示 UI
		if(type=="add"){
			return (
				<p className=""> 新增：<input type="text" ref="add_input" />
					<button onClick={this.list_add_send.bind(this)}>提交</button>
				</p>
			)
		}
	}
	
	item_ctrl(type,data){
		console.info(type,data);
		
		if( type=="add" ){
			data={
				id:0,
				name:""
			}
		}
		
		this.setState({
			itemCtrl:type,
			edit:data
		});
	}
	
	render() {
		console.debug( "6.app.js~render 更新组件视图", this.props );
		
		// 来自继承
		const {children, actions, list, logs } = this.props;
		
		// 自己的 UI 属性
		const {itemCtrl, edit} = this.state;
		// console.debug("list", list.items.length, list, add );
		
		return (
			<div>
				<button onClick={this.list_reload}>fetch 刷新列表</button>
				
				<p><button className="mt10" onClick={()=>this.item_ctrl("add")}>新增</button></p>
				
				{this.ui_item_ctrl_toggle(itemCtrl)}
				
				{(itemCtrl=="edit") && 
				<p className=""> 编辑：<input onChange={this.item_change.bind(this)} value={edit.name} type="text" ref="add_input" /><button disabled={edit.step=="send" && "true"} onClick={()=>this.item_edit_save(edit)}>{edit.step=="send"?"保存中":"保存"}</button> </p>
				}
				
				<ul>
				{list.items.map( (it) =>
					<Item key={it.id} {...it} onEditBefore={()=>this.item_ctrl("edit",it)} onDel={actions.it_del} />
				)}
				</ul>
				<PageBean {...list.pageBean} onChange={this.change_pageBean} />
				
				<br/>
				<br/>
				<Logs data={logs} />
				
				<ol>
					<li><a href="#/a"> 路由A </a></li>
					<li><a href="#/b"> 路由B </a></li>
				</ol>
				
				{children}
			</div>
		)
	};
}

//将reducers的return值注册到react的 props上
function mapStateToProps(state) {
	console.log( "4.connect[>0]~reducers->state=>props 将reducers的return值注册到react的 props", state );
	const { list, add, del, edit, logs } = state.da1;
	
	return {
		list, add, del, edit, logs
	};
}

//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
	let actions = bindActionCreators(Actions, dispatch);
	console.warn("connect[1]~action.*=>props 将action的所有方法绑定到 props", actions);
	return {
		actions
	};
}

//将state的 "指定值" 映射在props上，将 action的 "所有方法" 映射在props上
export default connect(mapStateToProps, mapDispatchToProps)(App);
