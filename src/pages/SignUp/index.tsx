import React from "react";
import styles from './styles.module.scss';
import Image from "next/image";
import Link from "next/link";

import Logo from '../../../public/Imagens/logo.jpg';

import {useState} from 'react';

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        
        <div className={styles.container}>
            <title>Criar conta</title>
        <div className={styles.containerLogin}>
            <div className={styles.wrapLogin}>
            <div className={styles.logo}>
                <Image src={Logo} alt="Imagem de logo"/>
            </div>
            <form className={styles.loginForm}>
                <span className={styles.loginFormTitle}> Bem-vindo! </span>

                <span className={styles.loginFormTitle}>
                <Image src='' className={styles.imagem} alt="+40 Programador" />
                </span>
                <div className={styles.wrapInput}>
                <input
                    className={email !== "" ? "has-val input" : styles.input}
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <span className={styles.focusInput} data-placeholder="Seu nome aqui"></span>
                </div>

                <div className={styles.wrapInput}>
                <input
                    className={email !== "" ? "has-val input" : styles.input}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <span className={styles.focusInput} data-placeholder="Email"></span>
                </div>

                <div className={styles.wrapInput}>
                <input
                    className={password !== "" ? "has-val input" : styles.input}
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <span className={styles.focusInput} data-placeholder="Password"></span>
                </div>

                <div className={styles.containerLoginFormBtn}>
                <Link href="/home" className={styles.loginFormBtn}>Criar conta</Link>
                </div>

                <div className={styles.textCenter}>
                
                <a className={styles.txt2} href="/">
                Login
                </a>
                <a className={styles.txt3} href="/Recover">
                    Esqueci a senha
                </a>
                </div>
            </form>
            </div>
        </div>
        </div>
    );
}
