import style from '../Banner/Banner.module.css'

import Image from 'next/image';
import React from 'react';


const Banner = (props) => {

  return (

    <div>
        
            <div className={style.BannerImg}>
                <Image src={props.BannerImg} />
            </div>

            <div className={style.BannerH1}>
                <h1>{props.BannerH1}</h1>
            </div>

            <div className={style.BannerH1}>
                <h2>{props.BannerH2}</h2>
            </div>

            <div className={style.BannerPTxt}>
                <p>{props.BannerPTxt}</p>
            </div>

    </div>

  )
}

export default Banner