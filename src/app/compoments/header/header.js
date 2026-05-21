import Image from "next/image";
import Link from "next/link"; 
import styles from "./header.module.css"; 

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        
        {/* Logo bên trái */}
        <div className={styles.logoWrapper}>
          <Link href="/">
            <Image 
              src="/logo-son.png" 
              alt="Son Mountain" 
              width={100} 
              height={100} 
              priority 
            />
          </Link>
        </div>

        {/* Menu ở giữa */}
        <nav className={styles.nav}>
          <ul>
            <li><Link href="/">TRANG CHỦ</Link></li>
            <li><Link href="/san-pham">SẢN PHẨM</Link></li>
            <li><Link href="/khuyen-mai">KHUYẾN MÃI</Link></li>
            <li><Link href="/tin-tuc">TIN TỨC</Link></li>
          </ul>
        </nav>

        {/* Nút Liên hệ bên phải */}
        <div className={styles.actions}>
           <Link href="/lien-he" className={styles.contactBtn}>
              LIÊN HỆ
           </Link>
        </div>
        
      </div>
    </header>
  );
}