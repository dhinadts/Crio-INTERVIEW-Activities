import { Typography, Stack, IconButton, useMediaQuery } from "@mui/material";
import { Link, useOutletContext } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ThemeContext } from "../../theme/ThemeContext";
import { useContext } from "react";
import styles from "./NavBar.module.css";

export default function Navbar() {
  const { handleMobileMenu } = useOutletContext();
  const isMobile = useMediaQuery("(max-width:800px)"); 
  const { setMode, mode } = useContext(ThemeContext);

  return (
    <Stack
      component="header"
      className={styles.navbar}
      p={{ xs: 2, md: 3 }}
      direction="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Stack direction="row" alignItems="center" spacing={2}>
        {isMobile && (
          <MenuIcon
            className={styles.menuIcon}
            onClick={() => handleMobileMenu((prev) => !prev)}
          />
        )}

        <Link to="/" className={styles.brand}>
          <Typography variant="h1" component="h1">
            Bot AI
          </Typography>
        </Link>
      </Stack>

      <Stack direction="row" spacing={0.2} alignItems="center">
        <Typography className={styles.modeLabel}>
          {mode}
        </Typography>
        <IconButton
          onClick={() =>
            setMode((prev) => (prev === "light" ? "dark" : "light"))
          }
        >
          {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
      </Stack>
    </Stack>
  );
}
