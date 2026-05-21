"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./slider.module.css"; 
import { banners } from "../../data"; // Đường dẫn đúng với vị trí mới của data.js

export function BannerSlider() {
  const [current, setCurrent] = useState(0);

  // Tự động chuyển slide sau 4 giây
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent(current === banners.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? banners.length - 1 : current - 1);

  return (
    <div className={styles.bannerWrapper}>
      <div className={styles.slider}>
        <button className={`${styles.navBtn} ${styles.prev}`} onClick={prevSlide}>❮</button>
        
        <div className={styles.slideContainer}>
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              className={`${styles.slide} ${index === current ? styles.active : ""}`}
            >
              {/* ĐÃ SỬA Ở ĐÂY: Bỏ điều kiện index === current để ảnh luôn tồn tại ngầm bên dưới, giúp lúc chuyển cảnh không bị trắng */}
              
<Image
  src={banner.image}
  alt={`Promotion Banner ${index + 1}`}
  fill
  priority={index === 0}
  style={{ objectFit: "contain" }} // Đổi từ cover sang contain
/>
            </div>
          ))}
        </div>

        <button className={`${styles.navBtn} ${styles.next}`} onClick={nextSlide}>❯</button>

        <div className={styles.dots}>
          {banners.map((_, i) => (
            <span 
              key={i} 
              className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
              onClick={() => setCurrent(i)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}