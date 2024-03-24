import Image from "next/image";

import ProductPage from "./products/page";
import HeaderComp from "./components/MiddleComp";
import { Dashboard } from "./dropMenu/HeaderComp";


export default async function Home() {
  return (
    <div>
      <Dashboard />
    </div>
  );
}
