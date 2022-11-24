const imgNames = [
  'dry-air_freezing.jpg',
  'humid-air_freezing',
  'wet-air_freezing',
];

imgNames.forEach(
  (image, index, array) => (array[index] = `assets/status/${image}`)
);

console.log(imgNames);
