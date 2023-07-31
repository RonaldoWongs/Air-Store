import React, { useState } from 'react';
import Modal from 'react-modal';

const Cart = ({ cartItems, removeFromCart, removeAllItemsFromCart }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const handleBuy = () => {
    if (cardNumber.trim() === '' || expiryDate.trim() === '' || cvv.trim() === '' || address.trim() === '' || country.trim() === '') {
      setErrorMessage('Please fill in all fields.');
    } else {
      alert('Compra realizada con éxito. Gracias por tu compra!');
      removeAllItemsFromCart();
    }
  };

  const [isCartVisible, setCartVisibility] = useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className={`cart-container ${isCartVisible ? 'cart-visible' : ''}`}>
      <h2>Cart</h2>
      <ul className="cart-items">
        {cartItems.map((item, index) => (
          <li key={index}>
            <div className="item-details">
              <img src={item.image} alt={item.name} className="product-thumbnail" />
              <div>
                <p>{item.name}</p>
                <p>Price: ${item.price.toFixed(2)}</p>
              </div>
            </div>
            <button onClick={() => removeFromCart(index)}>
              <i className="bx bx-trash"></i> Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="total-container">
        <p>Total: ${getTotal()}</p>
      </div>
      {cartItems.length > 0 && (
        <div className="checkout-container">
          <button className="checkout-button ov-btn-grow-skew" onClick={handleOpenModal}>
            Comprar
          </button>
        </div>
      )}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        className={`cart-modal ${modalIsOpen ? 'cart-modal-open' : ''}`}
        overlayClassName="cart-modal-overlay"
        contentLabel="Payment Details Modal"
        style={{
          content: {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '400px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          },
        }}
      >
        <h2>Payment Details</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form style={{ width: '100%' }}>
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="Enter your card number"
              style={{ width: '100%' }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="expiryDate">Expiry Date</label>
            <input
              type="text"
              id="expiryDate"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              placeholder="MM/YY"
              style={{ width: '100%' }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="CVV"
              style={{ width: '100%' }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your address"
              style={{ width: '100%' }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="Enter your country"
              style={{ width: '100%' }}
            />
          </div>
          <button type="button" onClick={handleBuy} className="ov-btn-grow-skew" style={{ width: '100%' }}>
            Confirm Purchase
          </button>

        </form>
      </Modal>
    </div>
  );
};

export default Cart;
