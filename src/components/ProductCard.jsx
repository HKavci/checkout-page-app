import Button from "./Button"

const ProductCard = ({item, getData}) => {
   
    const {id, name, image, price, dampingRate} = item

  return (
    
    <div className="card mb-3 mx-auto shadow p-3 text-center" style={{maxWidth: '540px'}} id={id}>
        <div className="row g-0 align-items-center">
          <div className="col-md-4">
            <img src={image} className="img-fluid rounded-start border shadow p-1" alt="img" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">$ {(price*dampingRate).toFixed(2)} <del>{price}</del> </p>
              <Button item={item} getData={getData} />
            </div>
          </div>
        </div>
      </div>
  )
}

export default ProductCard