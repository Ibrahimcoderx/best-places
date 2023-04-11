import React from 'react'
import style from '../Banner2/Banner2.module.css'
import Image from 'next/image'

const Banner2 = (props) => {

    const today = new Date();
    const Year = today.getFullYear();
    
  return (

    <div>

        <div className={style.BannerH1}>
            <h1>{props.BannerH1}</h1>
        </div>

        <div className={style.BannerPTxt1}>
            <p>By VacationIda Staff on - {Year} Updated</p>
        </div>
            
        <div className={style.BannerImg}>
            <Image src={props.BannerImg} />
        </div>

        <div className={style.BannerPTxt2}>
            <p>{props.BannerPTxt2}</p>
        </div>

    </div>

  )
}

export default Banner2