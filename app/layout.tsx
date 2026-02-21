import "./globals.css";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

icons: { icon: "/favicon.ico" }
openGraph: {
  images: [{ url: "/og.png", width: 1200, height: 630 }]
}