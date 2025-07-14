import { toast } from 'react-toastify';
export default function Suggestions({ suggestions, getSuggestions, loading, setModalProduct }) {

  const handleClick = async () => {
  const data = await getSuggestions();
  if (data.length === 0) {
    toast.info('Không thể lấy gợi ý lúc này');
  }
};

  return (
    <section>
      <div className="suggestions-section">
        <div className="suggestions-header">
          Gợi ý sản phẩm (AI)
        </div>

        <button onClick={handleClick}>Gợi ý sản phẩm phù hợp (AI)</button>

        {loading && <div>Đang gợi ý…</div>}

        {!loading && suggestions.length > 0 && (
          <div className="suggestions-list">
            {suggestions.map((s) => (
              <div
                key={s.id}
                className="suggestion-card"
                onClick={() => setModalProduct(s)}
              >
                <img
                  src={s.img || 'https://placehold.co/100x100?text=Product'}
                  alt={s.name}
                  className="suggestion-img"
                />
                <div>
                  <h4>{s.name}</h4>
                  <p><strong>{s.price.toLocaleString()} VND</strong></p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
