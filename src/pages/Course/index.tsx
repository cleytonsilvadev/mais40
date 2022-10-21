import Header from '../../components/Header';
import Image from 'next/image';
import styles from './styles.module.scss';

import Front from '../../../public/Imagens/front-end.jpg';
import Back from '../../../public/Imagens/back-end.jpg';

export default function Course(){
    return(
        <div>
            <title>Cursos</title>
            <Header/>
            <div className={styles.container} >
                <div className={styles.containerCurso}>
                    <div className={styles.front}>
                        <Image src={Front}/>
                        <p>Nessa trilha você aprenderá HTML, CSS e JavaScript. Essas três linguagens são a base de quase tudo o que você irá fazer.</p>
                    </div>
                    <div className={styles.back}>
                        <Image src={Back}/>
                        <p>O desenvolvimento back-end cuida das engrenagens de uma aplicação web, criando códigos para que as funções sejam executadas.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}