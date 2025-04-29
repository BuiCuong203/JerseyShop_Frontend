import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import EmptyCart from '../components/EmptyCart';
import { TiDeleteOutline } from "react-icons/ti";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { RiDeleteBinLine } from "react-icons/ri";

const Cart = () => {

  const {products, currency, cartItems, updateQuantity, navigate} = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    const tempData = [];
    for(const item in cartItems){
      for(const size in cartItems[item]){
        if(cartItems[item][size] > 0 && size){
          tempData.push({
            id: item,
            size: size,
            quantity: cartItems[item][size]
          });
        }
      }
    }
    setCartData(tempData)
  }, [cartItems])

  const handleSelectAllClick = (e) => {
    if (e.target.checked) {
      const newSelected = cartData.map((item, index) => index);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (index) => (event) => {
    const selectedIndex = selected.indexOf(index);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, index);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  return cartData.length ? (
    <div className='border-t pt-14 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[5vw]'>
      <div className='text-2xl mb-3'>
        <Title text={'GIỎ HÀNG'} />
      </div>

      <Paper sx={{ width: '100%', mb: 2 }}>
        <Toolbar>
          <Typography sx={{ flex: '1 1 100%' }}>
            {selected.length > 0 ? `${selected.length} mục` : ''}
          </Typography>
          <Tooltip>
            <IconButton>
              {selected.length > 0 ? <RiDeleteBinLine /> : ''}
            </IconButton>
          </Tooltip>
        </Toolbar>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    indeterminate={selected.length > 0 && selected.length < cartData.length}
                    checked={selected.length > 0 && selected.length === cartData.length}
                    onChange={handleSelectAllClick}
                  />
                </TableCell>
                <TableCell align={'left'}>Sản phẩm</TableCell>
                <TableCell align={'left'}>Số lượng</TableCell>
                <TableCell align={'left'}>Xóa</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                cartData.map((item, index) => {
                  const isItemSelected = selected.includes(index);
                  const productData = products.find((product) => product._id === item.id);

                  return (
                    <TableRow key={index}>
                      <TableCell padding="checkbox">
                        <Checkbox
                            onClick={handleClick(index)}
                            color="primary"
                            checked={isItemSelected}
                        />
                      </TableCell>
                      <TableCell>
                        <div className='flex items-start gap-6'>
                          <img className='w-16 sm:w-20' src={productData.image[0]} alt='' />

                          <div>
                            <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>

                            <div className='flex items-center gap-5 mt-2'>
                              <p>{productData.price}{currency}</p>
                              <p className='px-2 sm:px-3 sm:py-1 bg-slate-50'>{item.size}</p>
                            </div>
                          </div>
                        </div>
                      </TableCell>

                      <TableCell>
                        <div className='relative right-[30px] text-gray-500 text-2xl font-medium'>
                          <button onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)} className='px-3 cursor-pointer'>-</button>
                          <input
                            onChange={(e) => Number(e.target.value) === 0 ? updateQuantity(item.id, item.size, 1) : updateQuantity(item.id, item.size, Number(e.target.value))}
                            className='w-15 text-gray-600 text-xl text-center focus:outline-none [&::-webkit-inner-spin-button]:appearance-none'
                            type="number"
                            min={1}
                            value={item.quantity}
                          />
                          <button onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)} className='px-3 cursor-pointer'>+</button>
                        </div>
                      </TableCell>

                      <TableCell>
                        <TiDeleteOutline onClick={() => updateQuantity(item.id, item.size, 0)} className='text-[25px] cursor-pointer' />
                      </TableCell>
                  </TableRow>
                  );
                })
              }
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal />
          <div className='w-full text-end'>
            <button onClick={() => navigate('/place-order')} className='bg-black text-white text-sm my-8 px-8 py-3 cursor-pointer'>THANH TOÁN</button>
          </div>
        </div>
      </div>
    </div>
  ) : <EmptyCart />
}

export default Cart
