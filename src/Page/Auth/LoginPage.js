import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import H_login from '../../hook/Register/H_login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
  const [ email , setemail  ,pass , setpass , handleSub]=H_login()
    return (
<Container  style={{ minHeight: "680px" }}>
    <Row className="py-5 d-flex justify-content-center ">
        <Col sm="12" className="d-flex flex-column form ">
            <label className="mx-auto title-login">تسجيل الدخول</label>
            <input
                value={email} onChange={e=> setemail(e.target.value)}
                placeholder="الايميل..."
                type="text"
                className="user-input my-3 text-center mx-auto"
            />
            <input
                value={pass} onChange={e=> setpass(e.target.value)}
                placeholder="كلمه السر..."
                type="password"
                        className="user-input text-center mx-auto"
                        
            />
            <button className="btn-login mx-auto mt-4" onClick={handleSub}>تسجيل الدخول</button>
            <label className="mx-auto my-4">ليس لديك حساب ؟
                <Link to="/register" style={{textDecoration:'none'}}>
                    <span style={{ cursor: "pointer" }} className="text-danger">اضغط هنا</span>
                </Link>
            </label>
        </Col>


        </Row>
        <ToastContainer />
</Container>
    )
}

export default LoginPage
