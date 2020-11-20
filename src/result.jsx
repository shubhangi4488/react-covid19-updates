import React from "react";
import "./result.css";

class Result extends React.Component{
    render(){
        return(
            <div className="result">
                 <div className="result-main">
                     <div className="results">
                     <div>
                     TotalCases
                     </div>
                     <div>
                     {this.props.totalcases}
                     </div>
                     </div>
                     
                     <div className="results">
                       <div>
                       Deaths
                       </div>
                       <div>
                       {this.props.deaths}
                       </div>
                     </div>
                 </div>

                 <div className="result-main">
                     <div className="results">
                      <div>
                      ActiveCases
                      </div>
                      <div>
                      {this.props.activecases}
                      </div>
                     </div>

                     <div className="results">
                     <div>
                     Recovered
                     </div>
                     <div>
                     {this.props.recovered}
                     </div>
                     </div>
                 </div>
               </div>
        )
    }
}

export default Result;