import "./body.css";
import NewsCard from "./NewsCard";
import EventsCard from "./EventsCard";

export default function Body() {
  const imgBody = "/Img/IMG_4242.JPG";
  const nameCulbAr = "نادي شباب النهرين";
  const nameCulbEn = "Nahrain Youth Club";
  const imgAbout = "/Img/IMG_4283.JPG";

  return (
    <div className="body-container">
      {/* القسم الاول - صورة مقدمة */}
      <div className="main-body">
        <img src={imgBody} alt="background" className="body-image" />
        <div className="body-overlay">
          <h2></h2>

          <h3>
            {nameCulbAr}
            <br />
            {nameCulbEn}
          </h3>
        </div>
      </div>

      {/* القسم الثاني - عن النادي */}
      <div className="about-club">
        <img src={imgAbout} alt="صورة عن النادي" />
        <div className="about-content">
          <h4>عن نادي شباب النهرين</h4>
          <p>
            نادي شباب النهرين هو منصة طلابية تهدف إلى تطوير مهارات الشباب وتنمية
            قدراتهم في مختلف المجالات العلمية والثقافية والاجتماعية.
          </p>
        </div>
      </div>

      {/* القسم الثالث - الاخبار */}

      <div className="box-news">
        <div className="title-news">
          <p>
            <span> آخر</span> الأخبار
          </p>
        </div>
        <div className="set-news">
          <NewsCard
            image={imgBody}
            title="ورشة العمل القادمة في مجال الذكاء الاصطناعي"
            excerpt="انضم إلينا في ورشة العمل الحصرية التي تتناول أحدث التطورات في مجال الذكاء الاصطناعي وتطبيقاته العملية في سوق العمل."
            date="2024/12/15"
            category="الاخبار"
            views="1.2K"
            isNew={true}
          />

          <NewsCard
            image={imgBody}
            title="ورشة العمل القادمة في مجال الذكاء الاصطناعي"
            excerpt="انضم إلينا في ورشة العمل الحصرية التي تتناول أحدث التطورات في مجال الذكاء الاصطناعي وتطبيقاته العملية في سوق العمل."
            date="2024/12/15"
            category="الاخبار"
            views="1.2K"
            isNew={true}
          />
          <NewsCard
            image={imgBody}
            title="ورشة العمل القادمة في مجال الذكاء الاصطناعي"
            excerpt="انضم إلينا في ورشة العمل الحصرية التي تتناول أحدث التطورات في مجال الذكاء الاصطناعي وتطبيقاته العملية في سوق العمل."
            date="2024/12/15"
            category="الاخبار"
            views="1.2K"
            isNew={true}
          />
        </div>
      </div>

      {/* القسم الرابع - الفعاليات */}
      <div className="events">
        <div className="title-events">
          <p>
            <span>أحدث</span> الفعاليات
          </p>
        </div>

        <div className="events-body">
          <div className="events-cards">
            <EventsCard
              day="01"
              month="اكتوبر"
              title="ندوة في الذكاء الاصطناعي"
              time="10:00 ص الى 07:00 م"
              desc="فعالية مميزة تهدف إلى تعزيز مهارات الطلاب في لغات البرمجة من خلال ورش ومسابقات عملية."
            />
            <EventsCard
              day="01"
              month="اكتوبر"
              title="ندوة في الذكاء الاصطناعي"
              time="10:00 ص الى 07:00 م"
              desc="فعالية مميزة تهدف إلى تعزيز مهارات الطلاب في لغات البرمجة من خلال ورش ومسابقات عملية.
              "
            />
            <EventsCard
              day="01"
              month="اكتوبر"
              title="ندوة في الذكاء الاصطناعي"
              time="10:00 ص الى 07:00 م"
              desc="فعالية مميزة تهدف إلى تعزيز مهارات الطلاب في لغات البرمجة من خلال ورش ومسابقات عملية."
            />
          </div>

          <div className="events-img">
            <img src={imgBody} alt="صورة الفعالية" />
          </div>
        </div>
      </div>
    </div>
  );
}
