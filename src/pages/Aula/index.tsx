import React from "react";

import Image from "next/image";
import Link from "next/link";
import styles from './styles.module.scss';
import NavBar from "../../components/Navbar";

import videoAula from '../../../public/Imagens/videoaula.jpg';

export default function Aula(){
    return(
        <div>
            <title>Página inicial</title>
            <NavBar/>
            <div className={styles.container} >
                <div className={styles.containerCenter}>
                    <h1>Lógica de programação </h1>
                    <Image src={videoAula}/>
                    <Link href='/Atividade'>Avançar</Link>
                </div>
            </div>
        </div>
    )
}