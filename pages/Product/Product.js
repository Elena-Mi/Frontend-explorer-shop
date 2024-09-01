import React, { useState } from 'react';
import './Product.scss';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';

const Product = () => {
  const [selectImg, setSelectImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    'https://f97o6kd8uk.a.trbcdn.net/upload_webp/iblock/ef8/4690589912489_det_mod..jpg/resize/854x3000/?_cvc=1724717661',
    'https://f97o6kd8uk.a.trbcdn.net/upload_webp/iblock/931/4680071380209_mn_mod..jpg/resize/854x3000/?_cvc=1724717661'
  ];
  return (
    <div className='product'>
      <div className='left'>
          <div className='images'>
              <img src={images[0]} alt='tshirtone' onClick={e => setSelectImg(0)}/>
              <img src={images[1]} alt='tshirttwo' onClick={e => setSelectImg(1)}/>
          </div>
          <div className='mainImg'>
            <img src={images[selectImg]} alt="images"/>
          </div>

      </div>
      <div className='right'>
        <h1>Basic soft cotton T-shirt</h1>
        <span className='price'>20$</span>
        <p>
        Cotton T-shirt with short sleeves and a small round neckline. A basic model with a universal straight cut without prints or decoration, suitable for different body types and easily fits into various everyday ensembles
        </p>
        <div className='quantity'>
            <button onClick={ () => setQuantity((prev)  => (prev === 1 ? 1 : prev -1))}>-</button>
            {quantity}
            <button onClick={() => setQuantity((prev) => prev+1) }>+</button>

        </div>
         
         <button className='add'>
            <AddShoppingCartOutlinedIcon/> ADD TO CART
         </button>

         <div className='links'>
            <div className='item'>
                <FavoriteBorderOutlinedIcon/> ADD TO WISH LIST
            </div>

            <div className='item'>
              <AccountTreeOutlinedIcon/> ADD TO COMPARE
            </div>
         </div>
         <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
      </div>
    </div>
  )
}

export default Product