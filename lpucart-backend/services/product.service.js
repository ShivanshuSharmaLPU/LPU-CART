import React from "react";
import products from "./productItem"; 

const ProductItem = () => {
  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f5f5f5",
      padding: "20px",
      textAlign: "center",
    },
    heading: {
      color: "#333",
    },
    productContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    productCard: {
      backgroundColor: "#fff",
      borderRadius: "8px",
      padding: "15px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      textAlign: "center",
      transition: "transform 0.3s ease-in-out",
    },
    productImage: {
      width: "100%",
      maxHeight: "200px",
      objectFit: "cover",
      borderRadius: "8px",
    },
    productName: {
      margin: "10px 0",
      fontSize: "18px",
      color: "#333",
    },
    productDesc: {
      color: "#555",
      fontSize: "14px",
    },
    price: {
      fontWeight: "bold",
    },
    button: {
      backgroundColor: "#28a745",
      color: "white",
      border: "none",
      padding: "10px 15px",
      cursor: "pointer",
      borderRadius: "5px",
      fontSize: "14px",
      transition: "background 0.3s ease",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Product List</h2>
      <div style={styles.productContainer}>
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product._id.$oid || product._id} style={styles.productCard}>
              <img src={product.image} alt={product.name} style={styles.productImage} />
              <h3 style={styles.productName}>{product.name}</h3>
              <p style={styles.productDesc}>{product.description || "No description available"}</p>
              <p style={styles.price}>Price: ${product.cost || "N/A"}</p>
              <button 
                style={styles.button} 
                onMouseOver={(e) => e.target.style.backgroundColor = "#218838"}
                onMouseOut={(e) => e.target.style.backgroundColor = "#28a745"}
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
