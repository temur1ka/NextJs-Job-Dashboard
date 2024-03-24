"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";

// const JobData = [
//   {
//     id: 1,
//     title: "Lorem ipsum dolor sit.",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, aperiam.",
//   },
//   {
//     id: 2,
//     title: "Lorem ipsum dolor sit.",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, aperiam.",
//   },
//   {
//     id: 3,
//     title: "Lorem ipsum dolor sit.",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, aperiam.",
//   },
// ];

const JobBoard = () => {
  const [products, setProducts] = useState([]);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3001/user/");
        if (!res.ok) {
          throw new Error(`could not fetch the data: ${res.status}`);
        }
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        setErrors(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="grid  gap-4 mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((d) => (
        <div className="" key={d.id}>
          <Card className="mx-auto my-3">
            {/* <Image
                src={product.thumbnail}
                alt=""
                width={300}
                height={300}
                className="w-full "
              /> */}
            <CardHeader>
              <CardTitle>{d.title}</CardTitle>
              <CardDescription>{d.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col">
              <span className="font-semibold text-sm text-[#989b98]">
                Pubished:25March
              </span>
              <span className="font-semibold text-sm text-[#989b98]">Ends:2May</span>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link href={`/${d.id}`}>
                <Button>Apply Now</Button>
              </Link>
              <FaRegHeart className=" gap-4" />
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
};
export default JobBoard;
