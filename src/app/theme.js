'use client'

import { extendTheme } from '@mui/joy/styles';


const theme = extendTheme({
  "colorSchemes": {
    "light": {
      "palette": {
        "primary": {
          "50": "#f0f9ff",
          "100": "#e0f2fe",
          "200": "#bae6fd",
          "300": "#7dd3fc",
          "400": "#38bdf8",
          "500": "#0ea5e9",
          "600": "#0284c7",
          "700": "#0369a1",
          "800": "#075985",
          "900": "#0c4a6e",
          "solidBg": "var(--joy-palette-primary-600)",
          "solidHoverBg": "var(--joy-palette-primary-500)",
          "solidActiveBg": "var(--joy-palette-primary-400)"
        },
        "neutral": {
          "50": "#e0f2f1",
          "100": "#b2dfdb",
          "200": "#80cbc4",
          "300": "#4db6ac",
          "400": "#26a69a",
          "500": "#009688",
          "600": "#00897b",
          "700": "#00796b",
          "800": "#00695c",
          "900": "#004d40"
        },
        "warning": {
          "50": "#fefce8",
          "100": "#fef9c3",
          "200": "#fef08a",
          "300": "#fde047",
          "400": "#facc15",
          "500": "#eab308",
          "600": "#ca8a04",
          "700": "#a16207",
          "800": "#854d0e",
          "900": "#713f12"
        },
        "danger": {
          "50": "#fef2f2",
          "100": "#fee2e2",
          "200": "#fecaca",
          "300": "#fca5a5",
          "400": "#f87171",
          "500": "#ef4444",
          "600": "#dc2626",
          "700": "#b91c1c",
          "800": "#991b1b",
          "900": "#7f1d1d"
        }
      }
    },
    "dark": {
      "palette": {
        "primary": {
          "50": "#f0f9ff",
          "100": "#e0f2fe",
          "200": "#bae6fd",
          "300": "#7dd3fc",
          "400": "#38bdf8",
          "500": "#0ea5e9",
          "600": "#0284c7",
          "700": "#0369a1",
          "800": "#075985",
          "900": "#0c4a6e",
          "solidBg": "var(--joy-palette-primary-700)",
          "solidColor": "var(--joy-palette-common-black)",
          "solidHoverBg": "var(--joy-palette-primary-600)",
          "solidActiveBg": "var(--joy-palette-primary-400)"
        },
        "background": {
          "body": "var(--darkBackground)",
          "surface": "var(--joy-palette-neutral-900)"
        }
      }
    }
  },
  "fontFamily": {
    "display": "'Inter', var(--joy-fontFamily-fallback)",
    "body": "'Inter', var(--font-GeoLg)"
  },
  "components": {
    "JoyInput": {
      "styleOverrides": {},
      "boxShadow": {}
    }
  },
  "input": {
    "caretColor": "var(--Input-focusedHighlight)"
  }
})
  
export default theme;