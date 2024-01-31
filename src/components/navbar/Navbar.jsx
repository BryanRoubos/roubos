import Links from "@/components/navbar/links/Links";
import styles from "./navbar.module.css";

const Navbar = () => {
    return (
        <header className={styles.container}>    
            <div class={styles.logo}>ROUBOS</div>
            <div>
                <ul>
                    <li>
                        <Links />
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar