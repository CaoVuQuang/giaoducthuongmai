import ProductCard from './ProductCard';
import { useEffect, useState } from 'react';

export default function ProductList({
  products, search, filterPrice,
  favorites, toggleFavorite, onViewProduct
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const filtered = products.filter(p => {
    let match = true;
    if (search) match = p.name.toLowerCase().includes(search.toLowerCase());
    if (!match) return false;
    if (filterPrice === '<500') return p.price < 500000;
    if (filterPrice === '500-1m') return p.price >= 500000 && p.price <= 1000000;
    if (filterPrice === '>1m') return p.price > 1000000;
    return true;
  });

  return (
    <section>
      <div className="product-list">
        {filtered.map((p, idx) => (
          <ProductCard
            key={p.id}
            product={p}
            isFavorite={!!favorites.find(f => f.id === p.id)}
            toggleFavorite={toggleFavorite}
            onViewProduct={onViewProduct}
            visible={visible}
            delay={idx * 100}
          />
        ))}
      </div>
    </section>
  );
}
