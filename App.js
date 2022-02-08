import React, {Component} from 'react';


import './App.css';
class App extends Component{
constructor(){
super();


this.state = {
label: '',
key: '',
isRequired: '',
order: '',
type: '',
unit:'',
isReadonly:'',

}

}


render() {

return (
<div className="container">
<div className="row">
<div className="col-lg-4 offset-4 text-center">

<form className="registrationForm">
<h2>Registration form validation react js </h2>

<label  className ="text-center" htmlFor="label">label Name</label>
<input type="string" className="form-control" name="label" placeholder="label Name"  /> 
<br></br>
<br></br>

<label htmlFor="key">key Name</label>
<input type="key" className="form-control" name="key" placeholder="key Name"  /> 

<br></br>
<br></br>

<label htmlFor="isRequired">isRequired details</label>
<input type="isRequired" className="form-control" name="isRequired" placeholder="isRequired details"  /> 
<br></br>
<br></br>

<label htmlFor="order">order details</label>
<input type="order" className="form-control" placeholder="order" name="order details"  />

<br></br>
<br></br>

<label htmlFor="type">type Name</label>
<input type="type" className="form-control" placeholder="type" name="type Name" />

<br></br>
<br></br>

<label htmlFor="unit">unit details</label>
<input type="unit" className="form-control" placeholder="unit" name="unit details" />

<br></br>
<br></br>


<label htmlFor="isReadonly">isReadonly</label>
<input type="isReadonly" className="form-control" placeholder="isReadonly" name="isReadonly" />


<br></br>
<br></br>



<button  className="btn btn-primary"> Register </button>
</form>
</div>
</div>
</div>

)
}
}
export default App;