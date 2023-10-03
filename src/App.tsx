import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from './pages/Home';
import { Kanji } from './pages/Kanji';
import { Practice } from './pages/Practice';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/kanji' element={<Kanji />} />
          <Route path='/practice' index element={<Practice />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
