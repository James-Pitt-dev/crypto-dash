/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import {Routes, Route} from 'react-router'
import { Analytics } from '@vercel/analytics/react';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import Header from './components/Header';
import NotFoundPage from './pages/not-found';
import CoinDetailsPage from './pages/coin-details';
const API_URL = import.meta.env.VITE_API_URL;

const App = () => {

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(10);
  const [filter, setFilter] = useState('');
  const [sortBy,setSortBy] = useState('market_cap_desc'); 

  useEffect(() => {
    // async/await syntax
    const fetchCoins = async () => {
      try {
        const res = await fetch(`${API_URL}&order=market_cap_desc&per_page=${limit}&page=1&sparkline=false`);
        if (!res.ok) throw new Error('Failed to fetch data');
        const data = await res.json();
        setCoins(data);
        setLoading(false);
      } catch (err) {
          setError(err.message);
      } finally {
          setLoading(false);
        }
    }

    fetchCoins();

    // promise chaining syntax
    // fetch(API_URL)
    //   .then((res) => {
    //     if (!res.ok) throw new Error('Failed to fetch data')
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     setCoins(data);
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     setError(err.message);
    //     setLoading(false);
    //    })
  }, [limit]);

  return ( 
    <>
    <Header />
    <Routes> GET /about
      <Route path='/' element={<HomePage 
        coins={coins}
        filter={filter}
        setFilter={setFilter}
        limit={limit}
        setLimit={setLimit}
        sortBy={sortBy}
        setSortBy={setSortBy}
        loading={loading}
        error={error}
      />} />
      <Route path='/about' element={<AboutPage />}/>
      <Route path='/coin/:id' element={<CoinDetailsPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
    <Analytics />
    </>
   );
}
 
export default App;