interface ProductProps {
  name: string;
  price: number;
  inStock: boolean;
}

function ProductCard({ name, price, inStock }: ProductProps) {
  return (
    <div className="card my-3" style={{ maxWidth: '300px' }}>
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p className="card-text"><strong>Price:</strong> Rs.{price}</p>
        <p className="card-text">
          <span className={inStock ? 'badge bg-success' : 'badge bg-danger'}>
            {inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
