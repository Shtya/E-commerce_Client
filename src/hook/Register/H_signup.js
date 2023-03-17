import React , {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SignUP } from '../../redux/S_register';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const H_signup = () => {
  const [name , setname] = useState("")
  const [email , setemail] = useState("")
  const [phone , setphone] = useState("")
  const [pass , setpass] = useState("")
  const [passconfirm, setpassconfirm] = useState("")
  const [isload ,setisload] = useState(true)
  const dispatch = useDispatch()
  const User = useSelector(state => state.SliceRegister.user)

  const handleSub = async () => {
    if(name === "") return toast.error("ادخل الاسم")
    if(phone === "") return toast.error("ادخل رقم الهاتف")
    if(email == "") return toast.error("ادخل البريد الالكتروني")
    if(pass == "") return toast.error("ادخل كلمه السر")
    if (passconfirm == "") return toast.error("ادخل تأكيد كلمه السر")
    setisload(true)
    await dispatch(SignUP({name , email , phone ,password:pass , passwordConfirm:passconfirm }))
    setisload(false)
  }

  useEffect(_ => {
    if (isload === false) {
      if (User.errors) {
        toast.error(`${User.errors[0].param} :${User.errors[0].msg}`)
      } else {
        toast.success("تم تسجيل الحساب بنجاح")
        window.location.href =("/")
      }
    }
  },[isload])


  return [setname , name , email , setemail , phone , setphone ,pass , setpass , passconfirm , setpassconfirm , handleSub]
}

export default H_signup