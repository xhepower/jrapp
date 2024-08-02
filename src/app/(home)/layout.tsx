import Header from "../components/header";
export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-gray-600 container mx-auto px-2">
      <Header></Header>
      {children}
    </main>
  );
}
