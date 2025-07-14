import { useState } from 'react';

export default function Favorites({ favorites, setModalProduct }) {
  const [open, setOpen] = useState(false);

  return (
    <section>
      <div className="favorites-section">
        <div
          className="favorites-header"
          onClick={() => setOpen(!open)}
        >
          Yêu Thích ({favorites.length})
          <span>{open ? '▲' : '▼'}</span>
        </div>

        <div
          className="favorites-collapse"
          style={{
            maxHeight: open ? '500px' : '0',
          }}
        >
          {favorites.length === 0 && (
            <p style={{ padding: '0.5rem' }}>Chưa có sản phẩm yêu thích nào.</p>
          )}

          <div className="favorites-list">
            {favorites.map((f) => (
              <div
                key={f.id}
                className="favorites-card"
                onClick={() => setModalProduct(f)}
              >
                {f.name} — {f.price.toLocaleString()} VND
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
