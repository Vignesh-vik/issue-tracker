"use client";
import { TextArea, TextField } from "@radix-ui/themes";
import React from "react";

const NewIssuePage = () => {
  return (
    <div className="p-10 max-w-xl space-y-5">
      <TextField.Root>
        <TextField.Input placeholder="Title" />
      </TextField.Root>
      <TextArea placeholder="Description"></TextArea>
    </div>
  );
};

export default NewIssuePage;
