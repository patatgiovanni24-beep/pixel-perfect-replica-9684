import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { hotelSchema } from "@/lib/hotel-schema";

export const Route = createFileRoute("/it")({
  head: () => ({
    meta: [{ "script:ld+json": hotelSchema } as never],
  }),
  component: ItLayout,
});

function ItLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
