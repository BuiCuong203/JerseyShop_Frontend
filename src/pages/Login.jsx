import React, { useState, useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha';

const Login = () => {

  const [currentState, setCurrentState] = useState('Đăng nhập');
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
        <p className='prata-regular text-3xl'>{currentState}</p>
      </div>

      {currentState === 'Đăng nhập' ? '' : <input className='w-full px-3 py-2 border border-gray-800' type="text" placeholder='Tên người dùng' required />}
      <input className='w-full px-3 py-2 border border-gray-800' type="email" placeholder='Email' required />
      <input className='w-full px-3 py-2 border border-gray-800' type="password" placeholder='Mật khẩu' required />
      {currentState === 'Đăng nhập' ? '' : <input className='w-full px-3 py-2 border border-gray-800' type="password" placeholder='Nhập lại mật khẩu' required />}
      {
        currentState === 'Đăng nhập'
        ? ''
        : 
        <div className='w-full'>
          <ReCAPTCHA sitekey="6LcMuxUrAAAAAJUjH0M18y7ykDBtpBB6qEWl16-d" onChange={onCaptchaChange} ref={recaptchaRef} />
        </div>
      }

      <button className='w-full bg-black text-white font-light px-8 py-2 cursor-pointer'>{currentState === 'Đăng nhập' ? 'Đăng nhập' : 'Đăng ký'}</button>
      
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Quên mật khẩu</p>
        {
          currentState === 'Đăng nhập'
          ? <p onClick={() => setCurrentState('Đăng ký')} className='cursor-pointer'>Tạo tài khoản</p>
          : <p onClick={() =>  setCurrentState('Đăng nhập')} className='cursor-pointer'>Đăng nhập ngay</p>
        }
      </div>
    </form>
  )
}

export default Login
