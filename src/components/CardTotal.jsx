
const CardTotal = ({productlist}) => {
  
  const total = productlist.reduce((total, item) => total + item.amount*item.price*item.dampingRate, 0).toFixed(2)
  

  return (
    <div className="card mx-auto mb-3 shadow p-3" style={{ maxWidth: "540px" }}>
      <ul className="list-group list-group-flush">
        <li className="d-flex justify-content-between list-group-item ">Subtotal <span>${total}</span>  </li>
        <li className="d-flex justify-content-between list-group-item">Tax (18%) <span>${(total*0.18).toFixed(2)}</span> </li>
        <li className="d-flex justify-content-between list-group-item">Shipping <span>$25.00</span> </li>
        <li className="d-flex justify-content-between list-group-item">Total <span>${(+total + +(total*0.18).toFixed(2) + 25).toFixed(2)}</span> </li>
      </ul>
    </div>
  );
};

export default CardTotal;
