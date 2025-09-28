import { Button } from "@/components/ui/button";
import { useI18n } from "@/i18n";
import { Link } from "react-router-dom";

function Feature({ title, desc, icon }: { title: string; desc: string; icon: React.ReactNode }) {
  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm transition hover:shadow-md">
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-rose-500 to-red-600 text-white">
          {icon}
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}

export default function Index() {
  const { t } = useI18n();

  return (
    <div className="">
      {/* Hero */}
      <section className="relative overflow-hidden border-b bg-gradient-to-br from-rose-50 to-white dark:from-rose-950/20 dark:to-background">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-rose-500/20 blur-3xl" />
        <div className="absolute -right-40 -bottom-40 h-80 w-80 rounded-full bg-red-600/20 blur-3xl" />
        <div className="container mx-auto grid gap-10 py-20 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-xs text-muted-foreground">
              HIPAA • GDPR • FHIR
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              {t("hero.title")}
            </h1>
            <p className="max-w-xl text-lg text-muted-foreground">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-gradient-to-r from-rose-500 to-red-600">
                <Link to="/register">{t("hero.ctaPrimary")}</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/dashboard">{t("hero.ctaSecondary")}</Link>
              </Button>
            </div>
            <div className="flex items-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-green-500" /> Real-time matching</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-blue-500" /> AI assistant</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-amber-500" /> Rewards</div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl border bg-card p-4 shadow-xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl border p-4">
                  <div className="text-sm font-medium">O+ Inventory</div>
                  <div className="mt-2 h-2 w-full rounded-full bg-muted">
                    <div className="h-2 w-2/3 rounded-full bg-rose-600" />
                  </div>
                  <div className="mt-3 text-xs text-muted-foreground">Updated 2m ago</div>
                </div>
                <div className="rounded-xl border p-4">
                  <div className="text-sm font-medium">Emergency Alerts</div>
                  <div className="mt-2 text-xs text-muted-foreground">3 active in your region</div>
                </div>
                <div className="rounded-xl border p-4">
                  <div className="text-sm font-medium">Matches</div>
                  <div className="mt-2 text-3xl font-bold">12</div>
                  <div className="text-xs text-muted-foreground">Today</div>
                </div>
                <div className="rounded-xl border p-4">
                  <div className="text-sm font-medium">Loyalty Points</div>
                  <div className="mt-2 text-3xl font-bold">480</div>
                  <div className="text-xs text-muted-foreground">Redeem soon</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto py-16">
        <h2 className="mb-8 text-2xl font-bold">{t("section.features")}</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Feature title={t("feature.security")} desc="Encrypted data, JWT authentication, and role-based access control for donors and hospitals." icon={<span>🔐</span>} />
          <Feature title={t("feature.matching")} desc="Smart matching engine uses eligibility, location, and history to optimize outcomes." icon={<span>🤖</span>} />
          <Feature title={t("feature.realtime")} desc="Requests, inventory updates, and notifications with instant delivery via SMS/Email." icon={<span>⚡</span>} />
          <Feature title={t("feature.rewards")} desc="Earn points for donations and awareness participation. Redeem with partners." icon={<span>🎁</span>} />
          <Feature title={t("feature.inventory")} desc="Track units by type, expiry, and trace chain-of-custody across facilities." icon={<span>📊</span>} />
          <Feature title={t("feature.integrations")} desc="Integrated with Twilio, SendGrid, Stripe/PayPal, and HL7 FHIR APIs." icon={<span>🧩</span>} />
        </div>
      </section>

      {/* Awareness */}
      <section className="border-y bg-muted/30 py-16">
        <div className="container mx-auto grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h3 className="text-xl font-semibold">{t("section.awareness")}</h3>
            <p className="mt-3 text-muted-foreground">{t("awareness.copy")}</p>
            <div className="mt-5 flex gap-3">
              <Button asChild>
                <Link to="/campaigns">Read Blogs</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/campaigns">Watch Videos</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <div className="mb-4 text-sm font-medium">Myth vs Fact</div>
            <ul className="space-y-3 text-sm">
              <li className="rounded-lg border p-3">Myth: Donating is painful. <span className="text-green-600">Fact: Minimal discomfort, safe and quick.</span></li>
              <li className="rounded-lg border p-3">Myth: You can get sick. <span className="text-green-600">Fact: Sterile procedures prevent infection.</span></li>
              <li className="rounded-lg border p-3">Myth: It takes too long. <span className="text-green-600">Fact: Most donations take under 1 hour.</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Search Camps */}
      <section className="container mx-auto py-16">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h3 className="text-xl font-semibold">{t("section.search")}</h3>
            <p className="mt-3 text-muted-foreground">{t("search.copy")}</p>
            <div className="mt-5 flex gap-3">
              <Button asChild>
                <Link to="/search">Search Camps</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/register">Eligibility</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-lg border p-3">
                <div className="font-medium">Downtown Drive</div>
                <div className="text-muted-foreground">Sat • 10:00 • Bus 14</div>
              </div>
              <div className="rounded-lg border p-3">
                <div className="font-medium">Campus Hall</div>
                <div className="text-muted-foreground">Sun • 12:00 • Metro A</div>
              </div>
              <div className="rounded-lg border p-3">
                <div className="font-medium">Community Center</div>
                <div className="text-muted-foreground">Tue • 09:00 • Tram 3</div>
              </div>
              <div className="rounded-lg border p-3">
                <div className="font-medium">City Hospital</div>
                <div className="text-muted-foreground">Daily • 24/7 • Parking</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
