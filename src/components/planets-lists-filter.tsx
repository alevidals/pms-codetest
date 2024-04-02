import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ORDER_FIELDS } from "@/lib/constants";
import type { Order, OrderByField } from "@/lib/types";
import { cn } from "@/lib/utils";
import { IconEraser, IconFilter } from "@tabler/icons-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export function PlanetsListsFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const search = searchParams.get("search") ?? "";
  const orderBy = (searchParams.get("orderBy") as OrderByField) ?? "";
  const order = (searchParams.get("order") as Order) ?? "asc";

  return (
    <>
      <Button
        className="mb-4 flex items-center justify-between gap-x-2"
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{isOpen ? "Hide filters" : "Show filters"}</span>
        <IconFilter size="20" />
      </Button>
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className={cn({
          "mb-4": isOpen,
        })}
      >
        <CollapsibleContent className="flex flex-col md:flex-row gap-4">
          <Input
            size={30}
            className="h-12"
            placeholder="Search planets"
            value={search}
            onChange={(event) => {
              const params = new URLSearchParams(searchParams);
              params.set("search", event.target.value);

              router.replace(`${pathname}?${params.toString()}`);
            }}
          />
          <Select
            value={orderBy}
            onValueChange={(key) => {
              const params = new URLSearchParams(searchParams);
              params.set("orderBy", key);

              router.replace(`${pathname}?${params.toString()}`);
            }}
          >
            <SelectTrigger className="h-12">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              {ORDER_FIELDS.map((field) => (
                <SelectItem value={field.value} key={field.value}>
                  {field.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            value={order}
            disabled={!orderBy}
            onValueChange={(key) => {
              const params = new URLSearchParams(searchParams);
              params.set("order", key);

              router.replace(`${pathname}?${params.toString()}`);
            }}
          >
            <SelectTrigger className="h-12">
              <SelectValue placeholder="Order" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="asc">Ascending</SelectItem>
              <SelectItem value="desc">Descending</SelectItem>
            </SelectContent>
          </Select>
          <Button
            size="icon"
            variant="destructive"
            className="shrink-0 h-12 w-full md:w-12"
            onClick={() => {
              const params = new URLSearchParams(searchParams);
              params.delete("search");
              params.delete("orderBy");
              params.delete("order");

              router.replace(`${pathname}?${params.toString()}`);
            }}
          >
            <IconEraser />
          </Button>
        </CollapsibleContent>
      </Collapsible>
    </>
  );
}
