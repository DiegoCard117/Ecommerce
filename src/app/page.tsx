import SearchProvider from '@/Contexts/SearchProvider';
import Home from '@/app/Home/page';

export default function App() {
  return (
    <>
      <SearchProvider>
        <Home/>
      </SearchProvider>
    </>
  )
}

