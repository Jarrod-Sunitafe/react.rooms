import Link from "next/link"
import Image from "next/image";
import styles from "./navbar.module.css"
import favicon from "@/app/favicon.ico"

const Navbar = () => {
    return(
        <div>
            
            <div className={styles.container}>
                <Image src={favicon} width={40} height={40} alt="Logo"/>
                <div>
                    <Link href={"/dashboard"}>Dashboard</Link>
                    <Link href={"/agents"}>Agents</Link>
                    <Link href={"/devices"}>Devices</Link>
                    <Link href={"/rooms"}>Rooms</Link>
                    <Link href={"/collectors"}>Collectors</Link>  
                </div>
            </div>
        </div>
    )
}

export default Navbar;