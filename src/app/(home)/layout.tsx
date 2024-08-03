import Header from "../components/header";
export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex items-center justify-center h-screen bg-blue-100 columns-1">
      <Header></Header>
      {children}
    </main>
  );
}
