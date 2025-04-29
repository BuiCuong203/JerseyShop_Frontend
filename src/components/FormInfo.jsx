import React, { useState, useEffect } from 'react'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { CustomTextField, CustomInput, CustomInputLabel } from '../Custom/CustomUi'
import axios from 'axios';

const FormInfo = () => {
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const [selectProvince, setSelectProvince] = useState('');
    const [selectDistrict, setSelectDistrict] = useState('');
    const [selectWard, setSelectWard] = useState('');

    useEffect(() => {
        axios('https://provinces.open-api.vn/api/p')
            .then(response => setProvinces(response.data))
            .catch(error => console.error('Error: ', error));
    }, [])

    useEffect(() => {
        axios(`https://provinces.open-api.vn/api/p/${selectProvince}?depth=2`)
            .then(response => setDistricts(response.data.districts || []))
            .catch(error => console.error('Error: ', error));
    }, [selectProvince])

    useEffect(() => {
        axios(`https://provinces.open-api.vn/api/d/${selectDistrict}?depth=2`)
            .then(response => setWards(response.data.wards || []))
            .catch(error => console.error('Error: ', error));
    }, [selectDistrict])

    const handleSelectProvince = (e) => {
        setSelectProvince(e.target.value)
    }

    const handleSelectDistrict = (e) => {
        setSelectDistrict(e.target.value)
    }

    const handleSelectWard = (e) => {
        setSelectWard(e.target.value)
    }

    return (
        <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
            <CustomTextField
                label="Tên người dùng"
                type="text"
                variant="outlined"
                size="small"
            />

            <CustomTextField
                label="Email"
                type="email"
                variant="outlined"
                size="small"
            />

            <CustomTextField
                label="Số điện thoại"
                type="number"
                variant="outlined"
                size="small"
            />

            <FormControl size="small">
                <CustomInputLabel>Tỉnh / Thành phố</CustomInputLabel>
                <Select
                    input={<CustomInput label="Tỉnh / Thành phố" />}
                    onChange={handleSelectProvince}
                    value={selectProvince}
                >
                    {
                        provinces.map(province =>
                            <MenuItem key={province.code} value={province.code}>{province.name}</MenuItem>
                        )
                    }
                </Select>
            </FormControl>

            <FormControl size="small">
                <CustomInputLabel>Quận / Huyện</CustomInputLabel>
                <Select
                    input={<CustomInput label="Quận / Huyện" />}
                    onChange={handleSelectDistrict}
                    value={selectDistrict}
                >
                    {
                        districts.map(district =>
                            <MenuItem key={district.code} value={district.code}>{district.name}</MenuItem>
                        )
                    }
                </Select>
            </FormControl>

            <FormControl size="small">
                <CustomInputLabel>Xã / Phường</CustomInputLabel>
                <Select
                    input={<CustomInput label="Xã / Phường" />}
                    onChange={handleSelectWard}
                    value={selectWard}
                >
                    {
                        wards.map(ward =>
                            <MenuItem key={ward.code} value={ward.code}>{ward.name}</MenuItem>
                        )
                    }
                </Select>
            </FormControl>

            <CustomTextField
                label="Tên đường, Tòa nhà, Số nhà"
                type="text"
                variant="outlined"
                size="small"
            />
        </div>
    )
}

export default FormInfo
