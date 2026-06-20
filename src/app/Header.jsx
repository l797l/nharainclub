"use client";
import { FaFacebookF, FaTiktok, FaTwitter, FaYoutube, FaInstagram, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import "./header.css";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const IconClub = "/Img/iconClub.PNG";
  const [pageHeight, setPageHeight] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isTransparent = pageHeight <= 130;

  const topItems = ["English"];

  const bottomItems = [
    { id: 1, title: "الرئيسية", slug: "" },
    { id: 2, title: "من نحن", slug: "Aboutus" },
    { id: 3, title: "اهدافنا", slug: "Goals" },
    { id: 4, title: "الارشيف", slug: "" },
    { id: 5, title: "الصور", slug: "" },
  ];

  useEffect(() => {
    const updateHeight = () => setPageHeight(window.scrollY);
    updateHeight();
    window.addEventListener("scroll", updateHeight);
    return () => window.removeEventListener("scroll", updateHeight);
  }, []);

  // Close mobile menu on resize back to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1000) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderItems = (items) =>
    items.map((text, index) => <p key={index}>{text}</p>);

  return (
    <div className="header">
      <div className="header-top">
        <div>{renderItems(topItems)}</div>
        <div>
          <FaFacebookF
            size={15}
            color="#fff"
            style={{ transition: "transform 0.2s", cursor: "pointer" }}
          />
          <FaTiktok
            size={15}
            color="#fff"
            style={{ transition: "transform 0.2s", cursor: "pointer" }}
          />
          <FaTwitter
            size={15}
            color="#fff"
            style={{ transition: "transform 0.2s", cursor: "pointer" }}
          />
          <FaYoutube
            size={15}
            color="#fff"
            style={{ transition: "transform 0.2s", cursor: "pointer" }}
          />
          <FaInstagram
            size={15}
            color="#fff"
            style={{ transition: "transform 0.2s", cursor: "pointer" }}
          />
          <FaEnvelope
            size={15}
            color="#fff"
            style={{ transition: "transform 0.2s", cursor: "pointer" }}
          />
        </div>
      </div>

      <div className={`header-bottom ${isTransparent ? "transparent" : ""}`}>
        {bottomItems.map((item) => (
          <Link key={item.id} href={`/${item.slug}`}>
            <p>{item.title}</p>
          </Link>
        ))}
        <img src={IconClub} alt="Club Icon" />

        {/* Mobile hamburger button */}
        <button
          className={`mobile-menu-btn ${isTransparent ? "transparent" : ""}`}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="فتح القائمة"
        >
          {isMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        {bottomItems.map((item) => (
          <Link
            key={item.id}
            href={`/${item.slug}`}
            onClick={() => setIsMenuOpen(false)}
          >
            <p>{item.title}</p>
          </Link>
        ))}

        <div className="mobile-menu-socials">
          <FaFacebookF size={18} color="#fff" style={{ cursor: "pointer" }} />
          <FaTiktok size={18} color="#fff" style={{ cursor: "pointer" }} />
          <FaTwitter size={18} color="#fff" style={{ cursor: "pointer" }} />
          <FaYoutube size={18} color="#fff" style={{ cursor: "pointer" }} />
          <FaInstagram size={18} color="#fff" style={{ cursor: "pointer" }} />
          <FaEnvelope size={18} color="#fff" style={{ cursor: "pointer" }} />
        </div>
      </div>
    </div>
  );
}