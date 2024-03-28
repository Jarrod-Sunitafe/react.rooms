"use client"

import Link from "@mui/joy/Link"
import styles from "./navLinks.module.css"
import { usePathname } from "next/navigation"

const NavLinks = ({item}) => {

    const pathName = usePathname();

    return(
        <Link href={item.path}
        underline="none"
        variant="soft" 
        className={`${styles.container} ${pathName === item.path && styles.active}` }>
            {item.title}
        </Link>
    )
}

export default NavLinks