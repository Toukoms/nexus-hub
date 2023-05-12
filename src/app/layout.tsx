import AuthContext from "@/context/AuthContext";
import "./globals.css";
// import "./react-toastify.globals.css";
import '../../node_modules/react-toastify/dist/ReactToastify.css'

export const metadata = {
  title: "NexusHub",
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
        <main className="w-full h-full">
          <AuthContext>{children}</AuthContext>
        </main>
      </body>
    </html>
  );
}
