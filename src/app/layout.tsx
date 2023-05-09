import "./globals.css";

export const metadata = {
  title: "Chat",
  description: "Realtime chat", 
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="w-full h-full">{children}</main>
      </body>
    </html>
  );
}
