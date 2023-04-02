import React from 'react'
import style from '../LinkGroup/LinkGroup.module.css'
import { Col, Row } from 'react-bootstrap';
import Link from 'next/link'


const LinkGroup = () => {

  return (

    <div>
        
        <div className='padding-gap30'></div>

        <div className="Hr"></div>

        <h2 className={style.LinkGroupH2}>Tips and Ideas for Your Next Adventure</h2>

        <Row>

            <Col xs={12} md={6} lg={4}>

                <div className={style.LinkGroupDiv}>

                    <Link href="">

                        <img src="/images/img7.png" alt="" />

                        <h2 className={style.LinkGroupH22}>Places to Explore from San Francisco</h2>

                    </Link>

                    <h3 className={style.LinkGroupH3}>GETAWAYS</h3>

                    <ul>
                        <li><Link href="">Louisiana</Link> </li>

                        <li><Link href="">California</Link> </li>
                        
                        <li><Link href="">From San Diego</Link> </li>

                        <li><Link href="">From Boston</Link> </li>

                        <li><Link href="">Michigan</Link> </li>

                        <li><Link href="">Maryland</Link> </li>

                        <li><Link href="">Illinois</Link> </li>

                        <li><Link href="">Northern California</Link> </li>

                        <li><Link href="">From Minneapolis</Link> </li>
                        
                        <li><Link href="">Wisconsin</Link> </li>

                    </ul>

                </div>

            </Col>

           
            <Col xs={12} md={6} lg={4}>

                <div className={style.LinkGroupDiv}>

                    <Link href="">

                        <img src="/images/img7.png" alt="" />

                        <h2 className={style.LinkGroupH22}>Getaways from San Francisco</h2>

                    </Link>

                    <h3 className={style.LinkGroupH3}>GETAWAYS</h3>

                    <ul>

                        <li><Link href="">Oregon</Link> </li>
                        
                        <li><Link href="">Napa & Sonoma</Link> </li>

                        <li><Link href="">New Jersey</Link> </li>

                        <li><Link href="">Southern California</Link> </li>

                        <li><Link href="">North Carolina with Kids</Link> </li>

                        <li><Link href="">East Coast Beaches</Link> </li>

                        <li><Link href="">Arizona</Link> </li>

                        <li><Link href="">Virginia</Link> </li>
                        
                        <li><Link href="">Maine</Link> </li>

                        <li><Link href="">Washington State</Link> </li>

                    </ul>

                </div>

            </Col>

           
            <Col xs={12} md={6} lg={4}>

                <div className={style.LinkGroupDiv}>

                    <Link href="">

                        <img src="/images/img7.png" alt="" />

                        <h2 className={style.LinkGroupH22}>Relaxing Weekend Escapes from New York</h2>

                    </Link>

                    <h3 className={style.LinkGroupH3}>GETAWAYS</h3>

                    <ul>
                        <li><Link href="">Indiana</Link> </li>

                        <li><Link href="">Alabama</Link> </li>
                        
                        <li><Link href="">Luxury Trips</Link> </li>

                        <li><Link href="">Honeymoon</Link> </li>

                        <li><Link href="">North Carolina</Link> </li>

                        <li><Link href="">Tennessee Vacation</Link> </li>

                        <li><Link href="">Kentucky</Link> </li>

                        <li><Link href="">West Virginia</Link> </li>

                        <li><Link href="">Minnesota</Link> </li>

                        <li><Link href="">Southwest</Link> </li>

                    </ul>

                </div>

            </Col>

           
        </Row>
    </div>

  )
}

export default LinkGroup