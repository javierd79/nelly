import { useEffect, useState } from "react"
import { Text, createStyles } from "@mantine/core"
import { useViewportSize } from '@mantine/hooks';

interface INavbar { }


function Navbar({ }: INavbar) {
  const [open, setOpen] = useState<boolean>(false)
  const { width } = useViewportSize();

  useEffect(() => {
    if (width > 768) setOpen(false)
  }, [width])

  const useStyles = createStyles((theme) => ({
    navbar: {
      padding: theme.spacing.xl,
      width: '100%',
      borderRadius: "7px",
    },
    wrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%'
    },
    logoContainer: {
      width: '100px',
      height: 'auto'
    },
    item: {
      cursor: 'pointer',
      transition: 'color 0.3s ease',
      "@media(max-width: 768px)": {
        padding: '10px 20px',
        textAlign: 'center',
        '&:hover': {
          background: theme.colors.grape[1],
          transition: 'background 0.6s ease',
        }
      },
      '&:hover': {
        color: theme.colors.red[7]
      }
    },
    navbarMenu: {
      "@media(min-width: 768px)": {
        display: 'none'
      },
      "&:hover": {
        cursor: 'pointer'
      }
    },
    navList: {
      display: 'flex',
      gap: theme.spacing.xl,
      animation: open ? 'slideDown 0.25s forwards' : 'slideUp 0.25s forwards',
      marginTop: "55px",
      "@media(max-width: 768px)": {
        position: 'absolute',
        width: '100%',
        background: '#fff',
        margin: '20px 0 0 -25px',
        flexDirection: 'column',
      }
    },
    logo: {
      textAlign: 'center',
      padding: '10px 20px',
      border: '2px dashed #3023AE',
      userSelect: 'none'
    },
    hamburgerLeft: {
      width: 30,
      height: 2,
      backgroundColor: "#000",
      marginBottom: 5,
      transform: open ? 'rotate(45deg) translate(5.7px, -1px)' : 'none',
      transition: 'transform 0.3s ease-in-out',
    },
    hamburgerMiddle: {
      width: 30,
      height: 2,
      backgroundColor: "#000",
      marginBottom: 5,
      display: open ? 'none' : 'block',
      transition: 'display 0.3s ease-in-out',
    },
    hamburgerRight: {
      width: 30,
      height: 2,
      backgroundColor: "#000",
      marginBottom: 5,
      transform: open ? 'rotate(-45deg) translate(5.7px, 0px)' : 'none',
      transition: 'transform 0.3s ease-in-out',
    }
  }))

  const { classes } = useStyles()

  return (
    <nav className={classes.navbar}>
      <div className={classes.wrapper}>
        <div className={classes.logoContainer}>
          <Text fw={750} fz={20} italic className={classes.logo}>LOGO</Text>
        </div>
        {
          width > 768 ? (
            <ul className={classes.navList}>
              <Text component="li" className={classes.item} fw={500} fz={16}>Inicio</Text>
              <Text component="li" className={classes.item} fw={500} fz={16}>Sobre mí</Text>
              <Text component="li" className={classes.item} fw={500} fz={16}>Proyectos</Text>
              <Text component="li" className={classes.item} fw={500} fz={16}>Contacta conmigo</Text>
            </ul>
          ) : (
            <div className={classes.navbarMenu} onClick={() => setOpen(!open)}>
              <div className={classes.hamburgerLeft} />
              <div className={classes.hamburgerMiddle} />
              <div className={classes.hamburgerRight} />
            </div>
          )
        }
      </div>
      {
        open && width <= 768 && (
          <ul className={classes.navList}>
            <Text component="li" className={classes.item} fw={500} fz={16}>Home</Text>
            <Text component="li" className={classes.item} fw={500} fz={16}>About</Text>
            <Text component="li" className={classes.item} fw={500} fz={16}>Services</Text>
            <Text component="li" className={classes.item} fw={500} fz={16}>Contact</Text>
          </ul>
        )
      }
    </nav>
  )
}

export default Navbar
