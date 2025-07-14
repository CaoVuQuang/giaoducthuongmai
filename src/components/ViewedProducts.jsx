import { useState, useRef, useEffect } from "react";

export default function ViewedProducts({ viewedProducts, setModalProduct }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <section className="viewed-section">
      <h3
        onClick={() => setOpen(!open)}
        className="viewed-header"
      >
        Lịch sử xem ({viewedProducts.length}) {open ? "▲" : "▼"}
      </h3>

      <div
        ref={contentRef}
        className={`viewed-collapse ${open ? "open" : ""}`}
        style={{
          maxHeight: open ? `${contentRef.current?.scrollHeight}px` : "0",
        }}
      >
        {viewedProducts.length === 0 && <p>Chưa xem sản phẩm nào.</p>}

        <div className="viewed-list">
          {viewedProducts.map(p => (
            <div
              key={p.id}
              className="viewed-card"
              onClick={() => setModalProduct(p)}
            >
              <div>
                <strong>{p.name}</strong><br />
                <span>{p.price.toLocaleString()} VND</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
