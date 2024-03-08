import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Contact } from './pages/Contact'
import { About } from './pages/About'
import { RootLayout } from './layouts/RootLayout'
import { Services } from './pages/Services'

export function App() {
  return (
    <main className=''>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App
