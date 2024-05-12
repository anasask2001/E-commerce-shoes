const items = [
  {
    id: 1,
    name: "ADIDAS d435",
    category: "women",
    imgUrl:
      "https://cdn.media.amplience.net/s/scvl/126164_306406_SET/2?fmt=auto&$webPdpProduct$",
    price: 6500,
    qty:1
  },
  {
    id: 2,
    name: "ADIDAS L768",
    category: "women",
    imgUrl:
      "https://cdn.media.amplience.net/s/scvl/111899_306339_SET/1?fmt=auto&$webPdpProduct$",
    price: 7500,
    qty:1
  },
  {
    id: 3,
    name: "NEW BALANCE 237-M",
    category: "women",
    imgUrl:
      "https://cdn.media.amplience.net/s/scvl/144406_308584_SET/2?fmt=auto&$webPdpProduct$",
    price: 10000,
    qty:1
  },
  {
    id: 4,
    name: "NEW BALANCE W420V2 ",
    category: "women",
    imgUrl:
      "https://cdn.media.amplience.net/s/scvl/127213_270717_SET/2?fmt=auto&$webPdpProduct$",
    price: 5900,
    qty:1
  },
  {
    id: 4 ,
    name:'SKECHERS MOSECO 65355 ',
    category:'women',
    imgUrl:'https://cdn.media.amplience.net/s/scvl/97027_194212_SET/2?fmt=auto&$webPdpProduct$',
    price:5699,
    qty:1
  },
  {
    id:5,
    name:'SKECHERS D LITES TIFFANY 11097',
    category:'women',
    imgUrl:'https://cdn.media.amplience.net/s/scvl/1172_31550_SET/2?fmt=auto&$webPdpProduct$',
    price:3999,
    qty:1
  },
  { id:6,
    name:'Adidas Womens Ultraboost ',
    category:'women',
    imgUrl:'https://m.media-amazon.com/images/I/71kXFbrtk3L._SX695_.jpg',
    price:6999,
    qty:1

  },
  { id:7,
    name:'Gola Womens Coaster Rainbow',
    category:'women',
    imgUrl:'https://m.media-amazon.com/images/I/717N1WqqDmL._SX500_.jpg',
    price:12000,
    qty:1

  },
  { id:8,
    name:'Saint Womens Brown Snake Print',
    category:'women',
    imgUrl:'https://m.media-amazon.com/images/I/81Ai8k+K28L._SY575_.jpg',
    price:18000,
    qty:1

  },
  { id:9,
    name:'Saxon. Ladies',
    category:'women',
    imgUrl:'https://m.media-amazon.com/images/I/81TgT7tYwtL._SY500_.jpg',
    price:7600,
    qty:1

  },
  { id:10,
    name:'NIKE WMNS Runallday',
    category:'women',
    imgUrl:'https://m.media-amazon.com/images/I/71qxAo0BcTL._SX575_.jpg',
    price:5669,
    qty:1

  },
  { id:11,
    name:'Kenneth Cole Leather ',
    category:'women',
    imgUrl:'https://m.media-amazon.com/images/I/71Fiu77-BRL._SX500_.jpg',
    price:8779,
    qty:1

  },
  { id:12,
    name:'NIKE W Court',
    category:'women',
    imgUrl:'https://m.media-amazon.com/images/I/71jc-7OKGYL._SX500_.jpg',
    price:3456,
    qty:1

  },
  { id:13,
    name:'UGG Womens Dakota ',
    category:'women',
    imgUrl:'https://m.media-amazon.com/images/I/71ExPDlO4oL._SX575_.jpg',
    price:9999,
    qty:1

  },
  { id:14,
    name:'NIKE Air Max SC',
    category:'women',
    imgUrl:'https://m.media-amazon.com/images/I/41WE+B3PcxL._SY500_.jpg',
    price:4566,
    qty:1

  },
  { id:15,
    name:'Nike women Flex Plus',
    category:'women',
    imgUrl:'https://m.media-amazon.com/images/I/61jsZ012d8L._SX500_.jpg',
    price:3400,
    qty:1

  },
  { id:16,
    name:'Nike Womens WMNS Zoom',
    category:'women',
    imgUrl:'https://m.media-amazon.com/images/I/51pfLNFmgjL._SY500_.jpg',
    price:5400,
    qty:1

  },
  { id:17,
    name:'Nike Womens W Zoom Court Lite 3',
    category:'women',
    imgUrl:'https://m.media-amazon.com/images/I/71N7KrqnZFL._SX500_.jpg',
    price:7899,
    qty:1

  },
  { id:18,
    name:'Saxon Ladies Syntovia',
    category:'women',
    imgUrl:'https://m.media-amazon.com/images/I/71q8M662UnL._SX575_.jpg',
    price:5300,
    qty:1

  },
  { id:19,
    name:'Puma Womens Explore Nitro WNS',
    category:'women',
    imgUrl:'https://m.media-amazon.com/images/I/51DIJlxCQUL._SY575_.jpg',
    price:8700,
    qty:1

  },
  { id:20,
    name:'PinUp Angel Women Athletic',
    category:'women',
    imgUrl:'https://m.media-amazon.com/images/I/61iUqdUUBcL._SY575_.jpg',
    price:12700,
    qty:1

  },
  { id:21,
    name:'NIKE W Court',
    category:'women',
    imgUrl:'https://m.media-amazon.com/images/I/71jc-7OKGYL._SX500_.jpg',
    price:3456,
    qty:1

  },
  { id:22,
    name:'UGG Womens Dakota ',
    category:'women',
    imgUrl:'https://m.media-amazon.com/images/I/71ExPDlO4oL._SX575_.jpg',
    price:9999,
    qty:1

  },
  { id:23,
    name:'NIKE Air Max SC',
    category:'women',
    imgUrl:'https://m.media-amazon.com/images/I/41WE+B3PcxL._SY500_.jpg',
    price:4566,
    qty:1

  },
  { id:24,
    name:'Nike women Flex Plus',
    category:'women',
    imgUrl:'https://m.media-amazon.com/images/I/61jsZ012d8L._SX500_.jpg',
    price:4999,
    qty:1

  },
  {
    id:25,
    name:'new balance Men BB480',
    category:'men',
    imgUrl:'https://m.media-amazon.com/images/I/51-+xGf49wL._SY575_.jpg',
    price:4500,
    qty:1
  },
  {
    id:26,
    name:'Nike mens Nike Air',
    category:'men',
    imgUrl:'https://m.media-amazon.com/images/I/81TEHdGvzNL._SX575_.jpg',
    price:4899,
    qty:1
  },
  {
    id:27,
    name:'new balance Men EVOZ Black',
    category:'men',
    imgUrl:'https://m.media-amazon.com/images/I/61juOuZXa2L._SX500_.jpg',
    price:5700,
    qty:1
  },
  {
    id:28,
    name:'Hush Puppies Mens Florian',
    category:'men',
    imgUrl:'https://m.media-amazon.com/images/I/51bYbyYrOYL._SY575_.jpg',
    price:18900,
    qty:1
  },
  {
    id:29,
    name:'Nike Mens M Zoom ',
    category:'men',
    imgUrl:'https://m.media-amazon.com/images/I/81gKBfR83kL._SX500_.jpg',
    price:22300,
    qty:1
  },
  {
    id:30,
    name:'NIKE Mens M Air Max Alpha Trainer',
    category:'men',
    imgUrl:'https://m.media-amazon.com/images/I/717RnLtsv7L._SX575_.jpg',
    price:13000,
    qty:1
  },
  {
    id:31,
    name:'new balance Men Arishi Natural',
    category:'men',
    imgUrl:'https://m.media-amazon.com/images/I/71kGdJoDdFL._SY575_.jpg',
    price:13000,
    qty:1
  },
  {
    id:32,
    name:'adidas mens Alphabounce',
    category:'men',
    imgUrl:'https://m.media-amazon.com/images/I/71ibwHj4AWL._SX575_.jpg',
    price:12400,
    qty:1
  },
  {
    id:33,
    name:'ASICS Men s GT-2000',
    category:'men',
    imgUrl:'https://m.media-amazon.com/images/I/61+C1XxhZRL._SX575_.jpg',
    price:5300,
    qty:1
  },
  {
    id:34,
    name:'Reebok Mens ZigWild ',
    category:'men',
    imgUrl:'https://m.media-amazon.com/images/I/81Wa7iBHi8L._SX675_.jpg',
    price:8900,
    qty:1
  },
  {
    id:35,
    name:'new balance Unisex 327',
    category:'men',
    imgUrl:'https://m.media-amazon.com/images/I/61HuttnC-QL._SY575_.jpg',
    price:3400,
    qty:1
  },
  {
    id:36,
    name:'ASICS Mens Gel-Lyte',
    category:'men',
    imgUrl:'https://m.media-amazon.com/images/I/61c7XYTuBHL._SX575_.jpg',
    price:4500,
    qty:1
  },
  {
    id:37,
    name:'ASICS Mens Fujispeed',
    category:'men',
    imgUrl:'https://m.media-amazon.com/images/I/61tjAS1RqcL._SY500_.jpg',
    price:9000,
    qty:1
  },
  {
    id:38,
    name:'Puma Mens Bowling ',
    category:'men',
    imgUrl:'https://m.media-amazon.com/images/I/61w3u3lrvYL._SY575_.jpg',
    price:3455,
    qty:1
  },
  {
    id:39,
    name:'Adidas Mens Hoops 3.0',
    category:'men',
    imgUrl:'https://m.media-amazon.com/images/I/61NgC47YQTL._SY575_.jpg',
    price:8799,
    qty:1
  },
  {
    id:40,
    name:'ASICS Upcourt ',
    category:'men',
    imgUrl:'https://m.media-amazon.com/images/I/51+B-mL7e0L._SX500_.jpg',
    price:5999,
    qty:1
  },
  {
    id:41,
    name:'ASICS Mens Court',
    category:'men',
    imgUrl:'https://m.media-amazon.com/images/I/61xvVUbfUvL._SX500_.jpg',
    price:7999,
    qty:1
  },
  {
    id:42,
    name:'ASICS Men s Gel-Gully ',
    category:'men',
    imgUrl:'https://m.media-amazon.com/images/I/51v1TgMXT4L._SX695_.jpg',
    price:6999,
    qty:1
  },
  {
    id:43,
    name:'Puma Mens Fast-trac Nitro',
    category:'men',
    imgUrl:'https://m.media-amazon.com/images/I/51jjZykSIGL._SY675_.jpg',
    price:8999,
    qty:1
  },
  {
    id:44,
    name:'Nike Mens Waffle',
    category:'men',
    imgUrl:'https://m.media-amazon.com/images/I/51dMXpFu4zL._SY575_.jpg',
    price:3488,
    qty:1
  },
  {
    id:45,
    name:'NIKE Elevate',
    category:'men',
    imgUrl:'https://m.media-amazon.com/images/I/611mHd8rW1L._SY695_.jpg',
    price:1999,
    qty:1
  },
  {
    id:46,
    name:'Nike Nikecourt',
    category:'men',
    imgUrl:'https://m.media-amazon.com/images/I/61Q94vv6kpL._SX575_.jpg',
    price:2999
    ,
    qty:1
  },
  {
    id:47,
    name:'ASIAN Mens Tarzan',
    category:'men',
    imgUrl:'https://m.media-amazon.com/images/I/71cflgAolqL._SY675_.jpg',
    price:3999,
    qty:1
  },
  {
    id:48,
    name:'NIKE Elevate 3',
    category:'men',
    imgUrl:'https://m.media-amazon.com/images/I/61Uo-VtmD4L._SY575_.jpghttps://m.media-amazon.com/images/I/61Uo-VtmD4L._SY575_.jpg',
    price:4999,
    qty:1
  },
  {
    id:49,
    name:'Saucony Mens Triumph 21',
    category:'men',
    imgUrl:'https://m.media-amazon.com/images/I/517jzCkABaL._SY500_.jpg',
    price:5999,
    qty:1
  },
  {
    id: 1,
    name: "ADIDAS d435",
    category: "women",
    imgUrl:
      "https://cdn.media.amplience.net/s/scvl/126164_306406_SET/2?fmt=auto&$webPdpProduct$",
    price: 6500,
    qty:1
  },
  {
    id: 2,
    name: "ADIDAS L768",
    category: "women",
    imgUrl:
      "https://cdn.media.amplience.net/s/scvl/111899_306339_SET/1?fmt=auto&$webPdpProduct$",
    price: 7500,
    qty:1
  },
  {
    id: 3,
    name: "NEW BALANCE 237-M",
    category: "women",
    imgUrl:
      "https://cdn.media.amplience.net/s/scvl/144406_308584_SET/2?fmt=auto&$webPdpProduct$",
    price: 10000,
    qty:1
  },
  {
    id: 4,
    name: "NEW BALANCE W420V2 ",
    category: "women",
    imgUrl:
      "https://cdn.media.amplience.net/s/scvl/127213_270717_SET/2?fmt=auto&$webPdpProduct$",
    price: 5900,
    qty:1
  },
  {
    id: 4 ,
    name:'SKECHERS MOSECO 65355 ',
    category:'women',
    imgUrl:'https://cdn.media.amplience.net/s/scvl/97027_194212_SET/2?fmt=auto&$webPdpProduct$',
    price:5699,
    qty:1
  },
  {
    id:5,
    name:'SKECHERS D LITES TIFFANY 11097',
    category:'women',
    imgUrl:'https://cdn.media.amplience.net/s/scvl/1172_31550_SET/2?fmt=auto&$webPdpProduct$',
    price:3999,
    qty:1
  },
  { id:6,
    name:'Adidas Womens Ultraboost ',
    category:'women',
    imgUrl:'https://m.media-amazon.com/images/I/71kXFbrtk3L._SX695_.jpg',
    price:6999,
    qty:1

  },
  { id:7,
    name:'Gola Womens Coaster Rainbow',
    category:'women',
    imgUrl:'https://m.media-amazon.com/images/I/717N1WqqDmL._SX500_.jpg',
    price:12000,
    qty:1

  },
  { id:8,
    name:'Saint Womens Brown Snake Print',
    category:'women',
    imgUrl:'https://m.media-amazon.com/images/I/81Ai8k+K28L._SY575_.jpg',
    price:18000,
    qty:1

  },
  { id:9,
    name:'Saxon. Ladies',
    category:'women',
    imgUrl:'https://m.media-amazon.com/images/I/81TgT7tYwtL._SY500_.jpg',
    price:7600,
    qty:1

  },
  { id:10,
    name:'NIKE WMNS Runallday',
    category:'women',
    imgUrl:'https://m.media-amazon.com/images/I/71qxAo0BcTL._SX575_.jpg',
    price:5669,
    qty:1

  },
  { id:11,
    name:'Kenneth Cole Leather ',
    category:'women',
    imgUrl:'https://m.media-amazon.com/images/I/71Fiu77-BRL._SX500_.jpg',
    price:8779,
    qty:1

  },
  { id:12,
    name:'NIKE W Court',
    category:'women',
    imgUrl:'https://m.media-amazon.com/images/I/71jc-7OKGYL._SX500_.jpg',
    price:3456,
    qty:1

  },
  { id:13,
    name:'UGG Womens Dakota ',
    category:'women',
    imgUrl:'https://m.media-amazon.com/images/I/71ExPDlO4oL._SX575_.jpg',
    price:9999,
    qty:1

  },
  { id:14,
    name:'NIKE Air Max SC',
    category:'women',
    imgUrl:'https://m.media-amazon.com/images/I/41WE+B3PcxL._SY500_.jpg',
    price:4566,
    qty:1

  },
  { id:15,
    name:'Nike women Flex Plus',
    category:'women',
    imgUrl:'https://m.media-amazon.com/images/I/61jsZ012d8L._SX500_.jpg',
    price:3400,
    qty:1

  },
  { id:16,
    name:'Nike Womens WMNS Zoom',
    category:'women',
    imgUrl:'https://m.media-amazon.com/images/I/51pfLNFmgjL._SY500_.jpg',
    price:5400,
    qty:1

  },
  { id:17,
    name:'Nike Womens W Zoom Court Lite 3',
    category:'women',
    imgUrl:'https://m.media-amazon.com/images/I/71N7KrqnZFL._SX500_.jpg',
    price:7899,
    qty:1

  },
  { id:18,
    name:'Saxon Ladies Syntovia',
    category:'women',
    imgUrl:'https://m.media-amazon.com/images/I/71q8M662UnL._SX575_.jpg',
    price:5300,
    qty:1

  },
  { id:19,
    name:'Puma Womens Explore Nitro WNS',
    category:'women',
    imgUrl:'https://m.media-amazon.com/images/I/51DIJlxCQUL._SY575_.jpg',
    price:8700,
    qty:1

  },
  { id:20,
    name:'PinUp Angel Women Athletic',
    category:'women',
    imgUrl:'https://m.media-amazon.com/images/I/61iUqdUUBcL._SY575_.jpg',
    price:12700,
    qty:1

  },
  { id:21,
    name:'NIKE W Court',
    category:'women',
    imgUrl:'https://m.media-amazon.com/images/I/71jc-7OKGYL._SX500_.jpg',
    price:3456,
    qty:1

  },
  { id:22,
    name:'UGG Womens Dakota ',
    category:'women',
    imgUrl:'https://m.media-amazon.com/images/I/71ExPDlO4oL._SX575_.jpg',
    price:9999,
    qty:1

  },
  { id:23,
    name:'NIKE Air Max SC',
    category:'women',
    imgUrl:'https://m.media-amazon.com/images/I/41WE+B3PcxL._SY500_.jpg',
    price:4566,
    qty:1

  },
  { id:24,
    name:'Nike women Flex Plus',
    category:'women',
    imgUrl:'https://m.media-amazon.com/images/I/61jsZ012d8L._SX500_.jpg',
    price:4999,
    qty:1

  },
  {
    id:25,
    name:'new balance Men BB480',
    category:'men',
    imgUrl:'https://m.media-amazon.com/images/I/51-+xGf49wL._SY575_.jpg',
    price:4500,
    qty:1
  },
  {
    id:26,
    name:'Nike mens Nike Air',
    category:'men',
    imgUrl:'https://m.media-amazon.com/images/I/81TEHdGvzNL._SX575_.jpg',
    price:4899,
    qty:1
  },
  {
    id:27,
    name:'new balance Men EVOZ Black',
    category:'men',
    imgUrl:'https://m.media-amazon.com/images/I/61juOuZXa2L._SX500_.jpg',
    price:5700,
    qty:1
  },
  {
    id:28,
    name:'Hush Puppies Mens Florian',
    category:'men',
    imgUrl:'https://m.media-amazon.com/images/I/51bYbyYrOYL._SY575_.jpg',
    price:18900,
    qty:1
  },
  {
    id:29,
    name:'Nike Mens M Zoom ',
    category:'men',
    imgUrl:'https://m.media-amazon.com/images/I/81gKBfR83kL._SX500_.jpg',
    price:22300,
    qty:1
  },
  {
    id:30,
    name:'NIKE Mens M Air Max Alpha Trainer',
    category:'men',
    imgUrl:'https://m.media-amazon.com/images/I/717RnLtsv7L._SX575_.jpg',
    price:13000,
    qty:1
  },
  {
    id:31,
    name:'new balance Men Arishi Natural',
    category:'men',
    imgUrl:'https://m.media-amazon.com/images/I/71kGdJoDdFL._SY575_.jpg',
    price:13000,
    qty:1
  },
  {
    id:32,
    name:'adidas mens Alphabounce',
    category:'men',
    imgUrl:'https://m.media-amazon.com/images/I/71ibwHj4AWL._SX575_.jpg',
    price:12400,
    qty:1
  },
  {
    id:33,
    name:'ASICS Men s GT-2000',
    category:'men',
    imgUrl:'https://m.media-amazon.com/images/I/61+C1XxhZRL._SX575_.jpg',
    price:5300,
    qty:1
  },
  {
    id:34,
    name:'Reebok Mens ZigWild ',
    category:'men',
    imgUrl:'https://m.media-amazon.com/images/I/81Wa7iBHi8L._SX675_.jpg',
    price:8900,
    qty:1
  },
  {
    id:35,
    name:'new balance Unisex 327',
    category:'men',
    imgUrl:'https://m.media-amazon.com/images/I/61HuttnC-QL._SY575_.jpg',
    price:3400,
    qty:1
  },
  {
    id:36,
    name:'ASICS Mens Gel-Lyte',
    category:'men',
    imgUrl:'https://m.media-amazon.com/images/I/61c7XYTuBHL._SX575_.jpg',
    price:4500,
    qty:1
  },
  {
    id:37,
    name:'ASICS Mens Fujispeed',
    category:'men',
    imgUrl:'https://m.media-amazon.com/images/I/61tjAS1RqcL._SY500_.jpg',
    price:9000,
    qty:1
  },
  {
    id:38,
    name:'Puma Mens Bowling ',
    category:'men',
    imgUrl:'https://m.media-amazon.com/images/I/61w3u3lrvYL._SY575_.jpg',
    price:3455,
    qty:1
  },
  {
    id:39,
    name:'Adidas Mens Hoops 3.0',
    category:'men',
    imgUrl:'https://m.media-amazon.com/images/I/61NgC47YQTL._SY575_.jpg',
    price:8799,
    qty:1
  },
  {
    id:40,
    name:'ASICS Upcourt ',
    category:'men',
    imgUrl:'https://m.media-amazon.com/images/I/51+B-mL7e0L._SX500_.jpg',
    price:5999,
    qty:1
  },
  {
    id:41,
    name:'ASICS Mens Court',
    category:'men',
    imgUrl:'https://m.media-amazon.com/images/I/61xvVUbfUvL._SX500_.jpg',
    price:7999,
    qty:1
  },
  {
    id:42,
    name:'ASICS Men s Gel-Gully ',
    category:'men',
    imgUrl:'https://m.media-amazon.com/images/I/51v1TgMXT4L._SX695_.jpg',
    price:6999,
    qty:1
  },
  {
    id:43,
    name:'Puma Mens Fast-trac Nitro',
    category:'men',
    imgUrl:'https://m.media-amazon.com/images/I/51jjZykSIGL._SY675_.jpg',
    price:8999,
    qty:1
  },
  {
    id:44,
    name:'Nike Mens Waffle',
    category:'men',
    imgUrl:'https://m.media-amazon.com/images/I/51dMXpFu4zL._SY575_.jpg',
    price:3488,
    qty:1
  },
  {
    id:45,
    name:'NIKE Elevate',
    category:'men',
    imgUrl:'https://m.media-amazon.com/images/I/611mHd8rW1L._SY695_.jpg',
    price:1999,
    qty:1
  },
  {
    id:46,
    name:'Nike Nikecourt',
    category:'men',
    imgUrl:'https://m.media-amazon.com/images/I/61Q94vv6kpL._SX575_.jpg',
    price:2999
    ,
    qty:1
  },
  {
    id:47,
    name:'ASIAN Mens Tarzan',
    category:'men',
    imgUrl:'https://m.media-amazon.com/images/I/71cflgAolqL._SY675_.jpg',
    price:3999,
    qty:1
  },
  {
    id:48,
    name:'NIKE Elevate 3',
    category:'men',
    imgUrl:'https://m.media-amazon.com/images/I/61Uo-VtmD4L._SY575_.jpghttps://m.media-amazon.com/images/I/61Uo-VtmD4L._SY575_.jpg',
    price:4999,
    qty:1
  },
  {
    id:49,
    name:'Saucony Mens Triumph 21',
    category:'men',
    imgUrl:'https://m.media-amazon.com/images/I/517jzCkABaL._SY500_.jpg',
    price:5999,
    qty:1
  },
];

export default items;
