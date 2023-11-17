'use client'
import React, { useState } from 'react'
import styles from '../styles/mesages.module.css'

const data = [
  'Hello! NextJs is one of the leading javascript framework',
  'You have to challenge yourself today',
  "Don't forget to code everyday"
]

const Mesages = () => {
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
           Step: {step}  {data[step-1]} 
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