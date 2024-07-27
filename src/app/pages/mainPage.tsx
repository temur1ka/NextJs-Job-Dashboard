"use client"
import React, { useState } from "react";
import { deleteList, getLists } from "../../../actions/lists";
import { Star, StarIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import deleteHandler from "./api/delete-list";
import prisma from "@/lib/db";
import FilledStar from "@/components/ui/filledStar";

export function Dashboard(id:any) {
  const [lists, setLists] = useState<any[]>([]);

  const getPostsData = async () => {
    const data = await getLists();
    setLists(data);
  };

  React.useEffect(() => {
    getPostsData();
  }, []);

  return (
    <div className="grid min-h-screen  ">
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <div className="flex items-center container">
          <h1 className="text-lg font-semibold md:text-2xl">TODO Dashboard</h1>
        </div>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {lists.map((list) => (
              <Card
                key={list.id}
                className={`${
                  list.isImportant
                    ? "border-x-4 border-x-fuchsia-500"
                    : "border-x-red-500 border-x-4"
                } `}
              >
                <CardHeader>
                  <div className="flex justify-between">
                    <CardTitle>{list.title}</CardTitle>
                    {list.isImportant === true ? (
                      <FilledStar />
                    ) : (
                      <StarIcon className="cursor-pointer" />
                    )}
                  </div>
                  <CardDescription>{list.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {list.isImportant === true ? "Important" : "Not Important"}
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button onClick={() => deleteList(list.id)}>Finish</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}