'use client'
import React, { useState } from 'react'
import styles from '../styles/mesages.module.css'

const Mesages = ({message}) => {
    const [isOpen, setIsOpen]= useState(true)
    const [step,setStep] = useState(1)
     const handleNext =()=>{
        if(step<3) setStep(c=>c+1)
        console.log(step)
    }
    
    const handlePrev=()=>{
        if(step>1) setStep(c=>c-1)
        console.log(step)
    }

  return (
    <>
    <div className={styles.toggle}onClick={()=>setIsOpen(!isOpen)}>{isOpen?'X':'M'}</div>
    {
        isOpen &&
    
    <div className={styles.container}>
        <div className={styles.stepContainer}>
            <span className={step===1?styles.active:styles.steps}>1</span>
            <span className={step===2?styles.active:styles.steps}>2</span>
            <span className={step===3?styles.active:styles.steps}>3</span>
        </div>
        <div className={styles.message}>
           {step} : {message[step-1]} 
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