import { Header } from "@/components/navigation/header";
import PathnameBreadcrumb from "@/components/navigation/pathname-breadcrumb";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={cn("h-full bg-background font-sans antialiased")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-full mx-auto max-w-4xl px-4 border-x border-accent">
            <Header />

            <main className="mt-4 lg:mt-6 flex flex-col gap-4">
              <PathnameBreadcrumb />
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
