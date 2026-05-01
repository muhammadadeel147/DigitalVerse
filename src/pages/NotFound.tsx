import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Home, Search } from "lucide-react";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <Seo
        title="404 | NexMindSystems"
        description="The page you are looking for could not be found. Return to NexMindSystems home page."
        path={location.pathname}
        noIndex
      />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,hsl(var(--primary)/0.16)_0%,transparent_34%),radial-gradient(circle_at_88%_18%,hsl(var(--accent)/0.18)_0%,transparent_30%),linear-gradient(180deg,hsl(var(--background))_0%,hsl(var(--background))_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.2)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.2)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_72%_62%_at_50%_42%,#000_60%,transparent_100%)]" />
        <div className="absolute -top-32 left-[-10%] h-[24rem] w-[24rem] rounded-full bg-primary/20 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-[-12rem] right-[-8%] h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-[120px] animate-pulse-glow" style={{ animationDelay: "-2.5s" }} />
      </div>

      <div className="relative z-10 flex min-h-screen items-center px-4 py-24 md:px-8 md:py-28">
        <div className="container-custom w-full">
          <div className="mx-auto max-w-2xl text-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary backdrop-blur-sm">
                <Search className="h-4 w-4" />
                Page not found
              </span>

              <h1 className="mt-6 text-6xl font-black tracking-[-0.06em] text-foreground sm:text-7xl md:text-[7.5rem] md:leading-[0.9]">
                <span className="gradient-text">404</span>
              </h1>

              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                This route does not exist or the link is outdated. Use the buttons below to return to the site or keep exploring.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild variant="hero" size="xl" className="group">
                  <Link to="/">
                    Return to Home
                    <Home className="h-5 w-5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="heroOutline" size="xl" className="group">
                  <Link to="/services">
                    Explore Services
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
