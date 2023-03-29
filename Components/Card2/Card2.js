import React from 'react'
import style from '../Card2/Card2.module.css'
import Image from 'next/image';
const Card2 = (props) => {

  return (

    <div>
    
        <div className={style.CardItem}>
            <Image src={props.CardImg} />
        </div>

        <div className={style.CardH2}>
            <h2>{props.CardH2}</h2>
        </div>

    </div>

  )
}

export default Card2