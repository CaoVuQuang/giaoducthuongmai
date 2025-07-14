export const fetchProducts = () => Promise.resolve([
  { id: 1, name: "Khoá học React", 
    desc: "Sàn giáo dục thương mại điện tử sử dụng AI", 
    price: 400000, 
    longDesc: "Đây là mô tả đầy đủ về khoá học của sàn giáo dục thương mại điện tự sử dụng AI. ",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKbaWpH8XE5p_c3mVD5JZVzoKTAlXSc78HpMm-qSdmSy2YuLr_9HefH24cYKDc_ikj0-8&usqp=CAU",
    rating: 4.5,
    reviews: 120
   },

  { id: 2, name: "Tiếng Anh giao tiếp", 
    desc: "Nói tiếng Anh tự tin", 
    desc: "Sàn giáo dục thương mại điện tử sử dụng AI", 
    price: 700000, 
    longDesc: "Đây là mô tả đầy đủ về khoá học của sàn giáo dục thương mại điện tự sử dụng AI. ",
    img: "https://product.hstatic.net/1000328521/product/mockup_tieng_anh_cho_be_trai_xanh_da_b8751ac4415a443ba5466d8762b604a2.jpg",
    rating: 4.5,
    reviews: 120 },

  { id: 3, name: "Phân Tích Dữ Liệu", 
    desc: "Sàn giáo dục thương mại điện tử sử dụng AI", 
    price: 1200000, 
    longDesc: "Đây là mô tả đầy đủ về khoá học của sàn giáo dục thương mại điện tự sử dụng AI. ",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8lpMMNpWm6KDruBOMV7vjkwgfmOxslSAzrA&s",
    rating: 4.5,
    reviews: 120 },

  { id: 4, name: "Data Science", 
    desc: "Sàn giáo dục thương mại điện tử sử dụng AI", 
    price: 1200000, 
    longDesc: "Đây là mô tả đầy đủ về khoá học của sàn giáo dục thương mại điện tự sử dụng AI. ",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8lpMMNpWm6KDruBOMV7vjkwgfmOxslSAzrA&s",
    rating: 4.5,
    reviews: 120 },

  { id: 5, name: "Khoá học React", 
    desc: "Sàn giáo dục thương mại điện tử sử dụng AI", 
    price: 400000, 
    longDesc: "Đây là mô tả đầy đủ về khoá học của sàn giáo dục thương mại điện tự sử dụng AI. ",
    img: "https://img.freepik.com/free-vector/hand-drawn-flat-world-book-day-poster_23-2149328562.jpg",
    rating: 4.5,
    reviews: 120 },
  
    { id:6, name: "Tiếng Anh giao tiếp", 
    desc: "Sàn giáo dục thương mại điện tử sử dụng AI", 
    price: 700000, 
    longDesc: "Đây là mô tả đầy đủ về khoá học của sàn giáo dục thương mại điện tự sử dụng AI. ",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKbaWpH8XE5p_c3mVD5JZVzoKTAlXSc78HpMm-qSdmSy2YuLr_9HefH24cYKDc_ikj0-8&usqp=CAU",
    rating: 4.5,
    reviews: 120 },

    { id: 7, name: "Khoá học React", 
    desc: "Sàn giáo dục thương mại điện tử sử dụng AI", 
    price: 400000, 
    longDesc: "Đây là mô tả đầy đủ về khoá học của sàn giáo dục thương mại điện tự sử dụng AI. ",
    img: "https://img.freepik.com/free-vector/hand-drawn-flat-world-book-day-poster_23-2149328562.jpg",
    rating: 4.5,
    reviews: 120 },
  
    { id:8, name: "Tiếng Anh giao tiếp", 
    desc: "Sàn giáo dục thương mại điện tử sử dụng AI", 
    price: 700000, 
    longDesc: "Đây là mô tả đầy đủ về khoá học của sàn giáo dục thương mại điện tự sử dụng AI. ",
    img: "https://product.hstatic.net/1000328521/product/mockup_tieng_anh_cho_be_trai_xanh_da_b8751ac4415a443ba5466d8762b604a2.jpg",
    rating: 4.5,
    reviews: 120 },
]);


export const fetchSuggestions = (userId, favorites = [], viewed = []) => {
  console.log(`API gọi: /api/suggestions?userId=${userId}`);
  return new Promise((resolve) => {
    setTimeout(() => {
      const fromFav = favorites.map((f, i) => ({
        id: 2000 + i,
        name: `Gợi ý từ yêu thích: ${f.name}`,
        img: f.img,
        price: f.price,
        desc: f.desc,
        longDesc: f.longDesc,
        rating: f.rating,
        reviews: f.reviews,
      }));

      const fromViewed = viewed.map((v, i) => ({
        id: 3000 + i,
        name: `Gợi ý từ đã xem: ${v.name}`,
        img: v.img,
        price: v.price,
        desc: v.desc,
        longDesc: v.longDesc,
        rating: v.rating,
        reviews: v.reviews,
      }));

      resolve([...fromFav, ...fromViewed]);
    }, 1500);
  });
};
