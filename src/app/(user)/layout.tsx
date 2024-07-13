export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="xl:px-[180px] | lg:px-[140px] | md:px-[120px] | sm:px-[100px] px-[25px] py-[20px] overflow-hidden">
      {children}
    </div>
  );
}
