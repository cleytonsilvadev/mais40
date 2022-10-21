import Image from 'next/image';

import Logo from '../../../public/Imagens/logo.jpg';
import styles from './styles.module.scss';

import Link from 'next/link';


export default function NavBar(){
    return(
        <div className={styles.sidebar}>
            <div>
                <Image src={Logo} alt="Foto avatar" />
            </div>
            <div className={styles.links}>
            <Link href="/">
                    Home
                </Link>
                
                <Link href="/Course">

                    Cursos
                </Link>
                <Link href="/SignIn">
                    Login
                </Link>
            </div>
        </div>
    )
}