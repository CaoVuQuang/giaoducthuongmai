import { useEffect, useState, useRef } from 'react';

export default function Header({ search, setSearch, draftSearch, setDraftSearch, filterPrice, setFilterPrice }) {
  const [visible, setVisible] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="header">
      <div className="header-content">
        <div className="left">
          <img src="https://images.careerviet.vn/employer_photo/175914/logo-antoree_1495524786.png" alt="" />
        </div>

        <div className="center">
          <h3>Sàn Giáo Dục Thương Mại Điện Tử Sử Dụng AI</h3>
        </div>

        <div className="right">
          <div className="header-controls">
            <div className={`search-wrapper ${visible ? 'show' : ''}`}>
              <input
                type="text"
                placeholder="Tìm kiếm…"
                value={draftSearch}
                onChange={e => setDraftSearch(e.target.value)}
                onKeyDown={e => {
                  if (e.key === 'Enter') {
                    setSearch(draftSearch);
                  }
                }}
              />
              <button
                onClick={() => setSearch(draftSearch)}
                title="Tìm kiếm"
              >
                <img src="https://cdn-icons-png.flaticon.com/128/151/151773.png" alt="" />
              </button>
            </div>

            <div className="dropdown">
              <button className="dropdown-btn" onClick={() => setShowDropdown(!showDropdown)}>
                {filterPrice === "all" || !filterPrice ? "Lọc theo giá 🔽" :
                  filterPrice === "<500" ? "Dưới 500K" :
                    filterPrice === "500-1m" ? "500K–1 triệu" :
                      filterPrice === ">1m" ? "Trên 1 triệu" :
                        filterPrice}
              </button>

              <div
                ref={dropdownRef}
                className={`dropdown-content`}
                style={{
                  maxHeight: showDropdown ? `${dropdownRef.current?.scrollHeight}px` : "0",
                  opacity: showDropdown ? 1 : 0
                }}
              >
                <div onClick={() => setFilterPrice("all")}>Tất cả</div>
                <div onClick={() => setFilterPrice("<500")}>Dưới 500K</div>
                <div onClick={() => setFilterPrice("500-1m")}>500K–1 triệu</div>
                <div onClick={() => setFilterPrice(">1m")}>Trên 1 triệu</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
