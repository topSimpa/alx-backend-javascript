export default function updateUniqueItems(initMap) {
  if (!(initMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  initMap.forEach((val, key) => {
    if (val === 1) {
      initMap.set(key, 100);
    }
  });
  return initMap;
}
