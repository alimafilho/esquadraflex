import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Fab from '@material-ui/core/Fab';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div style={{textAlign: 'center', width: '100%', paddingBottom: '20px'}}>
      <p>Seja bem-vindo ao nosso site</p>
      <Fab variant="extended" href="/qrcode/cartao-de-visita/" style={{backgroundColor: '#19A7A4', color: 'white'}}>
        Veja os nossos contatos
      </Fab>
      <br />
    </div>
  </Layout>
)

export default IndexPage
