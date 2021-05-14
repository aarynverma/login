import {Button} from './components/Button';
import {Inputtypefeild} from './components/Inputfield';
import {Label} from './components/Label';
import {Subbutton} from './components/Subbutton';
import './login.scss';
import { useState } from 'react';

function Login() {
    const [buttontype, setButtontype ] = useState('')
    const [inputFieldType, setinputFieldType ] = useState('')
    const [labelType, setlabelType ] = useState('')
    const [subButtonType, setsubButtonType] = useState('')
  return (
        <div className="container">
            <div className="body">
                <div className="log">
                <Label labeltype='head'/>
                </div>
                <div className="button">
                    <Button buttontype='Google' /> 
                    <Button buttontype='Github' /> 
                    <Button buttontype='Dribbble' /> 
                </div>
                <div className="option">
                    <hr/> 
                        or 
                    <hr/>
                </div>
                <div className="input">
                    <Label labeltype='email'/>
                    <Inputtypefeild inputFieldType='mail' />
                </div>
                <div className="input">
                    <div className="inline">
                        <Label labeltype='pass' />
                                
                        
                        <Subbutton subButtonType='forgot' />  
                    </div>
                    <Inputtypefeild inputFieldType='password' />
                </div>
                <Button buttontype='Arrow' /> 
                <div className="note">Don't have an account on hustlersVilage? <Subbutton subButtonType='sign' /></div>
            </div>

        </div>
  );
}

export default Login;
