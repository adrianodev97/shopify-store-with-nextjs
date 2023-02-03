import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/globals'
import theme from '../styles/theme'

import client from '../shopify/shopify'

import { GetServerSideProps } from "next";
import { useEffect, useState } from 'react';

export default function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    client.product.fetchAll().then((products) => {
      // Do something with the products
      setProducts(JSON.parse(JSON.stringify(products)))
      console.log(JSON.parse(JSON.stringify(products)));
    });
  }, [])

  return (
    <ThemeProvider theme={theme}>
      {products.map((prod) => {
        return (
          <h1 key={prod.id}>{prod.title}</h1>
        )
      })}
      <GlobalStyle />
    </ThemeProvider>
  )
}