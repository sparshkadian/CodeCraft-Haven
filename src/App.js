import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import NavBar from './components/NavBar';
import About from './Pages/About';
import ResourceCards from './components/ResourceCards';
import HtmlResource from './Pages/HtmlResource';
import CssResource from './Pages/CssResource';
import JsResource from './Pages/JsResource';
import PageNotFound from './Pages/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          exact
          path='/'
          element={
            <>
              <Home />
              <ResourceCards />
            </>
          }
        />
        <Route path='/about' element={<About />} />
        <Route path='/html' element={<HtmlResource />} />
        <Route path='/CSS' element={<CssResource />} />
        <Route path='/JS' element={<JsResource />} />
        <Route path='/*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
