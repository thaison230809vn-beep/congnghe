import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.css";
// Import các icon chuyên nghiệp từ thư viện react-icons
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerMain}>
        {/* Cột 1: Logo và giới thiệu */}
        <div className={styles.footerColumn}>
           <div className={styles.logoContainer}>
             <Link href="/">
                <Image 
                  src="/logo-son.png" 
                  alt="Son Luxury Logo" 
                  width={120} 
                  height={120} 
                  style={{ objectFit: 'contain' }}
                  priority
                />
             </Link>
           </div>
           <p className={styles.description}>
             Son Luxury Store - Hệ thống bán lẻ điện máy cao cấp, mang đến giải pháp sống thông minh và đẳng cấp cho mọi gia đình Việt.
           </p>
        </div>

        {/* Cột 2: Dịch vụ */}
        <div className={styles.footerColumn}>
          <h4 className={styles.columnTitle}>DỊCH VỤ</h4>
          <ul className={styles.linkList}>
            <li><Link href="/">Chính sách bảo hành</Link></li>
            <li><Link href="/">Chính sách đổi trả</Link></li>
            <li><Link href="/">Vận chuyển tận nơi</Link></li>
            <li><Link href="/">Hướng dẫn trả góp</Link></li>
          </ul>
        </div>

        {/* Cột 3: Thông tin */}
        <div className={styles.footerColumn}>
          <h4 className={styles.columnTitle}>THÔNG TIN</h4>
          <ul className={styles.linkList}>
            <li><Link href="/">Về chúng tôi</Link></li>
            <li><Link href="/">Hệ thống cửa hàng</Link></li>
            <li><Link href="/">Tuyển dụng</Link></li>
            <li><Link href="/">Liên hệ đối tác</Link></li>
          </ul>
        </div>

        {/* Cột 4: Kết nối */}
        <div className={styles.footerColumn}>
          <h4 className={styles.columnTitle}>KẾT NỐI</h4>
          <div className={styles.contactInfo}>
            <p>Hotline: <span>1900 xxxx</span></p>
            <p>Email: <span>cskh@sonluxury.com</span></p>
            <p>Địa chỉ: Quận 1, TP. Hồ Chí Minh</p>
          </div>
          
          {/* Khu vực Social Icons */}
          <div className={styles.socialGroup}>
            <Link href="https://facebook.com" className={styles.socialLink} target="_blank">
              <FaFacebookF />
            </Link>
            <Link href="https://instagram.com" className={styles.socialLink} target="_blank">
              <FaInstagram />
            </Link>
            <Link href="https://youtube.com" className={styles.socialLink} target="_blank">
              <FaYoutube />
            </Link>
            <Link href="https://tiktok.com" className={styles.socialLink} target="_blank">
              <FaTiktok />
            </Link>
          </div>
        </div>
      </div>

      {/* Dòng bản quyền phía dưới cùng */}
      <div className={styles.footerBottom}>
        <div className={styles.divider}></div>
        <p>© 2026 SON LUXURY STORE. TẤT CẢ QUYỀN ĐƯỢC BẢO LƯU.</p>
      </div>
    </footer>
  );
}