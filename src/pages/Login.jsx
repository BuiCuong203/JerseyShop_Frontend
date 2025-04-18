import React, { useState, useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha';
import { CustomTextField } from '../Custom/CustomUi'

const Login = () => {

  const [currentState, setCurrentState] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);
  const recaptchaRef = useRef(null);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    //Logic khi submit form gửi token lên server

    recaptchaRef.current.reset();
    setCaptchaToken(null);
  }

  const onCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
      <p className='prata-regular text-3xl'>{currentState ? 'Đăng ký' : 'Đăng nhập'}</p>
      </div>

      {
        currentState &&
        <CustomTextField
          id="outlined-basic"
          label="Tên người dùng"
          type="text"
          variant="outlined"
          size="small"
          fullWidth
          required
        />
      }
      
      <CustomTextField
        id="outlined-basic"
        label="Email"
        type="email"
        variant="outlined"
        size="small"
        fullWidth
        required
      />

      <CustomTextField
        id="outlined-basic"
        label="Mật khẩu"
        type="password"
        variant="outlined"
        size="small"
        fullWidth
        required
      />

      {
        currentState &&
        <CustomTextField
          id="outlined-basic"
          label="Nhập lại mật khẩu"
          type="password"
          variant="outlined"
          size="small"
          fullWidth
          required
        />
        
      }
      
      {
        currentState &&
        <div className='w-full'>
          <ReCAPTCHA sitekey="6LcMuxUrAAAAAJUjH0M18y7ykDBtpBB6qEWl16-d" onChange={onCaptchaChange} ref={recaptchaRef} />
        </div>
        
      }

      <button className='w-full bg-black text-white font-light px-8 py-2 cursor-pointer'>{currentState ? 'Đăng ký' : 'Đăng nhập'}</button>
      
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Quên mật khẩu</p>
        {
          currentState 
          ? <p onClick={() =>  setCurrentState(false)} className='cursor-pointer'>Đăng nhập ngay</p>
          : <p onClick={() => setCurrentState(true)} className='cursor-pointer'>Tạo tài khoản</p>
        }
      </div>
    </form>
  )
}

export default Login
