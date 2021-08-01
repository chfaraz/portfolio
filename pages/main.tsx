import { ReactElement } from 'react'
import styles from '../styles/main.module.scss'

const Main: React.FC = (): ReactElement => {
     return (
          <div className={styles.main}>
               <div className={styles.intro}>
                    <h1>FARAZ</h1>
                    <h1>AHMED</h1>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <p>
                         Full Stack Web <br /> And Mobile Developer.
                    </p>
               </div>
               <div className={styles.blob_side}>
                    <div
                         style={{ top: '20%', left: '33%' }}
                         className={styles.circle}
                    ></div>
                    <div
                         style={{ top: '12%', left: '20%' }}
                         className={styles.circle}
                    ></div>
                    <div
                         style={{ top: '40%', left: '12%' }}
                         className={styles.circle}
                    ></div>
                    <div
                         style={{ top: '8%', left: '72%' }}
                         className={styles.circle}
                    ></div>
                    <div
                         style={{ top: '80%', left: '80%' }}
                         className={styles.circle}
                    ></div>
                    <div
                         style={{ top: '70%', left: '94%' }}
                         className={styles.circle}
                    ></div>
                    <div
                         style={{ top: '80%', left: '43%' }}
                         className={styles.circle}
                    ></div>
                    <div
                         style={{ top: '60%', left: '32%' }}
                         className={styles.circle}
                    ></div>
                    <div
                         style={{ top: '19%', left: '54%' }}
                         className={styles.circle}
                    ></div>
                    <div
                         style={{ top: '73%', left: '62%' }}
                         className={styles.circle}
                    ></div>
                    <div className={styles.moon}>
                         <svg
                              viewBox="0 0 100 100"
                              className={styles.first_blob}
                              width="100px"
                              height="100px"
                              xmlns="http://www.w3.org/2000/svg"
                         >
                              <path
                                   fill="rgba(234.687, 234.687, 234.687, 1)"
                                   d="M27.1,0C27.1,13.9,13.5,27.8,0.4,27.8C-12.8,27.8,-25.5,13.9,-25.5,0C-25.5,-13.9,-12.8,-27.8,0.4,-27.8C13.5,-27.8,27.1,-13.9,27.1,0Z"
                                   width="100%"
                                   height="100%"
                                   transform="translate(50 50)"
                              ></path>{' '}
                         </svg>
                         <svg
                              viewBox="0 0 100 100"
                              className={styles.second_blob}
                              width="150px"
                              height="150px"
                              xmlns="http://www.w3.org/2000/svg"
                         >
                              <path
                                   fill="rgba(234.687, 234.687, 234.687, 1)"
                                   d="M34.3,-20.6C39.7,-10.4,36.2,4.2,28.9,16.2C21.7,28.2,10.9,37.5,-1.3,38.2C-13.4,39,-26.9,31.1,-34,19.2C-41.2,7.3,-42.1,-8.8,-35.4,-19.7C-28.6,-30.7,-14.3,-36.6,0,-36.6C14.4,-36.6,28.8,-30.8,34.3,-20.6Z"
                                   width="100%"
                                   height="100%"
                                   transform="translate(50 50)"
                              ></path>{' '}
                         </svg>
                         <svg
                              viewBox="0 0 100 100"
                              className={styles.third_blob}
                              width="100px"
                              height="100px"
                              xmlns="http://www.w3.org/2000/svg"
                         >
                              <path
                                   fill="rgba(234.687, 234.687, 234.687, 1)"
                                   d="M21.6,-29.7C27.6,-25.4,31.8,-18.6,35.2,-10.8C38.5,-3.1,41.1,5.6,39.2,13.1C37.3,20.7,30.9,27.3,23.7,31.3C16.4,35.4,8.2,36.9,0,37C-8.2,37,-16.5,35.5,-23.8,31.5C-31.2,27.5,-37.7,20.9,-39.9,13.2C-42.2,5.4,-40.2,-3.5,-37.4,-12.2C-34.6,-20.9,-31.1,-29.4,-24.7,-33.6C-18.4,-37.8,-9.2,-37.7,-0.7,-36.7C7.8,-35.8,15.6,-34,21.6,-29.7Z"
                                   width="100%"
                                   height="100%"
                                   transform="translate(50 50)"
                              ></path>{' '}
                         </svg>
                    </div>
               </div>
          </div>
     )
}
export default Main
