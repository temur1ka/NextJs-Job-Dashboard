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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import { FaGalacticSenate, FaRegHeart } from "react-icons/fa";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";
import async from "../page";

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

const JobBoard = ({ id, title, description }) => {
  const [products, setProducts] = useState([]);
  const [errors, setErrors] = useState(null);
  const [deleting, setIsDeleting] = useState(false);

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

  const handleDelete = async () => {
    setIsDeleting(true); // Set loading/deleting state

    try {
      const response = await fetch(`http://localhost:3001/user/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        console.log("Task deleted successfully");
        // Update your UI or state to remove the deleted task
      } else {
        const errorData = await response.json(); // Parse error message
        console.error(
          "Error deleting task:",
          errorData.error || "Unknown error"
        );
        // Display an error message to the user
      }
    } catch (error) {
      console.error("Error:", error);
      // Display a generic error message to the user
    } finally {
      setIsDeleting(false); // Reset loading/deleting state
    }
  };

  return (
    <div>
      {id && (
        <div className="">
          <div>
            <Card className=" my-3 ">
              <CardHeader>
                <CardTitle className="text-center">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col">
                <span className="font-semibold text-sm text-[#989b98]"></span>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button
                  variant={"destructive"}
                  onClick={handleDelete}
                  className=" justify-center"
                >
                  Delete
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};
export default JobBoard;
