import Link from "next/link";

export const metadata: Metadata = {
  title: "Hi from root layout",
  description: "Description from"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <nav>
          <ul>
            <li><Link href ="/">Home</Link></li>
            <li><Link href ="/about">About</Link></li>
            <li><Link href ="/team">Team</Link></li>
            <li><Link href ="/team/about">Team About</Link></li>
          </ul>
        </nav>
      </body>
    </html>
  );
}