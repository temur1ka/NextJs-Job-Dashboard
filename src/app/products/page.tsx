import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
} from "react";
import { Button } from "@/components/ui/button";
import Page from "./[id]/page";
import { useRouter } from "next/navigation";
import Link from "next/link";

async function getData() {
  const response = await fetch("https://dummyjson.com/products?limit=5");
  if (!response) {
    throw new Error("failed to fetch the data");
  }
  return response.json();
}

export default async function ProductPage() {
  const data = await getData();
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
      {data.products.map(
        (product: {
          id: Key | null | undefined;
          title;

          description;
        }) => (
          <Card className="max-w-[280px] mx-auto">
            <div key={product.id} className="">
              {/* <Image
                src={product.thumbnail}
                alt=""
                width={300}
                height={300}
                className="w-full "
              /> */}
              <CardHeader>
                <CardTitle>Front End Developer</CardTitle>
                <CardDescription>
                  we hire front-end developer for our big company.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p></p>
              </CardContent>
              <CardFooter>
                <Link href={`/products/${product.id}`}>
                  <Button variant="destructive">Apply Now</Button>
                </Link>
              </CardFooter>
            </div>
          </Card>
        )
      )}
    </div>
  );
}
