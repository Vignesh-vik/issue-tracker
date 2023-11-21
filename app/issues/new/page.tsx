"use client";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import { Button, TextField } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

interface Issueform {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<Issueform>();

  return (
    <form
      className="p-10 max-w-xl space-y-5"
      onSubmit={handleSubmit(
        async (data) => {await axios.post("/api/issues", data)
        router.push("/issues")
      })}>
      <TextField.Root>
        <TextField.Input placeholder="Title" {...register("title")} />
      </TextField.Root>
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <SimpleMDE placeholder="kizma balls" {...field}></SimpleMDE>
        )}
      />

      <Button>Submit new Issue</Button>
    </form>
  );
};

export default NewIssuePage;
