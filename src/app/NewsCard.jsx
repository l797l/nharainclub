import "./news.css";

export default function NewsCard({ 
  image, 
  title, 
  excerpt, 
  date, 
  category, 
  views, 
  isNew = false 
}) {
  return (
    <div className="news-card">
      <div className="news-image-container">
        <img 
          src={image} 
          alt={title} 
          className="news-image"
        />
        <div className="news-overlay"></div>
        {isNew && <div className="news-badge">جديد</div>}
      </div>
      
      <div className="news-content">
        <div className="news-meta">
          <div className="news-date">{date}</div>
          <div className="news-category">{category}</div>
        </div>
        
        <h3 className="news-title">{title}</h3>
        <p className="news-excerpt">{excerpt}</p>
        
        <div className="news-actions">
          <a href="#" className="news-read-more">
            اقرأ المزيد
          </a>
          <div className="news-stats">
            <span className="news-views">{views} مشاهدة</span>
          </div>
        </div>
      </div>
    </div>
  );
}