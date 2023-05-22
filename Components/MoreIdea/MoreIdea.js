import Link from 'next/link';
import React from 'react'
import styles from '../MoreIdea/MoreIdea.module.css';


const MoreIdea = () => {

  return (

    <div className={styles.MoreIdea}>

        <h5>MORE IDEAS</h5>

        <img src="/images/home/img.png" alt="" />

        <ul>
            <li> <Link href=""> <span>1.</span>Louisiana</Link></li>
            <li> <Link href=""> <span>2.</span>Bahamas</Link></li>
            <li> <Link href=""> <span>3.</span>Jamaica</Link></li>
            <li> <Link href=""> <span>4.</span>Florida</Link></li>
            <li> <Link href=""> <span>5.</span>California</Link></li>
            <li> <Link href=""> <span>6.</span>Maryland</Link></li>
            <li> <Link href=""> <span>7.</span>Fiji</Link></li>
            <li> <Link href=""> <span>8.</span>Weekend Getaways</Link></li>
            <li> <Link href=""> <span>9.</span>Luxury Vacation</Link></li>
            <li> <Link href=""> <span>10.</span>Beaches United states</Link></li>

        </ul>

        
    </div>

  )
}

export default MoreIdea