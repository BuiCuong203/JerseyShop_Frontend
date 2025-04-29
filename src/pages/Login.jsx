import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { FcGoogle } from "react-icons/fc";
import { CustomTextField, CustomInput, CustomInputLabel } from '../Custom/CustomUi'

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const onSubmitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>Đăng nhập</p>
      </div>
      
      <CustomTextField
        label="Email"
        type="email"
        variant="outlined"
        size="small"
        fullWidth
        required
      />

      <FormControl size='small' fullWidth>
        <CustomInputLabel required>Mật khẩu</CustomInputLabel>
        <CustomInput
            type={showPassword ? 'text' : 'password'}
            endAdornment={
                <InputAdornment>
                    <IconButton onClick={handleClickShowPassword} >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </InputAdornment>
            }
            label="Mật khẩu"
            required
        />
      </FormControl>

      <button className='w-full bg-black text-white font-light px-8 py-2 cursor-pointer'>Đăng nhập</button>
      
      <div className='flex justify-between text-md'>
        <p className='pt-2'>Hoặc đăng nhập với</p>
        <div className='border border-gray-300 rounded-full p-1 text-[25px] ml-2 cursor-pointer hover:opacity-75'><FcGoogle /></div>
      </div>

      <div className='flex justify-between text-md'>
          <p>Bạn chưa có tài khoản?</p>
          <u onClick={() => navigate('/register')} className='px-1 cursor-pointer hover:opacity-75'>Đăng ký</u>
      </div>
      <div className='flex justify-between text-md'>
          <u className='px-1 cursor-pointer hover:opacity-75'>Quên mật khẩu</u>
      </div>
    </form>
  )
}

export default Login
