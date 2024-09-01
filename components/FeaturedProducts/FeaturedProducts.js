import React from 'react';
import './FeaturedProducts.scss'
import Card from '../Card/Card';


const FeaturedProducts = ({type}) => {

   
    const data = [
        {
            id:1,
            img:"https://f97o6kd8uk.a.trbcdn.net/upload_webp/iblock/f43/gog7sdpnbry873kziesungz0rxfqpkt6/4680071407708_mn_mod..jpg/resize/854x3000/?_cvc=1724717661",
            img2: "https://f97o6kd8uk.a.trbcdn.net/upload_webp/iblock/836/odcknf8xwdnzp54594bw8iy4ef390ehx/4680071407708_det_mod..jpg/resize/854x3000/?_cvc=1724717661",
            title: "Jumper with sequins in a pigtail",
            isNew: true,
            oldPrice:19,
            price: 12,

        },
        {
            id:2,
            img:"https://f97o6kd8uk.a.trbcdn.net/upload_webp/iblock/b31/imq4snldfknnrmcxqnn1niitgcj4f4kp/4680071410722_mn_mod..jpg/resize/854x3000/?_cvc=1724717661",
            img2: "https://f97o6kd8uk.a.trbcdn.net/upload_webp/iblock/0e0/kgsj3b44673qcjqltqwpptsno2vxauy5/4680071410722_det_mod..jpg/resize/854x3000/?_cvc=1724717661",
            title: "Cotton shirt dress",
            isNew: true,
            oldPrice:20,
            price: 15,

        },
        {
            id:3,
            img:"https://f97o6kd8uk.a.trbcdn.net/upload_webp/iblock/597/4680071325644_mn_mod..jpg/resize/854x3000/?_cvc=1724717661",
            img2: "https://f97o6kd8uk.a.trbcdn.net/upload_webp/iblock/825/4680071325644_bc_mod..jpg/resize/854x3000/?_cvc=1724717661",
            title: "Cotton shirt with stand-up collar",
            isNew: true,
            oldPrice:25,
            price: 18,

        },
        {
            id:4,
            img:"https://f97o6kd8uk.a.trbcdn.net/upload_webp/iblock/fcd/4680071341422_mn_mod..JPG/resize/854x3000/?_cvc=1724717661",
            img2: "https://f97o6kd8uk.a.trbcdn.net/upload_webp/iblock/65e/4680071341422_det_mod..JPG/resize/854x3000/?_cvc=1724717661",
            title: "Relaxed cardigan",
            isNew: true,
            oldPrice:27,
            price: 19,

        },
    ]
  return (
    <div className="featuredProducts">
         <div className="top">
            <h1>{type} products</h1>
            <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
            </p>
        </div>

        <div className="bottom">
         {data.map((item) => <Card item={item} key={item.id} />)}
         </div>
    </div>
  )
}

export default FeaturedProducts