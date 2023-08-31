"use client"
import Header from '@/components/Header';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import HeaderDesktop from '@/components/HeaderDesktop';
import Footer from '@/components/Footer';
import Loading from '@/components/Loading';

import addcart from '../../../img/addcart.svg'

//import formatCurrency from '@/utils/formatCurrency';

import '../../../css/pageProduct.scss'

interface Product {
  id: string
  thumbnail : string
  title : string
  original_price: number
  price: number
}

interface Props {
  params: Product
}

export default function Product({ params } : Props) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true) 
  //console.log(products[1]['thumbnail'])
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${params.id}`);
        const data = await response.json();
        setProducts(data.results);
        setLoading(false)
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
      {loading && <Loading/> || 
      <div className="containerProduct">
        {products.length > 0 && (
          <div className='productDetails'>
            <Image
              className='imgProductDetails'
              src={products[0].thumbnail.replace(/http2:/gi, 'https:').replace(/\w\.jpg/gi, 'W.jpg')}
              alt={''}
              width={250}
              height={250}
            />
            <p className='title'>{products[0].title}</p>
            <span className='spanRed'>de R$ {products[0].original_price ? products[0].original_price : (products[0].price * 1.7)} por:</span>
            <span className='spanGreen'>à vista</span>
            <span className='price'>R$ {(products[0].price).toFixed(2)}</span>
            <span className='spanOu'>ou</span>
            <span className='priceRed'>R$ {(products[0].price * 1.2).toFixed(2)}</span>
            <span className='divisor'>em até 12x de R$ <span className='spanRed'>{((products[0].price *1.2) / 12).toFixed(2)}</span> sem juros no cartão</span>
            <button className='btnBuy'>
              <Image
                src={addcart}
                alt=''
                width={30}
                height={30} 
              />
              <div>
                <span className='btnTextBig'>Comprar</span>
                <span className='btnTextSmall'>colocar no carrinho</span>
              </div>
            </button>
          </div> 
        )}
      </div>}
      <Footer/>
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