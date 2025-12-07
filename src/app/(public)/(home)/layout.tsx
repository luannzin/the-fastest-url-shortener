import { PublicHeader } from "../_components/public-header";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PublicHeader />
      <main className="max-w-7xl px-4">{children}</main>
    </>
  );
}
