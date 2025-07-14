import { useEffect, useState } from "react";

export default function ProductModal({ product, isFavorite, toggleFavorite, onClose }) {
  const [isClosing, setIsClosing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (product) {
      setTimeout(() => setIsVisible(true), 10);
    }
  }, [product]);

  if (!product) return null;

  const handleClose = () => {
    setIsClosing(true);
    setIsVisible(false);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300);
  };

  const handleToggleFavorite = () => {
    toggleFavorite(product);
  };

  return (
    <div className={`modal-overlay ${isVisible && !isClosing ? 'show' : 'hide'}`}>
      <div className="modal-content">
        <h3 className="modal-title">{product.name}</h3>

        <div className="modal-body">
          <div className="modal-left">
            <img
              src={product.img}
              alt={product.name}
              className="modal-img"
              onError={(e) => (e.target.src = 'https://placehold.co/300x200?text=No+Image')}
            />
          </div>

          <div className="modal-right">
            <p><strong>Giá:</strong> {product.price.toLocaleString()} VND</p>
            <p><strong>Mô tả:</strong> {product.longDesc || product.desc}</p>
            {product.rating && (
              <p>
                <strong>Đánh giá:</strong> {product.rating} / 5⭐ ({product.reviews} đánh giá)
              </p>
            )}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "1rem" }}>
          <button
            onClick={handleToggleFavorite}
            className={`like-btn ${isFavorite ? 'bg-red-500' : 'bg-yellow-500'} text-white`}
          >
            {isFavorite ? 'Bỏ thích ❤️' : 'Yêu thích 🤍'}
          </button>
          
          <button onClick={handleClose} className="close-btn">
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
}
