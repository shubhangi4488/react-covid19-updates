import React from "react";
import "./form.css";
import Result from "./result";

class Form extends React.Component{
    constructor(props){
        super();
        this.state={
            Country:"",
            result:[]
        }
    }
    handleChange = (e) => {
           e.preventDefault();
           this.setState({[e.target.name]:[e.target.value]})
    }

    fetchAPI = (e) => {
        e.preventDefault();
        const Country = this.state.Country;
        const url="https://coronavirus-19-api.herokuapp.com/countries/"+Country;
        fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            this.setState({result:[data]});
        })
        .catch(err =>{
            console.log(err);
        })
    }
    render(){
        const resultjsx = this.state.result.map(item => (<Result 
            totalcases={item.cases} deaths={item.deaths} activecases={item.active} recovered={item.recovered}
            />))
        return(
            <div className="container">
               <div className="form">
                  <input type="text" placeholder="Enter Country Name" name="Country" value={this.state.Country} onChange={this.handleChange}></input>
                  <a href="#" className="btn btn-white" onClick={this.fetchAPI}>Submit</a>
               </div>
               {resultjsx}
            </div>
        )
    }
}
export default Form;