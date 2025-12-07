import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PUBLIC_HEADER_ITEMS } from "./_config";

function PublicHeader() {
  return (
    <header className="relative w-full flex justify-center h-16">
      <div className="max-w-7xl w-full flex items-center justify-between px-4">
        <div className="flex items-center gap-8 max-sm:gap-4">
          <div>
            <span className="text-xl font-bold">zigg</span>
          </div>
          <div className="flex items-center gap-2">
            {PUBLIC_HEADER_ITEMS.map((item) => (
              <Button
                variant="link"
                key={item.href}
                render={<Link href={item.href} />}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">Entrar</Button>
          <Button>Criar conta</Button>
        </div>
      </div>
    </header>
  );
}

export { PublicHeader };
