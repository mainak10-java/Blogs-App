import Header from '../components/Header';
import Blogs from '../components/Blogs';
import PageHandler from '../components/PageHandler';

const Home = () =>{
    return(
        <div className='flex flex-col justify-center items-center'>
            <Header/>
            <div className='mt-[70px] flex flex-col justify-center items-center'>
                <Blogs/>
                <PageHandler/>
            </div>
            
        </div>
    );
}

export default Home;