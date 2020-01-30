import React, { Fragment } from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

import PhoneIcon from '@material-ui/icons/Phone';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import WebIcon from '@material-ui/icons/Web';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  item: {
    textAlign: "center"
  }
}));

const SecondPage = () => {
  const classes = useStyles();

  return(
    <Container maxWidth="sm">
      <SEO title="Contatos Esquadaflex" />
      
      <Grid container spacing={2} justify="center">
        <Grid item xs={12} className={classes.item}>
          <h1>Nossos contatos</h1>
        </Grid>
        <Grid item xs={12} className={classes.item}>
          <Fab variant="extended" href="tel:11970665695" style={{backgroundColor: '#19A7A4', color: 'white'}}>
            <PhoneIcon className={classes.extendedIcon} /> Ligar (11) 97066-5695
          </Fab>
        </Grid>
        <Grid item xs={12} className={classes.item}>
          <Fab variant="extended" href="https://wa.me/5511970665695?text=Olá,em%20que%20posso%20ajudar" style={{backgroundColor: '#25d366', color: 'white'}}>
            <WhatsAppIcon className={classes.extendedIcon} /> WhatsApp
          </Fab>
        </Grid>
        <Grid item xs={12} className={classes.item}>
          <Fab variant="extended" href="https://www.instagram.com/esquadraflex" style={{background: 'radial-gradient(circle at -45% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)', color: 'white'}}>
            <InstagramIcon className={classes.extendedIcon} /> 
            <b>esquadraflex</b>
          </Fab>
        </Grid>
        <Grid item xs={12} className={classes.item}>
          <Fab variant="extended" href="https://www.facebook.com/esquadraflex/" style={{backgroundColor: '#3b5998', color: 'white'}}>
            <FacebookIcon className={classes.extendedIcon} /> <b>esquadraflex</b>
          </Fab>
        </Grid>
        <Grid item xs={12} className={classes.item}>
          <Fab variant="extended" href="mailto:comercial@esquadraflex.com.br" style={{backgroundColor: '#ff4343', color: 'white'}}>
            <MailOutlineIcon className={classes.extendedIcon} /> comercial@esquadraflex.com.br
          </Fab>
        </Grid>
        <Grid item xs={12} className={classes.item}>
          <Fab variant="extended" href="/">
            <WebIcon className={classes.extendedIcon} /> Ver o site
          </Fab>
        </Grid>
      </Grid>
      {/* <Link to="/">Ver o site</Link> */}
    </Container>
  )
}

export default SecondPage
