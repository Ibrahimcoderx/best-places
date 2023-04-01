import React from 'react'
import style from '../Card3/Card3.module.css'
import Image from 'next/image'

const Card3 = (props) => {
  return (

    <div className={style.Card3}>
    
        <div className={style.CardItem}>
            <Image src={props.CardImg} />
        </div>

        <div className={style.CardH2}>
            <h2>{props.CardH2}</h2>
        </div>

    </div>

  )
}

export default Card3