'use client'
import React, { useState } from 'react'
import styles from '../styles/mesages.module.css'

const data =[
  "Cloudy skies with a chance of rain later. Don't forget your umbrella!",
  "High winds expected in your area. Secure loose items and stay indoors.",
  "Just wanted to say you're doing an awesome job! Keep up the great work"
]

const Mesages = () => {
  const [steps,setSteps] = useState(1)
  const [isOpen,setIsOpen] = useState(true)
  
  const handleNext = ()=>{
 if(steps!==3) setSteps(curr=>curr+1)
  }
  
  const handlePrev=()=>{
    if(steps!==1) setSteps(curr=>curr-1)
  }

  const handleIsOpen =()=>{
    setIsOpen(!isOpen)
  }
  return (
    <>
    <div className={styles.toggle} onClick={handleIsOpen}>{isOpen?'X':'M'}</div>
   {
    isOpen &&



    <div className={styles.container}>
        <div className={styles.stepContainer}>
            <span className={steps===1?styles.active:styles.step}>1</span>
            <span className={steps===2?styles.active:styles.step}>2</span>
            <span className={steps===3?styles.active:styles.step}>3</span>
        </div>
        <div className={styles.message}>
           Step:{steps} {data[steps-1]}
        </div>
        <div className={styles.btnContainer}>
            <button className={styles.btn} onClick={handlePrev}>Previous</button>
            <button className={styles.btn} onClick={handleNext}>Next</button>
        </div>
    </div>
   }

    </>
  )
}

export default Mesages