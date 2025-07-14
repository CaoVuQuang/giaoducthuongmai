export default function ProductCard({product, isFavorite, toggleFavorite, onViewProduct, visible, delay}) {
  return (
    <div
      className={`product-card ${visible ? 'show' : ''}`}
      style={{ transitionDelay: `${delay || 0}ms` }}
    >
      <img
        src={product.img}
        alt={product.name}
        onError={(e) => (e.target.src = 'https://placehold.co/300x200?text=No+Image')}
      />
      <h3>{product.name}</h3>
      <p>{product.desc}</p>
      <p><strong>{product.price.toLocaleString()} VND</strong></p>
      <button
        onClick={() => onViewProduct(product)}
        className="bg-green-600 text-white px-3 py-1 rounded mt-2 mr-2"
      >
        Xem chi tiết
      </button>
      <button
        onClick={() => toggleFavorite(product)}
        className="bg-yellow-500 text-white px-3 py-1 rounded mt-2"
      >
        {isFavorite ? 'Bỏ thích ❤️' : 'Yêu thích 🤍'}
      </button>
    </div>
  );
}
