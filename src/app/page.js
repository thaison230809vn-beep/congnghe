"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

// Import chính xác vào thư mục components và slider của bạn
import { Header } from "./compoments/header/header"; 
import { Footer } from "./compoments/footer/footer";
import { BannerSlider } from "./compoments/slider/slider" 

const products = [
  { id: 1, name: 'Quạt điều hòa Kangaroo KG50F103 130W', price: '3.800.000₫', oldPrice: '4.000.000₫', percent: '-20%', img: '/p1.jpg' },
  { id: 2, name: 'Tủ lạnh LG Inverter 571 lít Multi Door LFD58BLMA', price: '25.330.000₫', oldPrice: '34.390.000₫', percent: '-26%', img: '/p2.jpg' },
  { id: 3, name: 'Máy lọc nước RO nóng nguội lạnh Hydrogen Toshiba TWP-W2399SVN(M) 10 lõi', price: '14.190.000₫', oldPrice: '15.180.000₫', percent: '-6%', img: '/p3.jpg' },
  { id: 4, name: 'Máy lạnh 2 chiều Panasonic Inverter 1 HP CU/CS-YZ9AKH-8', price: '13.480.000₫', oldPrice: '13.490.000₫', percent: '≈ 0,1%', img: '/p4.jpg' },
  { id: 5, name: 'Máy giặt LG AI DD Inverter 12 kg FV1412S3B', price: '10.990.000₫', oldPrice: '17.590.000₫', percent: '-37%', img: '/p5.jpg' },
  { id: 6, name: 'Smart Tivi OLED LG AI 4K 77 inch OLED77C6PSA', price: '81.390.000₫', oldPrice: '92.900.000₫', percent: '-12%', img: '/p6.jpg' },
  { id: 7, name: 'Máy lọc không khí LG PuriCare 360 Alpha Double AS10GDBY0.ABAE 72W', price: '22.990.000₫', oldPrice: '38.100.000₫', percent: '-39%', img: '/p7.jpg' },
  { id: 8, name: 'Quạt trần Panasonic 5 cánh F-60GDS-B 40W', price: '5.590.000₫', oldPrice: '7.030.000₫', percent: '-20%', img: '/p8.jpg' },
  { id: 9, name: 'Nồi chiên không dầu Magic Eco 6 lít AC-125', price: '1.050.000₫', oldPrice: '1.990.000₫', percent: '-47%', img: '/p9.jpg' },
  { id: 10, name: 'Máy sấy bơm nhiệt LG 10.5 kg DVHP50B', price: '17.590.000₫', oldPrice: '29.890.000₫', percent: '-41%', img: '/p10.jpg' },
  { id: 11, name: 'Robot hút bụi lau nhà Xiaomi 5 Pro EU', price: '18.990.000₫', oldPrice: '23.690.000₫', percent: '-19%', img: '/p11.jpg' },
  { id: 12, name: 'Ghế massage Poongsan MCP-865', price: '63.990.000₫', oldPrice: '99.990.000₫', percent: '-36%', img: '/p12.jpg' },
];

export default function Home() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleName = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className={styles.container}> 
      <Header />

      {/* Hiển thị Slide Ảnh */}
      <BannerSlider />

      <main className={styles.item2}>
        <div className={styles.mainContent}>
          {products.map((p) => (
            <div key={p.id} className={styles.product}>
              <div className={styles.mainProduct}>
                <div className={styles.productImage} style={{ position: 'relative' }}>
                  <Image src={p.img} alt={p.name} fill sizes="300px" style={{ objectFit: 'contain' }} />
                </div>
                
                <div className={styles.productName} onClick={() => toggleName(p.id)}>
                  <h5 className={expandedId === p.id ? styles.nameFull : styles.nameTruncated}>
                    {p.name}
                  </h5>
                </div>

                <div className={styles.productPrice}>
                  <strong className={styles.price}>{p.price}</strong>
                  <span className={styles.discount}>
                    <label className={styles.oldPrice}>{p.oldPrice}</label>
                    <small className={styles.percent}>{p.percent}</small>
                  </span>
                </div>
              </div>
              <div className={styles.buyButton}>
                <Link href={`/chitietsanpham?id=${p.id}`}>Mua ngay</Link>
              </div>
            </div>
          ))}

          {[...Array(Math.max(0, 12 - products.length))].map((_, i) => (
            <div key={i} className={styles.product}>
              <div className={styles.productPlaceholder}>Sản phẩm sắp về</div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}