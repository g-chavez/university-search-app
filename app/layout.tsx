import type { Metadata } from "next";
import "@fontsource/roboto";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export const metadata: Metadata = {
  title: "University Search",
  description: "University Search",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>
      <html lang="en" style={{ fontFamily: "Roboto, Verdana" }}>
        <body>{children}</body>
      </html>
    </>
  );
}
