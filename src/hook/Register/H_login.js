import React , {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Login, SignUP } from '../../redux/S_register';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const H_login = () => {
  const [email , setemail] = useState("")
  const [pass , setpass] = useState("")
  const [isload ,setisload] = useState(true)
  const dispatch = useDispatch()
  const User = useSelector(state => state.SliceRegister.user)

  const handleSub = async () => {
    if(email == "") return toast.error("ادخل البريد الالكتروني")
    if(pass == "") return toast.error("ادخل كلمه السر")
    setisload(true)
    await dispatch(Login({ email ,password:pass }))
    setisload(false)
  }

  useEffect(_ => {
    if (isload === false) {
      if (User.message) {
        toast.error(User.message)
      }
      else {
        if (User.token) {
          localStorage.setItem("token", User.token)
          localStorage.setItem("user" , JSON.stringify(User.data))
        } else {
          localStorage.removeItem("token")
        }
        toast.success("تم  الدخول بنجاح")
        window.location.href =("/home")
      }
    }
  },[isload])


  return [ email , setemail  ,pass , setpass , handleSub]
}

export default H_login