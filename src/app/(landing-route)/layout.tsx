import HomeNavbar from "@/components/common/homeNavbar";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HomeNavbar />
      <main>{children}</main>
    </>
  );
}
