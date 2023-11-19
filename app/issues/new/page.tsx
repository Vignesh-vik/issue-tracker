"use client";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Button, TextField } from "@radix-ui/themes";


const NewIssuePage = () => {
  return (
    <div className="p-10 max-w-xl space-y-5">
      <TextField.Root>
        <TextField.Input placeholder="Title" />
      </TextField.Root>
      <SimpleMDE placeholder="Description"></SimpleMDE>
      <Button>Submit new Issue</Button>
    </div>
  );
};

export default NewIssuePage;
