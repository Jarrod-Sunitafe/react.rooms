'use client'

import * as React from 'react'
import Links from "./links/links";
import Image from "next/image";
import styles from "./navbar.module.css"
import favicon from "@/app/favicon.ico"
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import IconButton from '@mui/joy/IconButton';

{/* Icons */}
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';

function ColorSchemeToggle() {
    const { mode, setMode } = useColorScheme('dark');
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => {
      setMounted(true);
    }, []);
    if (!mounted) {
      return null;
    }
    return (
      <IconButton
        id="toggle-mode"
        size="lg"
        variant="soft"
        color="neutral"
        onClick={() => {
          if (mode === 'light') {
            setMode('dark');
          } else {
            setMode('light');
          }
        }}
        sx={{
          position: 'fixed',
          zIndex: 999,
          top: '1rem',
          right: '1rem',
          borderRadius: '50%',
          boxShadow: 'sm',
        }}
      >
        {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
      </IconButton>
    );
  }
     

const Navbar = () => {
    return(
        <div>
            
            <div className={styles.container}>
                <Image src={favicon} width={40} height={40} alt="Logo"/>
                <div>
                    <Links/>
                </div>
                <div>
                    <ColorSchemeToggle/>
                </div>
            </div>
        </div>
    )
}

export default Navbar;