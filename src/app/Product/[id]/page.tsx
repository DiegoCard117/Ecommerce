"use client"
import Header from '@/components/Header';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import HeaderDesktop from '@/components/HeaderDesktop';
import Footer from '@/components/Footer';
import Loading from '@/components/Loading';

import addcart from '../../../img/addcart.svg'
import visa from '../../../img/visa.svg'
import american from '../../../img/american.svg'
import pix from '../../../img/pix.svg'
import master from '../../../img/master.svg'

//import formatCurrency from '@/utils/formatCurrency';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import '../../../css/pageProduct.scss'
import Head from 'next/head';
import { useShoppingCart } from '@/contexts/CartContext';

import { useMediaQuery } from 'react-responsive';

interface Pictures {
  url : string
  id: string
}

interface ProductPage {
  id: string
  thumbnail : string
  title : string
  original_price: number
  price: number
  pictures : Pictures[]
}

interface Props {
  params: ProductPage
}

export default function Product({ params } : Props) {

  const isMobile = useMediaQuery({
    query: '(max-width: 720px)'
  })

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 721px)'
  })

  const {increaseCartQuantity, cartItems} = useShoppingCart()

  const [products, setProducts] = useState <ProductPage>({ 
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

  const parcelas = Array.from({ length: 12 }, (_, index) => ({
    numero: index + 1,
    valor: index === 0 ? products.price.toFixed(2) : ((products.price * 1.2) / (index + 1)).toFixed(2),
  }));

  return (
    <>
      {console.log(cartItems)}
      <Head>
        <title>Product | Ecoomerce</title>
      </Head>
      <Header />
      <HeaderDesktop />
      {loading ? (
        <Loading/>
      ) : (
      <>
        {isMobile &&
          <div className="containerProduct">
            <div className='productDetails'>
              <Swiper
                modules={[Autoplay , Pagination]}
                className='slideBox'
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay = {{ delay: 3000 }}
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
              <span className='spanRed'>de R$ {products.original_price ? products.original_price : (products.price * 1.7).toFixed(2)} por:</span>
              <span className='spanGreen'>à vista</span>
              <span className='price'>R$ {(products.price).toFixed(2)}</span>
              <span className='spanOu'>ou</span>
              <span className='priceRed'>R$ {(products.price * 1.2).toFixed(2)}</span>
              <p className='divisor'>em até 12x de R$ <p className='spanRed'>{((products.price *1.2) / 12).toFixed(2)}</p> sem juros no cartão</p>
              <button
                onClick={() => increaseCartQuantity([{
                  id : products.id,
                  quantity: 1,
                  title: products.title,
                  thumbnail: products.thumbnail,
                  price: products.price
                }])}
                className='btnBuy'>
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
        }
        {isDesktopOrLaptop && 
          <div className='containerPageProduct'>
            <div className='leftBox'>
              <Swiper
                modules={[Autoplay , Pagination]}
                className='slideBox'
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay = {{ delay: 3000 }}
              >
                {products.pictures.map(item => (
                  <SwiperSlide
                    className='slides'
                    key={item.id}>
                    <Image
                      className='imgProductDetails'
                      src={item.url.replace(/http2:/gi, 'https:').replace(/\w\.jpg/gi, 'W.jpg')}
                      alt={''}
                      width={450}
                      height={450}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className='rightBox'>
              <div className='boxTitle'>
                <h1 className='title'>{products.title}</h1>
              </div>
              <div className='boxDetails'>
                <div className='prices'>
                  <span className='spanRed'>de R$ {products.original_price ? products.original_price : (products.price * 1.7).toFixed(2)} por:</span>
                  <span className='spanGreen'>à vista</span>
                  <span className='price'>R$ {(products.price).toFixed(2)}</span>
                  <span className='spanOu'>ou</span>
                  <span className='priceRed'>R$ {(products.price * 1.2).toFixed(2)}</span>
                  <span className='divisor'>em até 12x de R$ <span className='spanRed'>{((products.price *1.2) / 12).toFixed(2)}</span> sem juros no cartão</span>
                  <div className="boxPagamento">
                    <h2>Pagamento</h2>
                    <ul>
                      <li>
                        <Image
                          width={60}
                          height={60}
                          src={visa}
                          alt=""
                        />
                      </li>
                      <li>
                        <Image
                          width={60}
                          height={60}
                          src={american}
                          alt=""
                        />
                      </li>
                      <li>
                        <Image
                          width={60}
                          height={60}
                          src={pix}
                          alt=""
                        />
                      </li>
                      <li>
                        <Image
                          width={60}
                          height={60}
                          src={master}
                          alt=""
                        />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='btnAndParcel'>
                  <div className='topRightParcel'>
                    <button
                      onClick={() => increaseCartQuantity([{
                        id : products.id,
                        quantity: 1,
                        title: products.title,
                        thumbnail: products.thumbnail,
                        price: products.price
                      }])}
                      className='btnBuy'>
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
                  <div className='boxDivisor'>
                    <div>
                      <h2>Parcelamento</h2>
                      <p>(somente no cartão)</p>
                    </div>
                    <div>
                      {parcelas.map((parcela) => (
                        <p
                          className=''
                          key={parcela.numero}>
                          {parcela.numero}x de R$ {parcela.valor} sem juros
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </>
      )}
      <Footer/>
    </>
  );
}


/*


*/