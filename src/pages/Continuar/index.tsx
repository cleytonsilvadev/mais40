import React from "react";

import Image from "next/image";
import Link from "next/link";
import styles from './styles.module.scss';
import NavBar from "../../components/Navbar";
import Certo from '../../../public/Imagens/correto.png';



export default function Continuar(){
    return(
        <div>
            <title>Atividade</title>
            <NavBar/>
            <div className={styles.container} >
                <div className={styles.containerCenter}>
                    <h1>Lógica de programação</h1>
                    <h2>Correto</h2> 
                        <Image src={Certo}/>
                        <Link href="/Dashboard">Avançar</Link>
                    </div>
                </div>
            </div>
    )
}