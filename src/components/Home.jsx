import React from 'react'
import S1_hotproducts from "./S1_hotproducts";
import S2_products from "./S2_products";
import S3_catalog from "./S3_catalog";
import S4_recomendataion from './S4_recomendataion';
import About from './About'
import Contact from './Contact';
export default function Home() {
  return (
      <>
      <S1_hotproducts />
      <S2_products />
      <S3_catalog />
      <S4_recomendataion />
      <About />
      <Contact />
      </>

      )
}
