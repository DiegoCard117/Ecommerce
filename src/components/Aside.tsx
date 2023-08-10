/*

function Aside() {

  const [MenuClass, setMenuClass] = useState('close')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
!isMenuOpen ? setMenuClass("open") : setMenuClass("close")

setIsMenuOpen(!isMenuOpen)


const updateMenu = () => {
  const aside = document.querySelector('aside');
  if (aside) {
    if (!isMenuOpen) {
      aside.style.width = '100%';
      setMenuClass('open');
    } else {
      setMenuClass('close');
      aside.style.width = '90px';
    }
    setIsMenuOpen(!isMenuOpen);
  }
}

  return (
      <aside onClick={updateMenu}>
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
        <div className={MenuClass}>
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
*/