import React from 'react';
import './List.scss';
import Card from '../Card/Card';


const List = () => {

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
       
    ]
  return (
    <div className='list'> {data?.map(item => (
             <Card  item={item} key={item.id}/>
    ))}
       
       
    </div>
  )
}

export default List