"use client"
import "./header.css";
import { useState, useEffect } from "react";


export default function Header() {
  const IconClub = "/Img/iconClub.PNG";
  const [pageHeight, setPageHeight] = useState(0);
  const isTransparent = pageHeight <= 130;

  const topItems = ["English"];
  const topRightItems = ["Hime", "Hime", "Hime", "Hime"];
  const bottomItems = [
    "Hime", "الصور", "الارشيف", "تبرع الان", "اهدافنا", "من نحن", "الرئيسية"
  ];

  useEffect(() => {
    const updateHeight = () => setPageHeight(window.scrollY);
    
    updateHeight();
    window.addEventListener("scroll", updateHeight);
    
    return () => window.removeEventListener("scroll", updateHeight);
  }, []);

  const renderItems = (items) => 
    items.map((text, index) => <p key={index}>{text}</p>);

  return (
    <div className="header">
      <div className="header-top">
        <div>{renderItems(topItems)}</div>
        <div>{renderItems(topRightItems)}</div>
      </div>
      
      <div className={`header-bottom ${isTransparent ? 'transparent' : ''}`}>
        {renderItems(bottomItems)}
        <img src={IconClub} alt="Club Icon" />
      </div>
    </div>
  );
}