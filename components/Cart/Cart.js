import React from 'react';
import './Cart.scss';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

const Cart = () => {
    const data = [
        {
            id:1,
            img:"https://f97o6kd8uk.a.trbcdn.net/upload_webp/iblock/f43/gog7sdpnbry873kziesungz0rxfqpkt6/4680071407708_mn_mod..jpg/resize/854x3000/?_cvc=1724717661",
            img2: "https://f97o6kd8uk.a.trbcdn.net/upload_webp/iblock/836/odcknf8xwdnzp54594bw8iy4ef390ehx/4680071407708_det_mod..jpg/resize/854x3000/?_cvc=1724717661",
            title: "Jumper with sequins in a pigtail",
            desc:"Jumper with sequins in a pigtail",
            isNew: true,
            oldPrice:19,
            price: 12,

        },
        {
            id:2,
            img:"https://f97o6kd8uk.a.trbcdn.net/upload_webp/iblock/b31/imq4snldfknnrmcxqnn1niitgcj4f4kp/4680071410722_mn_mod..jpg/resize/854x3000/?_cvc=1724717661",
            img2: "https://f97o6kd8uk.a.trbcdn.net/upload_webp/iblock/0e0/kgsj3b44673qcjqltqwpptsno2vxauy5/4680071410722_det_mod..jpg/resize/854x3000/?_cvc=1724717661",
            title: "Cotton shirt dress",
            desc: "Cotton shirt dress",
            isNew: true,
            oldPrice:20,
            price: 15,

        },
    ]
  return (
    <div className='cart'>
        <h1>
            Products in your cart
        </h1>
        {data?.map(item => (
            <div className='item' key={item.id}>
                <img src={item.img} alt="cartimg"/>
                <div className='details'>
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0,100)}</p>
                    <div className='price'> 1 x ${item.price}</div>
                </div>
                <DeleteForeverOutlinedIcon className='delete'/>
             </div>
        ))}
        
        <div className='total'>
            <span>SUBTOTAL</span>
            <span>123$</span>

        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className='reset'>Reset Cart</span>
    </div>
  )
}

export default Cart