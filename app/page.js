'use client'
import Mesages from './components/Mesages'
import styles from './page.module.css'

const data =[
  "Cloudy skies with a chance of rain later. Don't forget your umbrella!",
  "High winds expected in your area. Secure loose items and stay indoors.",
  "Just wanted to say you're doing an awesome job! Keep up the great work"
]

export default function Home() {
  return (
   <div className={styles.main}>
    <Mesages message={data}/>
   </div>
  )
}
