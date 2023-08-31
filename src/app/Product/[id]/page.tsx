"use client"
import Header from '@/components/Header';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import HeaderDesktop from '@/components/HeaderDesktop';

interface Product {
  id: string
  thumbnail : string
  title : string
}

interface Props {
  params: Product
}

export default function Product({ params } : Props) {
  const [products, setProducts] = useState<Product[]>([]); 
  //console.log(products[1]['thumbnail'])
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
      <HeaderDesktop />
      <div className="containerProduct">
        {products.length > 0 && (
          <>
            <p>{products[0].id}</p>
            <p>{products[0].title}</p>
            <Image
              src={products[0].thumbnail.replace(/http2:/gi, 'https:').replace(/\w\.jpg/gi, 'W.jpg')}
              alt={''}
              width={200}
              height={200}
            />
          </>
        )}
      </div>
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