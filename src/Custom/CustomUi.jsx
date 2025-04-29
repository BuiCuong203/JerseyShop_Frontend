import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import { styled } from '@mui/material/styles';

export const CustomTextField = styled(TextField) ({
    '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
            borderColor: 'black',
        },
    },
    '& label.Mui-focused': {
        color: 'black',
    },
    '& input[type=number]': {
        '&::-webkit-inner-spin-button': {
            WebkitAppearance: 'none',
            margin: 0,
        }
    },
});

export const CustomInput = styled(OutlinedInput)({
    '&.MuiOutlinedInput-root': {
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'black',
        }
    }
});

export const CustomInputLabel = styled(InputLabel) ({
    '&.Mui-focused': {
      color: 'black'
    }
});