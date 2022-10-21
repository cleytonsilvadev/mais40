import Image from 'next/image';

import Logo from '../../../public/Imagens/logo.jpg';
import styles from './styles.module.scss';
import Avatar from '../../../public/Imagens/avatar.png';

import Link from 'next/link';



export default function NavBar(){
    return(
        <div className={styles.sidebar}>
            <div>
                <Image src={Logo} alt="Foto avatar" />
            </div>
            <div className={styles.links}>
            <p >
                    Meu Aprendizado
            </p>
                
            <p>
                Conteúdo
            </p>
            <p>
                Forum
            </p>
            <p>Perfil</p>
            </div>
        </div>
    )
}