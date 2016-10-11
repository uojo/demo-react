import React from 'react'
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { form1_load1, form1_load2 } from './actions'
// import 

const data = {  // used to populate "account" reducer when "Load" is clicked
  firstName: 'Jane',
  lastName: 'Doe',
  age: 1,
  sex: 'female',
  employed: true,
  favoriteColor: 'Blue',
  bio: 'Born to write amazing Redux code.'
}

let FormA = (props) => {
  console.info("Form1.js",props);
  const { dispatch, handleSubmit, pristine, reset, submitting, initialize, change, autofill, load, as_init, v3, v4 } = props;
  
  const fn1 = s1 => 
	(val,prevVal,allVal) => {
		// console.warn("2",val,prevVal,allVal,s1);
		return val?val:0;
	}
	
  const fn2 = s1 => {
		change("age",110);
	}
	
  // (change("email",120))
  // ( dispatch(as_init))
  // (initialize(data));
  // ( ()=>initialize(data) );
  
  return (
    <form onSubmit={handleSubmit}>
      <h5>simple form <button type="button" onClick={()=>load(data)}>set initialize</button></h5>
      <div>
        <label>First Name</label>
        <div>
          <Field name="firstName" component="input" type="text" placeholder="First Name"/>
		  {v3}
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field name="lastName" component="input" type="text" placeholder="Last Name"/>
        </div>
      </div>
	  <div>
        <label>Age</label>
        <div>
          <Field name="age" component="input" type="number" placeholder="Age" normalize={fn1("hello")}/>
		  <button type="button" onClick={fn2}>Set</button>
        </div>
      </div>
      <div>
        <label>Email</label>
        <div>
          <Field name="email" component="input" type="email" placeholder="Email"/>
        </div>
      </div>
      <div>
        <label>Sex</label>
        <div>
          <label><Field name="sex" component="input" type="radio" value="male"/> Male</label>
          <label><Field name="sex" component="input" type="radio" value="female"/> Female</label>
        </div>
      </div>
      <div>
        <label>Favorite Color</label>
        <div>
          <Field name="favoriteColor" component="select">
            <option></option>
            <option value="ff0000">Red</option>
            <option value="00ff00">Green</option>
            <option value="0000ff">Blue</option>
          </Field>
        </div>
      </div>
      <div>
        <label htmlFor="employed">Employed</label>
        <div>
          <Field name="employed" id="employed" component="input" type="checkbox"/>
        </div>
      </div>
      <div>
        <label>Notes</label>
        <div>
          <Field name="notes" component="textarea"/>
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
        <button type="button" onClick={()=>initialize(v4)}>initialize -> render</button>
      </div>
    </form>
  )
}


FormA = reduxForm({
  form: 'form1',  // a unique identifier for this form
  // 初始赋值
  initialValues:{
	  firstName:'wang',
	  lastName: 'chong'
  },
  // enableReinitialize:true,
  /* getFormState:function(ops){
	  console.info("getFormState",ops);
	  // return ops;
  } */
})(FormA)

const sltor1 = formValueSelector("form1");
FormA = connect(
  state => {
    console.log( 34,"将state注册到props中",state )
	
	const {firstName, lastName} = sltor1(state, "firstName", "lastName");
	
	return {
		initialValues: state.reducer_1.data,
		v3: `${firstName || ""} ${lastName || ""}`,
		v4: Object.assign(data,{age:++data.age})
	} // pull initial values from account reducer
  },
  { load: form1_load1, as_init:form1_load2 }               // bind account loading action creator
)(FormA)

export default FormA;
