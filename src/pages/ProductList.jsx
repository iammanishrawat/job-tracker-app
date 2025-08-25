const ProductList = () => {
  return (
    <>
      <div className="product-list">
        {productListData.map((product) => {
          return (
            <div className="products" key={product.id}>
              <h5>Product Name: {product.title}</h5>
              <p>Product Descriptions: {product.description}</p>
              <p>Category: {product.category}</p>
              <p>Price: {product.price}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default ProductList
