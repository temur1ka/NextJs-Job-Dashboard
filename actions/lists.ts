"use server"
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getLists() {
  const data = await prisma.todoList.findMany();
  revalidatePath("/");

  return data
}

export async function createList(formData: FormData) {
  const title = formData.get("title") as string
  const description = formData.get("description") as string
  const isImportant = formData.get('importance') as string | undefined


  const data = await prisma.todoList.create({
    data: {
      title,
      description,
      isImportant: isImportant === "Important" ? true : false
    },
  });
  return data;

}

export async function getImportantList() {
  const data = await prisma.todoList.findMany({
    where: {
      isImportant: true
    }
  });
  return data
}

export async function deleteList(id: string) {
  const data = await prisma.todoList.delete({
    where: {
      id,
    },
  });
 
  revalidatePath("/");
  
}