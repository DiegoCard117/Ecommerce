'use client'

import fetchProducts from '@/Api/fetchProducts';
import TopImg from '../img/top-img.svg'

import Image from "next/image"
import { useContext, useEffect, useState } from 'react';
import { SearchContext } from '@/contexts/SearchProvider';
import formatCurrency from '@/utils/formatCurrency';
import { useRouter } from 'next/navigation';

import Loading from './Loading';

export default function Body() {

  const router = useRouter()

  const {products , setProducts} = useContext(SearchContext)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProducts('iphone').then((response) => {
      setProducts(response)
      setLoading(false)
    })
  }, [setProducts])

  return (
    <>
      {(loading && <Loading/>) || 
        <section className="body-products">
          <Image
            className='top-img'
            src={TopImg}
            alt=''
          />
          {products?.map((product, index) => (
            index < 16 && (
              <div
                className='box-products'
                onClick={() => router.push(`/Product/${product.title}`)}
              key={product.id}>
                <Image
                  loader={({src}) => src}
                  unoptimized={true}
                  width={200}
                  height={200}
                  className='img-product'
                  src={product.thumbnail.replace(/http:/gi, 'https:').replace(/\w\.jpg/gi, 'W.jpg')}
                  alt=''
                  priority
                />
                <span className='name-product'>{(product.title)}</span>
                <span className='price-red'>
                  <span>de {(product.original_price ? 'R$ ' + (product.original_price).toFixed(2) : formatCurrency(product.price * 2))} por:</span>
                </span>
                <span className='green-price-product'>
                  <span className='green-span'>á vista </span>
                  <span className='price-green'>{formatCurrency(product.price)}</span>
                </span>
                <span className='span-parcel'>
                  em até 12x de R${((product.price / 12) * 1.2).toFixed(2)} sem juros no cartão
                </span>
              </div>
            )
          ))}
        </section>
      }  
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