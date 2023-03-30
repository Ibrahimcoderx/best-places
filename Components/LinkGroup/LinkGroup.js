import React from 'react'
import style from '../LinkGroup/LinkGroup.module.css'
import { Col, Row } from 'react-bootstrap';
import Link from 'next/link'


const LinkGroup = () => {

  return (

    <div>
        
        <div className='padding-gap30'></div>

        <div className="Hr"></div>

        <h2 className={style.LinkGroupH2}>WEEKEND GETAWAYS & VACATION IDEAS</h2>

        <Row>

            <Col xs={12} md={6} lg={4}>

                <div className={style.LinkGroupDiv}>

                    <Link href="">

                        <img src="/images/img7.png" alt="" />

                        <h2 className={style.LinkGroupH22}>Getaways from San Francisco</h2>

                    </Link>

                    <h3 className={style.LinkGroupH3}>GETAWAYS</h3>

                    <ul>
                        <li><Link href="">Louisiana</Link> </li>

                        <li><Link href="">California</Link> </li>
                        
                        <li><Link href="">California</Link> </li>

                        <li><Link href="">Louisiana</Link> </li>

                        <li><Link href="">California</Link> </li>

                        <li><Link href="">California</Link> </li>

                        <li><Link href="">Louisiana</Link> </li>

                        <li><Link href="">California</Link> </li>

                        <li><Link href="">California</Link> </li>
                        
                        <li><Link href="">California</Link> </li>

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
                        <li><Link href="">Louisiana</Link> </li>

                        <li><Link href="">California</Link> </li>
                        
                        <li><Link href="">California</Link> </li>

                        <li><Link href="">Louisiana</Link> </li>

                        <li><Link href="">California</Link> </li>

                        <li><Link href="">California</Link> </li>

                        <li><Link href="">Louisiana</Link> </li>

                        <li><Link href="">California</Link> </li>

                        <li><Link href="">California</Link> </li>

                        <li><Link href="">California</Link> </li>

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
                        <li><Link href="">Louisiana</Link> </li>

                        <li><Link href="">California</Link> </li>
                        
                        <li><Link href="">California</Link> </li>

                        <li><Link href="">Louisiana</Link> </li>

                        <li><Link href="">California</Link> </li>

                        <li><Link href="">California</Link> </li>

                        <li><Link href="">Louisiana</Link> </li>

                        <li><Link href="">California</Link> </li>

                        <li><Link href="">California</Link> </li>

                        <li><Link href="">California</Link> </li>

                    </ul>

                </div>

            </Col>

           
        </Row>
    </div>

  )
}

export default LinkGroup