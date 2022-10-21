import React from "react";

import Hexagon from 'react-hexagon';
import Link from "next/link";
import styles from './styles.module.scss';
import NavBar from "../../components/Navbar";

export default function Dashboard(){
    return(
        <div>
            <title>Página inicial</title>
            <NavBar/>
            <div className={styles.container} >
                <div className={styles.containerCenter}>
                    <h1>Trilha do curso</h1>

                    <div className={styles.frontEnd}>
                    <div className={styles.frontHexagono}>
                            <Hexagon className={styles.hexagono} style={{stroke: '#050a30'}}/>
                            <Link href="/Aula">-Lógica de programação</Link>
                        </div>
                        <div className={styles.frontHexagono}>
                            <Hexagon className={styles.hexagono} style={{stroke: '#050a30'}}/>
                            <p>-HTML básico</p>
                        </div>
                        <div className={styles.frontHexagono}>
                            <Hexagon className={styles.hexagono} style={{stroke: '#050a30'}}/>
                            <p>-CSS</p>
                        </div>
                        <div className={styles.frontHexagono}>
                            <Hexagon className={styles.hexagono} style={{stroke: '#050a30'}}/>
                            <p>-Bootstrap</p>
                        </div>
                        <div className={styles.frontHexagono}>
                            <Hexagon className={styles.hexagono} style={{stroke: '#050a30'}}/>
                            <p>-Métodos ágeis com SCRUM</p>
                        </div>
                        <div className={styles.frontHexagono}>
                            <Hexagon className={styles.hexagono} style={{stroke: '#050a30'}}/>
                            <p>-Javascript</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}