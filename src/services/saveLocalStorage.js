async function saveLocalStorage(value) {
  const cartItem = JSON.parse(localStorage.getItem('cartItem'));

  if (cartItem) {
    localStorage.setItem('cartItem', JSON.stringify([...cartItem, value]));
  } else {
    localStorage.setItem('cartItem', JSON.stringify([value]));
  }
}

export default saveLocalStorage;
