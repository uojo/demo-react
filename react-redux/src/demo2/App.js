import { bindActionCreators } from 'redux';
import React, { findDOMNode, Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import PageBean from './PageBean';
import * as action from './actions'

// 引入样式
require("./1.css");
// import "./1.css";


class App extends Component {
	constructor(props) {
		super(props)
		this.fn1 = this.fn1.bind(this)
		this.change_pageBean = this.change_pageBean.bind(this)
	}
	
	//初始化渲染后触发
	componentDidMount() {
		console.warn('[1]~lifecycle.初始化渲染后触发');
		
		this.props.dispatch( action.xhr_list_get() );
		/* const { dispatch, selectedReddit } = this.props
		dispatch(fetchPostsIfNeeded(selectedReddit)) */
	}

	//每次接受新的props触发
	componentWillReceiveProps(nextProps) {
		console.warn('lifecycle.每次接受新的props触发',nextProps);
		if( nextProps.list.status == "send" ){
			const { dispatch } = nextProps;
			// console.debug( dispatch );
			dispatch( action.xhr_list_get() );
		}
		/* if (nextProps.selectedReddit !== this.props.selectedReddit) {
			const { dispatch, selectedReddit } = nextProps
			dispatch(fetchPostsIfNeeded(selectedReddit))
		} */
	}
	
	fn0() {
		this.props.as.at0( action.Status_a_step1 );
	}
	
	fn1() {
		/* const { dispatch } = this.props;
		console.log("dispatch", dispatch );
		console.log("action", this.props.as , action); */
		
		this.props.dispatch( action.xhr_list_f5() );
		// this.props.as.at2(action.Status_f5);
		// action.at2(action.Status_f5);
	}
	
	change_pageBean(op){
		console.log("app.js~change_pageBean", op);
		this.props.dispatch( action.pageBean_go(op) );
	}
	
	render() {
		console.debug( "6.app.js~render 更新组件视图", this.props );
		
		const {list, logs} = this.props;
		
		// console.debug("list", list );
		
		return (
			<div>
				<button onClick={this.fn0.bind(this)}>新增</button>
				<button onClick={this.fn1}>刷新列表</button>

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
	const { logs, list } = state;
	console.log( "4.app.js~reducers->state=>props 将reducers的return值注册到react的 props", state );
	return {
		logs,
		list
	};
}

//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
	let _action = bindActionCreators(action, dispatch);
	console.warn("[1]~5.app.js~action.*=>props 将action的所有方法绑定到 props", _action);
	return {
		as:_action,
		dispatch
	};
}

//将state的 "指定值" 映射在props上，将 action的 "所有方法" 映射在props上
export default connect(mapStateToProps, mapDispatchToProps)(App);
