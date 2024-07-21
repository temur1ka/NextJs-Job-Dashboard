"use server"
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Toaster, toast } from "sonner";
import { createList } from "../../../actions/lists";

async function CreateProductPage() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 items-center">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Make a TODO</h1>
      </div>
      <div>
        <div className="">
          <form action={createList} className="w-[300px] ">
            <div className="flex flex-col gap-7">
              {" "}
              <Input
                type="text"
                id="title"
                placeholder="Title"
                name="title"
                required
              />
              <textarea
                className="w-full border border-[#E8EAED] rounded-md placeholder:px-3 placeholder:py-2 focus:outline-[#E8EAED] focus:ring focus:ring-[#AD53FB] "
                id="description"
                placeholder="Description"
                name="description"
                required
              />
              <Toaster />
              <Select name="importance">
                <SelectTrigger>
                  <SelectValue placeholder="Importance" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Important">Important</SelectItem>
                  <SelectItem value="Not Important">Not Important</SelectItem>
                </SelectContent>
              </Select>
              <Button className="mt-4" type="submit">
                Create Task
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default CreateProductPage;
