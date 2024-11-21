import {
    Route,
    createBrowserRouter,
    createRoutesFromElements
  } from 'react-router-dom';
  
  import DefaultLayout from '../layout/defaultLayout';
  import Home from '../containers/Home';
  import LivrosDoados from '../containers/LivrosDoados';
  import QueroDoar from '../containers/QueroDoar';
  
  export const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/livros-doados" element={<LivrosDoados />} />
        <Route path="/quero-doar" element={<QueroDoar />} />
      </Route>
    )
  );