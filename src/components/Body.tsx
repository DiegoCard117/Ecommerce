'use client'

import TopImg from '../img/top-img.svg'
import graphic from '../img/3050.png'

import Image from "next/image"
import { useEffect, useState } from 'react';

export default function Body() {

  const [data, setData] = useState<any[]>([]);

  useEffect(()=>{
    products()
  }, [])

  const products = async () => {
    const url = 'https://diegocard117.github.io/JsonTest/ecommerce.json'
    try {
      const response = await fetch(url)
      const data = await response.json()
      setData(data)
      console.log(data[0].id)
    } catch(error) {
      console.error('Erro encontrado', error)
    }
  }

  return (
    <>
      <section className="body-products">
        <Image
          className='top-img'
          src={TopImg}
          alt=''
        />
        {data.map((data) => (
          <div className='box-products' key={data.id}>
          <Image
            loader={({src}) => src}
            width={200}
            height={200}
            className='img-product'
            src={data.img}
            alt=''
          />
          <span className='name-product'>{data.name}</span>
          <span className='price-red'>
            <span>de </span><span></span><span> por:</span>
          </span>
          <span className='green-price-product'>
            <span className='green-span'>á vista </span>
            <span className='price-green'>{data.price}</span>
          </span>
          <span className='span-parcel'>
            em até 12x de 159,99 sem juros no cartão
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