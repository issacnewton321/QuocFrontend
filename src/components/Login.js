
import React,{useState} from 'react'
import Detail_Portfolio from './Detail_Portfolio'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import './Login.css'
function Login(){
    let history =useHistory();
    let userInfo = null;
    const myStorage = window.localStorage;
    const [login,setLogin] = useState({})
    const alterInput = (e)=>{
        const {value,name} = e.target;
        setLogin({
            ...login,
            [name]:value
        })
        //console.log(login)
    }
    const handleSubmit = ()=>{
        axios.post(process.env.REACT_APP_API +'authenticate',login)
        .then(response => {
            myStorage.setItem('jwt',response.data.jwt)
            axios.get(process.env.REACT_APP_API +'nguoidung/'+login.username,{headers:{authorization: 'Bearer ' + response.data.jwt}})
            .then(response =>{
                userInfo=()=>{
                    if(response.data.quyen ==1){
                        return {
                            username:'Admin',
                            quyen:1
                        }
                    }
                    else if(response.data.quyen ==2)
                    return {
                        username:response.data.username,
                        quyen:2,
                        khachhang:response.data.khachhang
                    }
                    else if(response.data.quyen ==3)
                    return {
                        username:response.data.username,
                        quyen:3,
                        nhanvien:response.data.nhanvien
                    }
                }
                //console.log(userInfo())
                myStorage.setItem('user',JSON.stringify(userInfo()))
                if(response.data.quyen == 1)
                    history.push("/admin/index")
                else if(response.data.quyen == 2)
                    history.push("/")
            })
        })
        .catch(erro => alert('login thất bại !!!'))
    }
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
                                <h3>ĐĂNG NHẬP</h3>
                                <div className="username">
                                    <input type="text" name ="username" placeholder="Username" value={login.usename} onChange={alterInput} required/>
                                </div>
                                <div className="password">
                                    <input type="password" name ="password" placeholder="Password" value={login.password} onChange={alterInput} required/>
                                </div>
                                <div className="info">
                                    <a href="#">Tạo tài khoản</a><br/>
                                    <a href="#">Quên mật khẩu ?</a>
                                </div>
                                <div className="submit" type="submit">
                                    <button onClick={handleSubmit}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Login