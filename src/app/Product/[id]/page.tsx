"use client"
import Header from '@/components/Header';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import HeaderDesktop from '@/components/HeaderDesktop';
import Footer from '@/components/Footer';
import Loading from '@/components/Loading';

import addcart from '../../../img/addcart.svg'

//import formatCurrency from '@/utils/formatCurrency';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import '../../../css/pageProduct.scss'
import Head from 'next/head';

interface Pictures {
  url : string
  id: string
}

interface Product {
  id: string
  thumbnail : string
  title : string
  original_price: number
  price: number
  pictures : Pictures[]
}

interface Props {
  params: Product
}

export default function Product({ params } : Props) {
  const [products, setProducts] = useState<Product>({ 
    id: '',
    thumbnail: '',
    title: '',
    original_price: 0,
    price: 0,
    pictures : []
  });
  const [loading, setLoading] = useState(true) 
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://api.mercadolibre.com/items/${params.id}`);
        const data = await response.json();
        setProducts(data);
        //console.log(products)
        setLoading(false)
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchProducts();
  }, [params]);

  return (
    <>
      <Head>
        <title>Product | Ecoomerce</title>
      </Head>
      <Header />
      <HeaderDesktop />
      {loading ? (
        <Loading/>
      ) : (
        <div className="containerProduct">
        <div className='productDetails'>
          <Swiper
            modules={[Autoplay , Pagination]}
            className='slideBox'
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay
          >
            {products.pictures.map(item => (
              <SwiperSlide
                className='slides'
                key={item.id}>
                <Image
                  className='imgProductDetails'
                  src={item.url.replace(/http2:/gi, 'https:').replace(/\w\.jpg/gi, 'W.jpg')}
                  alt={''}
                  width={250}
                  height={250}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <p className='title'>{products.title}</p>
          <span className='spanRed'>de R$ {products.original_price ? products.original_price : (products.price * 1.7)} por:</span>
          <span className='spanGreen'>à vista</span>
          <span className='price'>R$ {(products.price).toFixed(2)}</span>
          <span className='spanOu'>ou</span>
          <span className='priceRed'>R$ {(products.price * 1.2).toFixed(2)}</span>
          <span className='divisor'>em até 12x de R$ <span className='spanRed'>{((products.price *1.2) / 12).toFixed(2)}</span> sem juros no cartão</span>
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
      </div>
      )}
      <Footer/>
    </>
  );
}


/*

.replace(/http2:/gi, 'https:').replace(/\w\.jpg/gi, 'W.jpg')
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