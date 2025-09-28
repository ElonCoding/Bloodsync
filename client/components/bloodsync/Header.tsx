import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/bloodsync/LanguageSwitcher";
import { useI18n } from "@/i18n";
import { getNav } from "@/config/nav";
import { useAuth } from "@/auth/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

export default function Header() {
  const { t } = useI18n();
  const { role, setRole } = useAuth();
  const nav = getNav(role);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-rose-500 to-red-600 shadow-inner" />
          <span className="text-lg font-bold tracking-tight">BloodSync</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {nav.items.map((item) => {
            if (item.children?.length) {
              return (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger className="text-muted-foreground transition-colors hover:text-foreground">
                    {item.label}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {item.children.map((c) => (
                      <DropdownMenuItem asChild key={c.to}>
                        <Link to={c.to}>{c.label}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            }
            return (
              <NavLink
                key={item.label}
                to={item.to || "/"}
                className={({ isActive }) =>
                  `transition-colors hover:text-foreground ${isActive ? "text-foreground" : "text-muted-foreground"}`
                }
              >
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />

          {/* Role switcher (dev aid) */}
          <DropdownMenu>
            <DropdownMenuTrigger className="hidden sm:inline-flex rounded-md border px-3 py-2 text-sm text-muted-foreground hover:text-foreground">
              {role}
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {(["guest", "donor", "hospital", "admin"] as const).map((r) => (
                <DropdownMenuItem key={r} onClick={() => setRole(r)}>
                  {r}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button asChild className="hidden sm:inline-flex bg-primary hover:bg-primary/90">
            <Link to={nav.cta.to}>{nav.cta.label}</Link>
          </Button>

          {/* Mobile menu button */}
          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="border-t bg-background md:hidden">
          <div className="container mx-auto py-3">
            <div className="flex flex-col gap-2 text-sm">
              {nav.items.map((item) => (
                <div key={item.label}>
                  {item.to && (
                    <Link className="block rounded-md px-2 py-2 hover:bg-accent" to={item.to} onClick={() => setMobileOpen(false)}>
                      {item.label}
                    </Link>
                  )}
                  {item.children?.length && (
                    <div className="ml-2 border-l pl-3">
                      {item.children.map((c) => (
                        <Link key={c.to} className="block rounded-md px-2 py-2 hover:bg-accent" to={c.to} onClick={() => setMobileOpen(false)}>
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link className="mt-2 inline-flex items-center justify-center rounded-md bg-primary px-3 py-2 text-primary-foreground" to={nav.cta.to} onClick={() => setMobileOpen(false)}>
                {nav.cta.label}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
