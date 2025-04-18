import React from 'react'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { CustomTextField, CustomInput, CustomInputLabel } from '../Custom/CustomUi'

const FormInfo = () => {

    return (
        <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
            <CustomTextField
                id="outlined-basic"
                label="Tên người dùng"
                type="text"
                variant="outlined"
                size="small"
            />

            <CustomTextField
                id="outlined-basic"
                label="Email"
                type="email"
                variant="outlined"
                size="small"
            />

            <CustomTextField
                id="outlined-basic"
                label="Số điện thoại"
                type="number"
                variant="outlined"
                size="small"
            />

            <FormControl size="small">
                <CustomInputLabel id="demo-select-small-label">Tỉnh / Thành phố</CustomInputLabel>
                <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    input={<CustomInput label="Tỉnh / Thành phố" />}
                >
                    <MenuItem value={`10`}>Ten</MenuItem>
                    <MenuItem value={`20`}>Twenty</MenuItem>
                    <MenuItem value={`30`}>Thirty</MenuItem>
                </Select>
            </FormControl>

            <FormControl size="small">
                <CustomInputLabel id="demo-select-small-label">Quận / Huyện</CustomInputLabel>
                <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    input={<CustomInput label="Quận / Huyện" />}
                >
                    <MenuItem value={`10`}>Ten</MenuItem>
                    <MenuItem value={`20`}>Twenty</MenuItem>
                    <MenuItem value={`30`}>Thirty</MenuItem>
                </Select>
            </FormControl>

            <FormControl size="small">
                <CustomInputLabel id="demo-select-small-label">Xã / Phường</CustomInputLabel>
                <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    input={<CustomInput label="Xã / Phường" />}
                >
                    <MenuItem value={`10`}>Ten</MenuItem>
                    <MenuItem value={`20`}>Twenty</MenuItem>
                    <MenuItem value={`30`}>Thirty</MenuItem>
                </Select>
            </FormControl>

            <CustomTextField
                id="outlined-basic"
                label="Tên đường, Tòa nhà, Số nhà"
                type="text"
                variant="outlined"
                size="small"
            />
        </div>
    )
}

export default FormInfo
