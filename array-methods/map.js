const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const map1 = prices.map((price) => {
  return { price, salePrice: price / 2 };
});

console.log(map1);

const map2 = prices.map((price, index, array) => price.toFixed(2));

console.log(map2);
