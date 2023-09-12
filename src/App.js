import './App.css'
import Header from './components/Header';
import Blogs from './components/Blogs';
import PageHandler from './components/PageHandler';
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';

export default function App() {
  const {fetchData} = useContext(AppContext)

  useEffect(() =>{
    fetchData();
  },[])
  return (
    <div className='flex flex-col justify-center items-center'>
      <Header/>
      <Blogs/>
      <PageHandler/>
    </div>
  );
}
