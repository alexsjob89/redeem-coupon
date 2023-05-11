import React,{useState} from 'react';

const RedeemCoupon = () => {
  const [couponCode, setCouponCode] = useState('HJY7-KU77-0P99-OIY8');
  const [message, setMessage] = useState('');

  const handleCouponInputChange = (e) => {
    setCouponCode(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setTimeout(() => {
      if (couponCode === 'SAVE10') {
        setMessage('Coupon code applied! You saved 10%!');
      } else {
        setMessage('Invalid coupon code.');
      }
    }, 1000);
  };

  return (

    <div className='RedeemCoupon'>
    <div className="content">
  <h1><span>FOR CHRISTMAS</span><br></br>FILL YOUR EARS WITH</h1>
  <div className="paragraphs">
<h3>3 MONTHS OF APLLE MUSIC</h3><p> To redeem your offer, visitrandomsite.com/register to
register your product and use the code bellow</p>
</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter coupon code"
          value={couponCode}
          onChange={handleCouponInputChange}
        />
        <button type="submit">Apply Coupon</button>
      </form>
      {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default RedeemCoupon;