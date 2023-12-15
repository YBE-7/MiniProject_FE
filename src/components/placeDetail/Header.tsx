import { ArrowBackIos } from '@mui/icons-material'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import React from 'react'
import { useNavigate } from 'react-router';

interface HeaderProps {
  name : string | undefined;
}

export default function Header({name} : HeaderProps) {
  const navigate = useNavigate();

  const handleBackBtnClick = () => {
    navigate(-1);
  }

  const handleHomeBtnClick = () => {
    navigate('/');
  }

  const handleCartBtnClick = () => {
    navigate('/cart');
  }
  return (
    <div className='fixed top-0 left-0 w-full h-[48px] my-auto z-20 shadow-md header bg-white'>
        <div className='w-[768px] flex justify-between h-[48px] m-auto items-center z-10 '>
        <ArrowBackIos className='flex m-2' onClick={handleBackBtnClick}/>
        <span className='flex text-title font-bold '>{name}</span>
        <div className='flex'>
            <div className='w-8'>
            <HomeOutlinedIcon onClick = {handleHomeBtnClick}/>

            </div>
            <div className='w-8'>
            <ShoppingCartOutlinedIcon onClick={handleCartBtnClick} />
            </div>
        </div>
        </div>
    </div>
  )
}
