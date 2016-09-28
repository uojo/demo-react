import React, { PropTypes, Component } from 'react'

class Cp3 extends Component {
	
	constructor(props, context) {
		super(props, context)
		this.state = {
		  descEditing: false
		}
		
		/* this.props = {
			da:{
				name:"",
				desc:""
			}
		} */
	}
	
  detail(obj) {
      console.log("detail",this.props.da);
  }
  
  edit_desc(obj) {
	  this.setState({descEditing:true});
  }
  
  save_desc(e) {
	  // console.log(e.target.value);
	  var nda = Object.assign({}, this.props.da, {desc:e.target.value});
	  this.props.as.it_save(nda);
	  this.setState({descEditing:false});
  }

  
  
  render() {
    const {da,as} = this.props;
	
	let element;
	if( this.state.descEditing ){
		element = (<input value={da.desc} onChange={() => as.tFn1(da.id)} onBlur={this.save_desc.bind(this)}  />);
		
	}else{
		element = (<span onClick={this.edit_desc.bind(this)} >{da.desc}</span>);
		
	}
	
    return (
      <li>
        <button onClick={this.detail.bind(this)}>{da.name}</button>
		{element}
        <button onClick={()=> as.it_edit(da)}>edit</button>
        <button>x</button>
      </li>
    )
  }
}


export default Cp3
