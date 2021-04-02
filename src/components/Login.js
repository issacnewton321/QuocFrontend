import React from 'react'
import Detail_Portfolio from './Detail_Portfolio'
import './Login.css'
function Login(){
    return(
        <div className='container'>
                <div className='row'>
                    {/* <div className='col-4'>               
                        <Detail_Portfolio />
                        <Detail_Portfolio />
                    </div> */}
                    <div className='col-12'>               
                        <div className="login_container">
                            <div className="login_form">
                                <div className="login_logo">
                                    <i className="fa fa-user-secret" aria-hidden="true"></i>
                                </div>
                                <h3>LOGIN</h3>
                                <div className="username">
                                    <input type="text" name ="username" placeholder="Username"/>
                                </div>
                                <div className="password">
                                    <input type="password" name ="password" placeholder="Password"/>
                                </div>
                                <div className="info">
                                    <a href="#">Create an account</a><br/>
                                    <a href="#">Forget password ?</a>
                                </div>
                                <div className="submit">
                                    <button>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Login