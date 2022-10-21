import React from "react";

import Image from "next/image";
import Link from "next/link";
import styles from './styles.module.scss';
import NavBar from "../../components/Navbar";



export default function Aula(){
    return(
        <div>
            <title>Atividade</title>
            <NavBar/>
            <div className={styles.container} >
                <div className={styles.containerCenter}>
                    <h1>Lógica de programação</h1>
                    <h2>Atividade</h2>
                    <div className={styles.pergunta}> 
                        <h3>O que significa concatenar?</h3>
                        <p>Tratar-se de um conjunto de caracteres</p>
                        <p>Configurar o tipo de variavel</p>
                        <p>Dividir duas variaveis</p>
                        <Link href="/Continuar">Unir dados de modo lógico ou manter ligação ou conexão entre eles</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}