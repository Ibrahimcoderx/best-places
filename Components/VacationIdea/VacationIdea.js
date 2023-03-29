import React from 'react'
import { Container } from 'react-bootstrap'
import Link from 'next/link';

import Styles from '../VacationIdea/VacationIdea.module.css'
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLike} from "react-icons/bi";


const VacationIdea = () => {

  return (

    <div>
        
        <Container>

            <div className={Styles.VacationIdeaMain}>

              <div>
                
                  <h4>VACATION MORE IDEAS</h4>

              </div>

              <div>

                  <Link className={Styles.VacationIdeaLink1} href=""><BiLike/> Like 562k</Link>

                  <Link className={Styles.VacationIdeaLink2} href=""><AiOutlineTwitter/> Tweet</Link>

              </div>

            </div>

            <div className={Styles.VacationIdeaHr}></div>

        </Container>

    </div>
  )
}

export default VacationIdea