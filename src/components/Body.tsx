"use client";

import fetchProducts from "@/Api/fetchProducts";
import TopImg from "../img/top-img.svg";

import Image from "next/image";
import { Suspense, useContext, useEffect, useState } from "react";
import { SearchContext } from "@/contexts/SearchProvider";
import formatCurrency from "@/utils/formatCurrency";
import { useRouter } from "next/navigation";

import Loading from "./Loading";

export default function Body() {
  const router = useRouter();

  const { products, setProducts } = useContext(SearchContext);
  const [quantity, setQuantity] = useState(16);

  useEffect(() => {
    fetchProducts("destaques").then((response) => {
      setProducts(response);
    });
  }, [setProducts]);

  const handleQuantityChange = (event: { target: { value: string } }) => {
    const novaQuantidade = parseInt(event.target.value);
    setQuantity(novaQuantidade);
  };

  return (
    <>
      <Suspense fallback={<Loading />}>
        <section className="body-products">
          <Image className="top-img" src={TopImg} alt="" />
          <div className="inputRadio">
            <div>
              <p>Itens por pagina</p>
            </div>
            <div>
              <select onChange={handleQuantityChange} value={quantity}>
                <option value={16}>16</option>
                <option value={20}>20</option>
                <option value={32}>32</option>
              </select>
            </div>
          </div>
          {products?.map(
            (product, index) =>
              index < 16 && (
                <div
                  className="box-products"
                  onClick={() => router.push(`/Product/${product.id}`)}
                  key={product.id}
                >
                  <Image
                    loader={({ src }) => src}
                    unoptimized={true}
                    width={200}
                    height={200}
                    className="img-product"
                    src={product.thumbnail
                      .replace(/http:/gi, "https:")
                      .replace(/\w\.jpg/gi, "W.jpg")}
                    alt=""
                    priority
                  />
                  <span className="name-product">{product.title}</span>
                  <span className="price-red">
                    <span>
                      de{" "}
                      {product.original_price
                        ? "R$ " + product.original_price.toFixed(2)
                        : formatCurrency(product.price * 2)}{" "}
                      por:
                    </span>
                  </span>
                  <span className="green-price-product">
                    <span className="green-span">á vista </span>
                    <span className="price-green">
                      {formatCurrency(product.price)}
                    </span>
                  </span>
                  <span className="span-parcel">
                    em até 12x de R${((product.price / 12) * 1.2).toFixed(2)}{" "}
                    sem juros no cartão
                  </span>
                </div>
              )
          )}
        </section>
      </Suspense>
    </>
  );
}
