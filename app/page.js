import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {

  // const {user}=useUser();

  return (
    <div>
      <h2>Subscribe to Techguruji </h2>
      <Button>Subscribe</Button>
      <UserButton/>
    </div>
  );
}
