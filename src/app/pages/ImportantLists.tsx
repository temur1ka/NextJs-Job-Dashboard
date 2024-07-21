import React from "react";
import { deleteList, getImportantList } from "../../../actions/lists";

import FilledStar from "../../components/ui/filledStar";
import { Button } from "../../components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../../components/ui/card";

const ImportantProductList = async ({id}: {id: string}) => {
  const data = await getImportantList();
  return (
    <div className="p-6">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.map((list) => (
          <Card key={list.id} className="border-x-4 border-x-fuchsia-500">
            <CardHeader>
              <div className="flex justify-between">
                <CardTitle>{list.title}</CardTitle>
                <FilledStar />
              </div>
              <CardDescription>{list.description}</CardDescription>
            </CardHeader>
            <CardContent>Important</CardContent>
            <CardFooter className="flex justify-between">
              <Button>Finish</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ImportantProductList;
