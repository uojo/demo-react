import React from 'react'
import { Field, reduxForm } from 'redux-form'
// import 

const data = {  // used to populate "account" reducer when "Load" is clicked
  firstName: 'Jane',
  lastName: 'Doe',
  age: '42',
  sex: 'female',
  employed: true,
  favoriteColor: 'Blue',
  bio: 'Born to write amazing Redux code.'
}

const FormA = (props) => {
  console.info("Form1.js",props);

  const { handleSubmit, load, pristine, reset, submitting } = props
  
  return (
    <form onSubmit={handleSubmit}>
      <h5>simple form <a onClick={()=>load(data)}>setData</a></h5>
      <div>
        <label>First Name</label>
        <div>
          <Field name="firstName" component="input" type="text" placeholder="First Name"/>
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field name="lastName" component="input" type="text" placeholder="Last Name"/>
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
      </div>
    </form>
  )
}

FormA = reduxForm({
  form: 'form1'  // a unique identifier for this form
})(FormA)

FormA = connect(
  state => ({
    initialValues: state.account.data // pull initial values from account reducer
  }),
  { load: loadAccount }               // bind account loading action creator
)(FormA)

export default FormA;
