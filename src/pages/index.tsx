import Header from '../components/Header';
import Image from 'next/image';
import styles from '../styles/styles.module.scss';


import Mascote from '../../public/Imagens/Wellington.png';

export default function Course(){
    return(
        <div>
            <title>Página inicial</title>
            <Header/>
            <div className={styles.container} >
                <div className={styles.containerCurso}>
                    <div className={styles.front}>
                    <h1>Projeto +40</h1>
                    <h4>O mercado não dá mais chances para pessoas nessa idade que é triste pois uma pessoa que já vem com uma bagagem de soft skill enorme, como comprometimento, experiência em outras areas, vontade de aprender e ajudar, porque não capacitar as hardskill e colocar esse profissional de volta no mercado e porque não um desafio em uma área nova?</h4>
                    </div>
                    <div className={styles.back}>
                        <Image src={Mascote}/>
                    </div>
                </div>
                <div className={styles.containerTexto}>
                    <div className={styles.missao}>
                        <div className={styles.texto}>
                        <h1> Missão</h1>
                            <h4>Capacitar e integrar pessoas, com 40 anos ou mais, à área de tecnologia e consequentemente ao mercado de trabalho.</h4>    
                        </div>    
                    </div>
                    <div className={styles.visão}>
                        <div className={styles.texto1}>
                        <h1> Visão</h1>
                            <h4>Ser até 2025 referência em plataforma de estudos no Brasil, com crescimento ágil e presente na mente e no coração dos cliente e colaboradores.</h4>    
                        </div>    
                    </div>
                </div>

                <div className={styles.containerTexto1}>
                <div className={styles.missao}>
                        <div className={styles.texto2}>
                        <h1>Valores</h1>
                            <h4>Diversidade, Desenvolvimento, Colaboração, Dedicação, Respeito as pessoas, Inovação e Resiliência.</h4>    
                        </div>    
                    </div>

                </div>
                
            </div>
        </div>
    )
}