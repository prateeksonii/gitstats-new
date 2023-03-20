export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>Gitstat</nav>
      {children}
    </>
  );
}
