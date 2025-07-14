import React, { useEffect, useState } from 'react';
import { fetchProducts, fetchSuggestions } from './api/mockApi';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Favorites from './components/Favorites';
import Suggestions from './components/Suggestions';
import ProductModal from './components/ProductModal';
import Footer from './components/Footer';
import ViewedProducts from './components/ViewedProducts';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [draftSearch, setDraftSearch] = useState('');
  const [filterPrice, setFilterPrice] = useState('all');
  const [favorites, setFavorites] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [modalProduct, setModalProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [viewedProducts, setViewedProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  const toggleFavorite = (product) => {
    if (favorites.find(f => f.id === product.id)) {
      setFavorites(favorites.filter(f => f.id !== product.id));
      toast.info(`Đã bỏ yêu thích: ${product.name}`);
    } else {
      setFavorites([...favorites, product]);
      toast.success(`Đã thêm vào yêu thích: ${product.name}`);
    }
  };

  const getSuggestions = async () => {
  setLoading(true);
  setSuggestions([]);

  try {
    const userId = 'user123';
    const data = await fetchSuggestions(userId, favorites, viewedProducts);
    setSuggestions(data);
    return data;
  } catch (err) {
    alert("Không thể lấy gợi ý lúc này");
    return [];
  } finally {
    setLoading(false);
  }
};


  const handleViewProduct = (product) => {
    setModalProduct(product);
    setViewedProducts(prev => {
      if (!prev.find(p => p.id === product.id)) {
        return [...prev, product];
      }
      return prev;
    });
  };

  return (
    <div className="page-wrapper">
      <Header
        search={search}
        setSearch={setSearch}
        draftSearch={draftSearch}
        setDraftSearch={setDraftSearch}
        filterPrice={filterPrice}
        setFilterPrice={setFilterPrice}/>

      <main className="main-content">
        <div className="columns">
          <div className="left">
            <ProductList
              products={products}
              search={search}
              filterPrice={filterPrice}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
              onViewProduct={handleViewProduct}/>
            <Suggestions
              suggestions={suggestions}
              getSuggestions={getSuggestions}
              loading={loading}
              setModalProduct={setModalProduct}/>
          </div>
          <div className="right">
            <Favorites 
              favorites={favorites} 
              setModalProduct={setModalProduct} />
            <ViewedProducts 
              viewedProducts={viewedProducts} 
              setModalProduct={setModalProduct}/>
          </div>
        </div>
      </main>

        <ProductModal
          product={modalProduct}
          isFavorite={modalProduct && favorites.some(f => f.id === modalProduct.id)}
          toggleFavorite={toggleFavorite}
          onClose={() => setModalProduct(null)}/>
        <ToastContainer />
        <Footer />
    </div>
  );
}

export default App;
