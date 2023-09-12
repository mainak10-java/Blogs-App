import './App.css'
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';
import { Routes, Route, useSearchParams, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import BlogPage from './pages/BlogPage';
import Tag from './pages/Tag';

export default function App() {
  const {fetchData} = useContext(AppContext)
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() =>{
    const page = searchParams.get('page') ?? 1;

    if(location.pathname.includes('tags')){
       const tag = location.pathname.split('/').at(-1).replaceAll("-"," ")
       fetchData(Number(page),tag);
    }

    else if(location.pathname.includes('categories')){
      const category = location.pathname.split('/').at(-1).replaceAll("-"," ")
      fetchData(Number(page), null, category)
    }
    else{
      fetchData(Number(page))
    }
  },[location.pathname, location.search])


  return (
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path='/blog/:blogId' element={<BlogPage/>} />
        <Route path='/tags/:tag' element = {<Tag/>} />
        <Route path='/categories/:category' element ={<Category/>} />
      </Routes>
  );
}
