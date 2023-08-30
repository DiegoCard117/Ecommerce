"use client"
import Header from '@/components/Header';

export async function getStaticProps(context) {
  const { params } = context;
  const data = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${params.id}`);

  const product = await data.json();
  return {
    props: { product }
  };
}

export async function getStaticPaths() {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/search?q=');
  const data = await response.json();

  const paths = data.map((product) => {
    return {
      params: {
        id: product.id
      }
    };
  });

  return { paths, fallback: false };
}

export default function Product({ product }){
  return (
    <>
      <Header />
      {console.log(product)}
    </>
  );
}
