const Products = [
    {
      Name: "Regular Fit Jacquard-knit shirt",
      Price: 1099,
      Description: "สี - Light beige/Striped",
      image: "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/de5723fb24be1b43fc17a03d30f070338dd6b910_xxl-1.jpg",
      tag : "men"
    },
    {
      Name: "Regular Fit Jacquard-knit shirt",
      Price: 1099,
      Description: "สี - Dark beige",
      image: "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/6f25e1f59bdb90e871694e6f04cf1b1b2303737d_xxl-1.jpg",
      tag : "men"
    },
    {
      Name: "Regular Fit Textured jersey shirt",
      Price: 799,
      Description: "สี - Dark grey",
      image: "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/072a7f96b87bf8e6b33dee0f073de4c7c8c43241_xxl-1.jpg",
      tag : "men"
    },
    {
      Name: "Regular Fit Textured jersey shirt",
      Price: 590,
      Description: "สี - White",
      image: "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/2194617e8a56d308670113d59242454356e6fcb3_xxl-1.jpg",
      tag : "men"
    },
    {
      Name: "Regular Fit Textured jersey shirt",
      Price: 799,
      Description: "สี - Dark beige",
      image: "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/48153bf16fdbcaecbd2e80516fff8524f3c3d750_xxl-1.jpg",
      tag : "men"
    },
    {
      Name: "Regular Fit Textured jersey shirt",
      Price: 799,
      Description: "สี - Navy blue",
      image: "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/4a302c3c4114b9c4c616381315df1f0e49235fb8_xxl-1.jpg",
      tag : "men"
    },
    {
      Name: "Loose Fit Resort shirt",
      Price: 999,
      Description: "สี - White/Cool",
      image: "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/43191d79d046b0671493d76a9db1e1e70b8d0025_xxl-1.jpg",
      tag : "men"
    },
    {
      Name: "Loose Fit Resort shirt",
      Price: 999,
      Description: "สี - Black/Patterned",
      image: "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/7922ce845ad58715b24f69e1c0c42fb0f3e9de26_xxl-1.jpg",
      tag : "men"
    },
    {
      Name: "Loose Fit Resort shirt",
      Price: 590,
      Description: "สี - Pistachio green/Patterned",
      image: "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/83dc4f4a091b701478901b32dd716169e2f5fff2_xxl-1.jpg",
      tag : "men"
    },
    {
      Name: "Loose Fit Resort shirt",
      Price: 999,
      Description: "สี - Red/Patterned",
      image: "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/fc9a1f2d19fd7211471ff0e61f8e5bc8cb2cc653_xxl-1.jpg",
      tag : "men"
    },
    {
      Name: "Embroidery-detail cotton blouse",
      Price: 1399,
      Description: "สี - White ",
      image: "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/920638f6fe5c44881ab30bdcb1cf7dfb71465d23_xxl-1.jpg",
      tag : "women"
    },
    {
      Name: "Tie-detail cotton blouse",
      Price: 599,
      Description: "สี - Khaki green",
      image: "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/8f83ad28878e24f40dd8b44bba1b936796db3fff_xxl-1.jpg",
      tag : "women"
    },
    {
      Name: "Tie-detail cotton blouse",
      Price: 599,
      Description: "สี - Light blue/Pinstriped",
      image: "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/697294116857c33a0bfb409ace6632a22e2b16a5_xxl-1.jpg",
      tag : "women"
    },
    {
      Name: "Tie-detail cotton blouse",
      Price: 499,
      Description: "สี - White",
      image: "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/7e34dab50812f23bbc3b97007fe7cfa5c6a6e80c_xxl-1.jpg",
      tag : "women"
    },
    {
      Name: "Tie-detail cotton blouse",
      Price: 799,
      Description: "สี - Black",
      image: "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/4673ee3e749b1d37e268342c7089cdef044f7dc8_xxl-1.jpg",
      tag : "women"
    },
    {
      Name: "Stretchy cotton shirt",
      Price: 799,
      Description: "สี - White",
      image: "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/0909f869f0e3102d406a1c967c8c4b46430f2e99_xxl-1.jpg",
      tag : "women"
    },
    {
      Name: "Cotton jersey polo shirt",
      Price: 399,
      Description: "สี - Light yellow/Striped",
      image: "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/ad6a4de7f1481acededc436661d766eac0121258_xxl-1.jpg",
      tag : "kids"
    },
    {
      Name: "Balloon-sleeve cotton shirt",
      Price: 799,
      Description: "สี - Pink/Striped",
      image: "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/b67044db76088e238864f60d895387d9392ec43b_xxl-1.jpg",
      tag : "kids"
    },
    {
      Name: "Cotton flannel shirt",
      Price: 599,
      Description: "สี - Red/Checked",
      image: "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/632ab471a15546439b2e3dc362e4cff72fc23709_xxl-1.jpg",
      tag : "kids"
    },
    {
      Name: "Cotton poplin shirt",
      Price: 799,
      Description: "สี - Blue",
      image: "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/051d69fe422a1e7a19cde3b091d3a4f6bd98b816_xxl-1.jpg",
      tag : "kids"
    }
  ];
  
  export default Products;