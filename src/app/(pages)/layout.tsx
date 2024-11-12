import Navbar from "@/components/ui/NavBar/navBar-component";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="">
        {children}
      </div>
    </>
  );
}