import "./../index.css";
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
      
        <main>
          {children}
        </main>
      
      </body>
    </html>
  );
}