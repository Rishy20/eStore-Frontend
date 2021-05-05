import React from "react";
import './Progress.css'
const Registration = "Registration"
function Progress(props){
    let count = 1;

    return(
        <div>
        <div className="progress">
            {

                props.labels.map(label => {
                    return <span className="progress-item" key={count}>
                    <span className="progress-detail" >
                        <span className={`progress-number ${props.selected===count?"selected":""}`}>{count<props.selected?"✔":count}</span>
                        <span className={label.length>8?"ml-20":"progress-name" }>{label}</span>
                    </span>

                    <hr className={count++===props.labels.length?"none":"progress-bar"}/>

                    </span>

                })
            }

            {/*<span className="progress-detail">*/}
            {/*    <span className="progress-number">2</span>*/}
            {/*    <span className="progress-name">Tickets</span>*/}
            {/*</span>*/}
            {/*<hr className="progress-bar"/>*/}
            {/*<span className="progress-detail">*/}
            {/*    <span className="progress-number">3</span>*/}
            {/*    <span className="progress-name">Confirmation</span>*/}
            {/*</span>*/}


        </div>

        </div>

    )
}
export default Progress