import '../css/globals.scss'
import '../css/desktop.scss'
import Home from '@/pages/Home';

import SearchProvider from '@/Contexts/SearchProvider';

export default function App() {
  return (
    <>
      <SearchProvider>
        <Home/>
      </SearchProvider>
    </>
  )
}

