import React from "react";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

const Issuepage = () => {
  return (
    <div>
      <Button> 
        <Link href="issues/new">New issue</Link>
      </Button>
    </div>
  );
};

export default Issuepage;
