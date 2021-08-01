import { ReactElement } from 'react'
import Image from 'next/image'
import styles from '../styles/header.module.scss'

const Header: React.FC = (): ReactElement => {
     return (
          <header className={styles.header}>
               <h1>Faraz Ahmed</h1>
               <div className={styles.headerIcons}>
                    <Image src="github.svg" alt="" width="30px" height="30px" />
                    <Image
                         src="linkedin.svg"
                         alt=""
                         width="30px"
                         height="30px"
                    />
               </div>
          </header>
     )
}
export default Header
