import React, {useState} from "react";
import SideImage from "../SideImage";
import PageTitle from "../PageTitle";
import Input from "../Input";
import "./Login.css"
import Button from "../Button";
import useForm from "../useForm";
import validate from "../validateInfo";

const names={
    email:'',
    password:''
}
function Login(){

    //Import methods from useForm hook
    const {handleChange, handleSubmit, values, errors } = useForm(submitForm,validate,names);
    const[isSubmitted,setIsSubmitted] = useState(false);
    function submitForm(){
        setIsSubmitted(true);
        console.log("Form Submitted")
    }
    return(
        <div className="user-login">
            <SideImage/>
            <div className="user-login-body">
                <PageTitle title="LOGIN"/>
                <div className="login-form">
                    <form onSubmit={handleSubmit}>
                    <Input type="email" name="email" label="Email" onChange={handleChange} value={values["email"]} error={errors["email"] ? errors["email"] : ''} />
                    <Input type="password" name="password" label="Password" onChange={handleChange} value={values["password"]} error={errors["password"] ? errors["password"] : ''}  />
                    <Button btnStyle="btn-login" type="submit" name="SIGN IN"/>
                    </form>

                </div>
            </div>
        </div>
    )
}
export default Login