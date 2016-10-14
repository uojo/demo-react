import { bindActionCreators } from 'redux';
import React, { findDOMNode, Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import PageBean from '../components/PageBean';
import * as Actions from '../actions/actions'

// 引入样式
require("../style/1.css");


class App extends Component {
	constructor(props) {
		super(props)
		this.list_reload = this.list_reload.bind(this)
		this.change_pageBean = this.change_pageBean.bind(this)
		this.list_remove_one = this.list_remove_one.bind(this)
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
		
		// 请求列表数据-start
		if( nextProps.list.step == "send" ){
			const { dispatch } = nextProps;
			// console.debug( dispatch );
			dispatch( Actions.xhr_list_get({current:nextProps.list.pageBean.current}) );
		}
		
		
		if( nextProps.add.step == "loading" ){
			this.props.dispatch( Actions.xhr_add_request({name:nextProps.add.name}) );
		}
		
		if( nextProps.del.step == "remove" ){
			const { dispatch, del } = nextProps;
			dispatch( Actions.it_del_request(del) );
		}
		/* if (nextProps.selectedReddit !== this.props.selectedReddit) {
			const { dispatch, selectedReddit } = nextProps
			dispatch(fetchPostsIfNeeded(selectedReddit))
		} */
	}
	
	list_remove_one(id) {
		console.log(arguments,this);
		this.props.dispatch( Actions.it_del(id) );
	}

	item_change(e) {
		console.log("item_change", e.target.value );
		this.props.dispatch( Actions.ui_item_change({name:e.target.value}) );
	}
	
	ui_item_ctrl(type, data) {
		this.props.dispatch( Actions.ui_item_ctrl(type,data) );
	}
	
	item_save(pd) {
		this.props.dispatch( Actions.ui_item_save(pd) );
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
		
		const {add, edit, list, logs, ui} = this.props;
		
		console.debug("list", list.items.length, list, add );
		
		return (
			<div>
				<button onClick={this.list_reload}>刷新列表</button>
				<button onClick={()=>this.ui_item_ctrl("add")}>新增</button>
				
				{(ui.itemCtrl=="add") && 
				<p className=""> 新增：<input type="text" ref="add_input" /><button onClick={this.list_add_send.bind(this)}>提交</button> </p>
				}
				
				{(ui.itemCtrl=="edit") && 
				<p className=""> 编辑：<input onChange={this.item_change.bind(this)} value={edit.pd.name} type="text" ref="add_input" /><button disabled={edit.step=="send" && "true"} onClick={()=>this.item_save(edit.pd)}>{edit.step=="send"?"保存中":"保存"}</button> </p>
				}
				
				<ul>
				{list.items.map( it =>
					<li key={it.id} da={it}>{it.name}
						&nbsp;
						<a onClick={() => this.ui_item_ctrl("edit",it) }>改</a>
						&nbsp;
						<a onClick={() => this.list_remove_one(it.id) }>删</a>
						</li>
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
	const { logs, list, add, edit, del, ui } = state;
	console.log( "4.app.js~reducers->state=>props 将reducers的return值注册到react的 props", state );
	return {
		logs,
		list,
		add,
		edit,
		del,
		ui
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