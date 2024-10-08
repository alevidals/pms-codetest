import { Heading } from "@/components/heading";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { cn, swFont } from "@/lib/utils";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center mt-52 flex-col gap-y-3">
      <Heading
        as="h2"
        className={cn(
          "bg-clip-text text-transparent bg-gradient-to-t from-neutral-50 to-primary font-extrabold text-center text-7xl md:text-9xl",
          swFont.className,
        )}
      >
        404
      </Heading>
      <Heading
        as="h3"
        className={cn(swFont.className, "text-4xl font-extrabold text-center ")}
      >
        Not found
      </Heading>
      <HoverBorderGradient
        containerClassName="rounded-lg mx-auto mt-12"
        className="font-semibold bg-background"
        as={Link}
        href="/"
      >
        Back to home
      </HoverBorderGradient>
    </div>
  );
}
