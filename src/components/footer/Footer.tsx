import { Be_Vietnam_Pro } from "next/font/google";

const beVietnam = Be_Vietnam_Pro({
  subsets: ["vietnamese"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});
export default function Footer() {
  return (
    <div className={beVietnam.className}>
      <h1>footer</h1>
      <h1>footer</h1>
      <h1>footer</h1>
      <h1>footer</h1>
      <h1>footer</h1>
      <h1>footer</h1>
      <h1>footer</h1>
      <h1>footer</h1>
      <h1>footer</h1>
      <h1>footer</h1>
      <h1>footer</h1>
      <h1>footer</h1>
      <h1>footer</h1>
      <h1>footer</h1>
      <h1>footer</h1>
    </div>
  );
}
