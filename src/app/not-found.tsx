import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="w-full min-w-0 p-6">
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 w-full">
        <h1 className="text-4xl font-bold">404</h1>
        <h2 className="text-2xl font-semibold text-secondary-foreground">Page Not Found</h2>
        <p className="text-muted-400">
          The page you are looking for does not exist.
        </p>
        <Button asChild>
          <Link href="/">Go back home</Link>
        </Button>
      </div>
    </div>
  );
}

