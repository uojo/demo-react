import { bindActionCreators } from 'redux';
import React, { findDOMNode, Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import PageBean from './PageBean';
import * as Actions from './actions'

// 引入样式
require("./1.css");
// import "./1.css";


class App extends Component {
	constructor(props) {
		super(props)
		this.list_reload = this.list_reload.bind(this)
		this.change_pageBean = this.change_pageBean.bind(this)
	}
	
	//初始化渲染后触发，只执行一次
	componentDidMount() {
		console.warn('[1]~lifecycle.初始化渲染后触发');
		
		this.props.dispatch( Actions.xhr_list_get() );
		/* const { dispatch, selectedReddit } = this.props
		dispatch(fetchPostsIfNeeded(selectedReddit)) */
	}

	//每次接受新的props触发
	componentWillReceiveProps(nextProps) {
		console.warn('lifecycle.每次接受新的props触发',nextProps);
		
		
		// 请求列表数据
		if( nextProps.list.step == "send" ){
			const { dispatch } = nextProps;
			// console.debug( dispatch );
			dispatch( Actions.xhr_list_get({current:nextProps.list.pageBean.current}) );
		}
		
		if( nextProps.add.step == "loading" ){
			const { dispatch } = nextProps;
			this.props.dispatch( Actions.xhr_add_request({name:nextProps.add.name}) );
			// console.debug( dispatch );
			// dispatch( Actions.xhr_list_get({current:nextProps.list.pageBean.current}) );
		}
		/* if (nextProps.selectedReddit !== this.props.selectedReddit) {
			const { dispatch, selectedReddit } = nextProps
			dispatch(fetchPostsIfNeeded(selectedReddit))
		} */
	}
	
	list_add_show() {
		this.props.as.list_add_show();
	}
	
	list_add_send() {
		let val = this.refs.add_input.value;
		if(val){
			this.props.as.list_add_send(val);
		}
		
	}
	
	list_reload() {
		/* const { dispatch } = this.props;
		console.log("dispatch", dispatch );
		console.log("action", this.props.as , action); */
		
		this.props.dispatch( Actions.xhr_list_f5() );
		// this.props.as.at2(Actions.Status_f5);
	}
	
	change_pageBean(op){
		console.log("app.js~change_pageBean", op);
		this.props.dispatch( Actions.pageBean_go(op) );
	}
	
	render() {
		console.debug( "6.app.js~render 更新组件视图", this.props );
		
		const {add, list, logs} = this.props;
		
		console.debug("list", list.items.length, list, add );
		
		return (
			<div>
				<button onClick={this.list_reload}>刷新列表</button>
				<button onClick={this.list_add_show.bind(this)}>新增</button>
				
				{(1 || add.step!="hide") && 
				<p className=""> <input type="text" ref="add_input" /><button onClick={this.list_add_send.bind(this)}>提交</button> </p>
				}
				
				<ul>
				{list.items.map( it =>
					<li key={it.id} da={it}>{it.name}</li>
				)}
				</ul>
				
				<PageBean {...list.pageBean} onChange={this.change_pageBean} />
				
				<br/>
				<br/>
				<div>Logs:{logs.length}</div>
				<textarea rows="10" value={ logs.join("\n") } readOnly ></textarea>
			</div>
		)
	};
}

//将reducers的return值注册到react的props上
function mapStateToProps(state) {
	const { logs, list, add } = state;
	console.log( "4.app.js~reducers->state=>props 将reducers的return值注册到react的 props", state );
	return {
		logs,
		list,
		add
	};
}

//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
	let _action = bindActionCreators(Actions, dispatch);
	console.warn("[1]~5.app.js~action.*=>props 将action的所有方法绑定到 props", _action);
	return {
		as:_action,
		dispatch
	};
}

//将state的 "指定值" 映射在props上，将 action的 "所有方法" 映射在props上
export default connect(mapStateToProps, mapDispatchToProps)(App);
