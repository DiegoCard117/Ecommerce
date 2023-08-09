import gpu from '../img/gpu.svg'
import mouse from '../img/mouse.svg'
import desktop from '../img/desktop.svg'
import upgrade from '../img/upgrade.svg'
import monitor from '../img/monitor.svg'
import cadeira from '../img/cadeira.svg'
import mesa from '../img/mesa.svg'
import note from '../img/note.svg'
import console from '../img/console.svg'
import router from '../img/router.svg'

import Image from 'next/image'

const imagens = [
  {id:'1', img: gpu},
  {id:'2', img: mouse},
  {id:'3', img: desktop},
  {id:'4', img: upgrade},
  {id:'5', img: monitor},
  {id:'6', img: cadeira},
  {id:'7', img: mesa},
  {id:'8', img: note},
  {id:'9', img: console},
  {id:'10', img: router}
]

export default function Aside() {
  return (
      <aside>
        <div className='menu-left'>
          {imagens.map( (item) => (
            <button key={item.id}>
              <Image
                src={item.img}
                alt='menu'
              />
            </button>
          ))}
        </div>
        <div className='open'>
          <ul>
            <li>Hardware</li>
            <li>Perifericos</li>
            <li>Computadores</li>
            <li>Kit Upgrade</li>
            <li>Monitores</li>
            <li>Cadeiras e Mesas Gamer</li>
            <li>Cadeiras e Mesas de Escritorio</li>
            <li>Notebooks</li>
            <li>Consoles</li>
            <li>Redes e Wireless</li>
          </ul>
        </div>
      </aside>
  )
}