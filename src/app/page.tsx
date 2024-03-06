import { Hero } from "app/components/home/hero";
import { Description } from "app/components/home/description";
import { MainProducts } from "app/components/home/main-products";

export default function Home() {
  return (
    <main>
      <Hero />
      <Description />
      <MainProducts />
    </main>
  );
}
