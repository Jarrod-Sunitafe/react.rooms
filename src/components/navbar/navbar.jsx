import Links from "./links/links";
import Image from "next/image";
import styles from "./navbar.module.css"
import favicon from "@/app/favicon.ico"

const Navbar = () => {
    return(
        <div>
            
            <div className={styles.container}>
                <Image src={favicon} width={40} height={40} alt="Logo"/>
                <div>
                    <Links/>
                </div>
            </div>
        </div>
    )
}

export default Navbar;