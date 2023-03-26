import { Footer } from "components/footer";
import { Navbar } from "components/navbar";
import { Be_Vietnam_Pro } from "next/font/google";
interface Props {
  children?: React.ReactNode;
}
const beVietnam = Be_Vietnam_Pro({
  subsets: ["vietnamese"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});
export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main className={`${beVietnam.className}`}>{children}</main>
      <Footer />
    </>
  );
}
