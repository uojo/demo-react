import React, { PropTypes, Component } from 'react'

class Cp1 extends Component {
  constructor(props) {
	super(props)
	
	this.fn1 = this.fn1.bind(this);
  }
  
  fn1(way) {
	// 改变current
	// console.log( 101, way, this.props );
	this.props.onChange("prev");
	
  }
  
  fn2(way) {
	// 改变current
	// console.log( 102, way, this.props );
	this.props.onChange("next");
	
  }
	
  render() {
    
	// console.debug("PageBean.js", this.props);
	const {count, current, total} = this.props;
	
    return (
		<div className="base_page">
			<span className="base_page_total">共 <b>{count}</b> 条</span>
			&nbsp;&nbsp;
			<a className="page_btn" onClick={this.fn1}>上一页</a>
			<span><b>{current}</b>/{total}</span>
			<a className="page_btn" onClick={this.fn2.bind(this)}>下一页</a>
			<span>
				<input className="base_page_search_input" type="text" />
				<button className="go_btn" type="button">Go</button>
			</span>
		</div>
    )
  }
  
}


export default Cp1
