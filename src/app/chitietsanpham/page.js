"use client";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import styles from "./chitietsanpham.module.css"; 
import { products } from "../data"; 

function ProductContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id') || 1; 
  const product = products[id] || products[1]; 

  const [mainIndex, setMainIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  return (
    <div className={styles.container}>
      {/* 1. Nút quay lại */}
      <nav style={{ marginBottom: '20px' }}>
        <Link href="/" style={{ textDecoration: 'none', color: '#64748b' }}>← Quay lại trang chủ</Link>
      </nav>
      
      <div className={styles.productWrapper}>
        {/* Cột hình ảnh */}
        <div className={styles.imageSection}>
          <div className={styles.mainImage} onClick={() => setLightboxIndex(mainIndex)} style={{ cursor: 'pointer' }}>
            <Image 
              src={product.images[mainIndex]} 
              alt={product.name} 
              fill 
              style={{ objectFit: 'contain' }} 
              priority 
            />
          </div>
          
          <div className={styles.thumbnails}>
            {product.images.map((src, i) => (
              <div key={i} className={styles.thumbItem} onClick={() => setMainIndex(i)} 
                   style={{ border: mainIndex === i ? '2px solid #2563eb' : '1px solid #e2e8f0' }}>
                <Image src={src} alt="Thumb" width={70} height={70} style={{ objectFit: 'cover', borderRadius: '8px', cursor: 'pointer' }} />
              </div>
            ))}
          </div>
        </div>

        {/* Cột thông tin */}
        <div className={styles.infoSection}>
          <h1 className={styles.title}>{product.name}</h1>
          <div className={styles.price}>{product.price}</div>
          
          <div className={styles.offers}>
            <h4 style={{ margin: '0 0 10px 0' }}>Ưu đãi khi mua:</h4>
            <ul>
              {/* PHẦN THAY ĐỔI: Hiển thị ưu đãi động từ data.js */}
              {product.offers && product.offers.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <button className={styles.buyButton}>Mua ngay</button>
        </div>
      </div>

      {/* 3. Thông số kỹ thuật */}
      <div className={styles.specsSection}>
        <h3>Thông số kỹ thuật</h3>
        <table className={styles.specTable}>
          <tbody>
            {product.specs.map((item, index) => (
              <tr key={index} className={styles.specRow}>
                <td className={styles.specLabel}>{item.label}</td>
                <td className={styles.specValue}>{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 4. Lightbox */}
      {lightboxIndex !== null && (
        <div className={styles.lightbox} onClick={() => setLightboxIndex(null)}>
          <button className={styles.closeBtn}>✕</button>
          <button className={`${styles.navBtn} ${styles.prevBtn}`} 
            onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + product.images.length) % product.images.length); }}>❮</button>
          
          <img src={product.images[lightboxIndex]} className={styles.lightboxImage} onClick={(e) => e.stopPropagation()} alt="Zoom" />
          
          <button className={`${styles.navBtn} ${styles.nextBtn}`} 
            onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % product.images.length); }}>❯</button>
          
          <div className={styles.lightboxThumbContainer} onClick={(e) => e.stopPropagation()}>
            {product.images.map((src, i) => (
              <img key={i} src={src} className={`${styles.lightboxThumb} ${lightboxIndex === i ? styles.active : ''}`} 
                   onClick={() => setLightboxIndex(i)} alt="Thumb Zoom" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function ChiTietSanPham() {
  return (
    <Suspense fallback={<div>Đang tải sản phẩm...</div>}>
      <ProductContent />
    </Suspense>
  );
}