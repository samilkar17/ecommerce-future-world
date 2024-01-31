import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";

export default function Social() {
  return (
    <div className="flex items-center  w-full gap-x-4">
      <Button size="sm" className="w-full flex items-center gap-4 px-4" variant="outline">
        <FcGoogle className="h-5 w-5" />
        Sign In With Google
      </Button>
      <Button size="sm" className="w-full flex items-center gap-4 px-4" variant="outline">
        <FaGithub className="h-5 w-5" />
        Sign In With GitHub
      </Button>
    </div>
  );
}
