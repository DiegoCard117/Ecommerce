"use client";

import { useContext, useState } from "react";
import { SearchContext } from "@/contexts/SearchProvider";
import fetchProducts from "@/Api/fetchProducts";

const menuItems = [
  { id: "1", name: "Smartphones" },
  { id: "2", name: "Moda" },
  { id: "3", name: "Casa e Decoração" },
  { id: "4", name: "Automóveis, Peças" },
  { id: "5", name: "Brinquedos e Bebês" },
  { id: "6", name: "Esportes e Fitness" },
  { id: "7", name: "Saúde e Beleza" },
  { id: "8", name: "Livros, Música e Filmes" },
  { id: "9", name: "Eletrodomésticos" },
  { id: "10", name: "Outros" },
  { id: "11", name: "Alimentos e Bebidas" },
  { id: "12", name: "Jardinagem e Construção" },
  { id: "13", name: "Pet Shop" },
  { id: "14", name: "Ferramentas e Materiais de Construção" },
  { id: "15", name: "Cama, Mesa e Banho" },
  { id: "16", name: "Móveis" },
  { id: "17", name: "Joias e Relógios" },
  { id: "18", name: "Instrumentos Musicais" },
  { id: "19", name: "Passagens Aéreas" },
  { id: "20", name: "Ingressos para Eventos" },
]

export default function Aside() {
  const { setProducts } = useContext(SearchContext);
  const [searchText, setSearchText] = useState("");
  
  const cache = new Map()

  const handleSearch = async () => {
    const cachedProducts = cache.get(searchText)
    if (cachedProducts) {
      setProducts(cachedProducts)
      return
    }

    const products = await fetchProducts(searchText);
    cache.set(searchText, products)
    setProducts(products);
  };

  const handleListItemClick = (itemText: string) => {
    setSearchText(itemText);
    handleSearch();
  };

  return (
    <aside className="aside-desktop">
      <div className="listIconAside">
        <ul>
          {menuItems.map((item) => (
            <li key={item.id} onClick={() => handleListItemClick(item.name)}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
