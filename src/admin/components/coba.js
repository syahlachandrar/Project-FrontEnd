import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    fetch('http://localhost:8080/api/readProductApi')
      .then(response => response.json())
      .then(data => setProducts(data.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleUpdate = (product) => {
    setProductId(product.id);
    setProductName(product.name);
    setProductDesc(product.desc);
    setProductPrice(product.harga1);
    setCurrentProduct(product);
    setIsModalOpen(true);
  };

  const handleDelete = (productId) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this product?");

    if (isConfirmed) {
      axios.delete(http://localhost:8080/api/delete-product-api/${productId})
        .then(response => {
          console.log('Product deleted successfully:', response.data);
          fetch('http://localhost:8080/api/readProductApi')
            .then(response => response.json())
            .then(data => setProducts(data.data))
            .catch(error => console.error('Error fetching data:', error));
        })
        .catch(error => console.error('Error deleting product:', error));
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setProductId("");
    setProductName("");
    setProductDesc("");
    setProductPrice("");
    setCurrentProduct(null);
  };

  const handleUpdateData = async (event) => {
    event.preventDefault();
    try {
      const putData = await axios.put(http://localhost:8080/api/update-product-api/${productId}, {
        name: productName,
        desc: productDesc,
        harga1: productPrice,
      });
      alert(putData.data.message);
      fetch('http://localhost:8080/api/readProductApi')
        .then(response => response.json())
        .then(data => setProducts(data.data))
        .catch(error => console.error('Error fetching data:', error));
      handleCloseModal();
    } catch (error) {
      alert("Data Gagal diubah");
    }
  };
  
  return (
    <div className="product-list-page">
      <div className="product-container">
        {products.map(product => (
          <div key={product.id} className="product-box">
            <h2>{product.name}</h2>
            <ul>
              {product.desc.split('\n').map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p>Rp{product.harga1}</p>
            <button
            onClick={() => handleUpdate(product)}
            style={{
              backgroundColor: 'green',
              color: 'white',
              marginRight: '10px',
              borderRadius: '5px',
              padding: '8px 16px',
              border: 'none',
              cursor: 'pointer',
              opacity: '0.9' // Menambahkan transparansi
            }}
          >
            Update
          </button>

          <button
            onClick={() => handleDelete(product.id)}
            style={{
              backgroundColor: 'red',
              color: 'white',
              borderRadius: '5px',
              padding: '8px 16px',
              border: 'none',
              cursor: 'pointer',
              opacity: '0.9' // Menambahkan transparansi
            }}
          >
            Delete
          </button>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="modal-content" style={{ width: '400px', padding: '20px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <span className="close" onClick={handleCloseModal} style={{ cursor: 'pointer', position: 'absolute', top: '10px', right: '10px', fontSize: '20px' }}>&times;</span>
            <h2 style={{ textAlign: 'center' }}>Update Product</h2>
            <form onSubmit={handleUpdateData} style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={{ marginBottom: '8px' }}>Name:</label>
              <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} style={{ marginBottom: '16px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />

              <label style={{ marginBottom: '8px' }}>Description:</label>
              <textarea value={productDesc} onChange={(e) => setProductDesc(e.target.value)} style={{ marginBottom: '16px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />

              <label style={{ marginBottom: '8px' }}>Price:</label>
              <input type="text" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} style={{ marginBottom: '16px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button type="submit" style={{ background: '#4CAF50', color: '#fff', padding: '10px', borderRadius: '4px', border: 'none', cursor: 'pointer' }}>Update</button>
                <button type="button" onClick={handleCloseModal} style={{ background: '#ccc', color: '#000', padding: '10px', borderRadius: '4px', border: 'none', cursor: 'pointer' }}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="additional-info">
        You Will Get File Photo With Google Drive At All Package
      </div>

      <Link to="/moreAdd" className="link-text">
        Ajukan Penawaran
      </Link>
    </div>
  );
};

export default ProductListPage;