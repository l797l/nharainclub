"use client";
import { FaFacebookF, FaTiktok, FaTwitter,FaYoutube,FaInstagram, FaEnvelope} from "react-icons/fa";
import "./header.css";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const IconClub = "/Img/iconClub.PNG";
  const [pageHeight, setPageHeight] = useState(0);
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
      </div>
    </div>
  );
}
