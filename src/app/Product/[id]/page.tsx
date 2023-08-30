"use client"
import Header from '@/components/Header';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface Product {
  id: string
  thumbnail : string
}

interface Props {
  params: Product
}

export default function Product({ params } : Props) {
  const [products, setProducts] = useState([]); 
console.log(products[0]['thumbnail'])
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${params.id}`);
        const data = await response.json();
        setProducts(data.results);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchProducts();
  }, [params]);

  return (
    <>
      <Header />
      <p>{products.length > 1 ? products[0]['id'] : ''}</p>
      <p>{products.length > 1 ? products[0]['title'] : ''}</p>
      <Image
        src={products.length > 1 ? products[0]['thumbnail'] : ''}
        alt={''}
        width={100}
        height={100}
      />
    </>
  );
}


/*
export async function getStaticProps(context) {
  const { params } = context;
  const data = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${params}`);
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


*/