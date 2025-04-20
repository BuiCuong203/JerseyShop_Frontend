import React, {useState, useRef} from 'react'
import ReCAPTCHA from 'react-google-recaptcha';
import { useNavigate } from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { CustomTextField, CustomInput, CustomInputLabel } from '../Custom/CustomUi'

const Register = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [captchaToken, setCaptchaToken] = useState(null);
    const recaptchaRef = useRef(null);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

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
                <p className='prata-regular text-3xl'>Đăng ký</p>
            </div>

            <CustomTextField
                label="Tên người dùng"
                type="text"
                size="small"
                fullWidth
                required
            />
            
            <CustomTextField
                label="Email"
                type="email"
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

            <FormControl size='small' fullWidth>
                <CustomInputLabel required>Nhập lại mật khẩu</CustomInputLabel>
                <CustomInput
                    type={showConfirmPassword ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment>
                            <IconButton onClick={handleClickShowConfirmPassword} >
                                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Nhập lại mật khẩu"
                    required
                />
            </FormControl>
            
            <div className='w-full'>
                <ReCAPTCHA sitekey="6LcMuxUrAAAAAJUjH0M18y7ykDBtpBB6qEWl16-d" onChange={onCaptchaChange} ref={recaptchaRef} />
            </div>

            <button className='w-full bg-black text-white font-light px-8 py-2 cursor-pointer'>Đăng ký</button>
            
            <div className='flex justify-between text-md'>
                <p>Bạn đã có tài khoản?</p>
                <u onClick={() => navigate('/login')} className='px-1 cursor-pointer hover:opacity-75'>Đăng nhập ngay</u>
            </div>
        </form>
    )
}

export default Register
