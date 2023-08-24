'use client'

import fetchProducts from '@/Api/fetchProducts';
import TopImg from '../img/top-img.svg'

import Image from "next/image"
import { useContext, useEffect } from 'react';
import { SearchContext } from '@/Contexts/SearchProvider';
import formatCurrency from '@/utils/formatCurrency';

interface ProductProps {
  id : number,
  title: string,
  price: number,
  original_price : number,
  thumbnail: string
}

export default function Body() {

  const {products, setProducts} = useContext(SearchContext)

  useEffect(() => {
    fetchProducts('iphone').then((response) => {
      setProducts(response)
    })
  }, [setProducts])

  return (
    <>
      <section className="body-products">
        <Image
          className='top-img'
          src={TopImg}
          alt=''
        />
        {products.slice(0 , 16).map((products: ProductProps) => (
          <div className='box-products' key={products.id}>
          <Image
            loader={({src}) => src}
            width={200}
            height={200}
            className='img-product'
            src={products.thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
            alt=''
            priority
          />
          <span className='name-product'>{products.title}</span>
          <span className='price-red'>
            <span>de </span><span>{(products.original_price ? 'R$ ' + (products.original_price).toFixed(2) : formatCurrency(products.price * 2))}</span><span> por:</span>
          </span>
          <span className='green-price-product'>
            <span className='green-span'>á vista </span>
            <span className='price-green'>{formatCurrency(products.price)}</span>
          </span>
          <span className='span-parcel'>
            em até 12x de R${((products.price / 12) * 1.2).toFixed(2)} sem juros no cartão
          </span>
        </div>
        ))}
        
      </section>
    </>
  )
}

/*

        <div className='box-products'>
          <Image
            className='img-product'
            src={graphic}
            alt=''
          />
          <span className='name-product'>PLACA DE VIDEO MSI GEFORCE RTX 3050 GAMING X, 8GB, GDDR6, 128-BIT, 912-V397-423</span>
          <span className='price-red'>
            <span>de </span><span>R$ 3.203,74</span><span> por:</span>
          </span>
          <span className='green-price-product'>
            <span className='green-span'>á vista </span>
            <span className='price-green'>R$ 1.599,99</span>
          </span>
          <span className='span-parcel'>
            em até 12x de 159,99 sem juros no cartão
          </span>
        </div>

*/