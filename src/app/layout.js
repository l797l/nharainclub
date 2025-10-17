import Header from "./Header";
import Footer from "./Footer";
export const metadata = {
  title: {
    default: "نادي شباب النهرين",
    template: "%s | نادي شباب النهرين"
  },
  description: "نادي شباب النهرين - منصة طلابية لتطوير مهارات الشباب في المجالات العلمية والثقافية",
  keywords: ["نادي", "شباب", "النهرين", "طلاب", "علم", "ثقافة"],
  authors: [{ name: "نادي شباب النهرين" }],
  icons: {
    icon: "/Img/iconClub.PNG",
  },
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body style={{ margin: 0, padding: 0, fontFamily: "Arial, sans-serif" }}>
        <Header />
        <main>
          {children}
        </main>
        <Footer/>
        <p style={{
          display:"flex",
          justifyContent:"center",
          alignContent:"center",
          padding:"1%"
        }}>تصميم وبرمجة: علي عبدالمهدي عزيز</p>
      </body>
    </html>
  );
}