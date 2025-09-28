import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Placeholder from "./pages/Placeholder";
import Guest from "./pages/Guest";
import Donor from "./pages/Donor";
import DonorHistory from "./pages/DonorHistory";
import Donate from "./pages/Donate";
import Search from "./pages/Search";
import CampaignsVideos from "./pages/CampaignsVideos";
import HospitalDashboard from "./pages/HospitalDashboard";
import HospitalInventory from "./pages/HospitalInventory";
import HospitalMatching from "./pages/HospitalMatching";
import Admin from "./pages/Admin";
import AdminUsers from "./pages/AdminUsers";
import AdminHospitals from "./pages/AdminHospitals";
import AdminCampaigns from "./pages/AdminCampaigns";
import AdminSettings from "./pages/AdminSettings";
import Alerts from "./pages/Alerts";
import Register from "./pages/Register";
import HospitalRequestNew from "./pages/HospitalRequestNew";
import Header from "@/components/bloodsync/Header";
import Footer from "@/components/bloodsync/Footer";
import ChatWidget from "@/components/bloodsync/ChatWidget";
import { I18nProvider } from "@/i18n";
import { AuthProvider } from "@/auth/AuthContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <I18nProvider>
        <AuthProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/guest" element={<Guest />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/dashboard" element={<HospitalDashboard />} />
                  <Route path="/campaigns" element={<Placeholder title="Awareness" />} />
                  <Route path="/campaigns/blogs" element={<Placeholder title="Blogs" />} />
                  <Route path="/campaigns/faqs" element={<Placeholder title="FAQs" />} />
                  <Route path="/campaigns/videos" element={<CampaignsVideos />} />
                  <Route path="/search" element={<Search />} />
                  <Route path="/donor" element={<Donor />} />
                  <Route path="/donate" element={<Donate />} />
                  <Route path="/donor/history" element={<DonorHistory />} />
                  <Route path="/donor/rewards" element={<Placeholder title="Rewards" />} />
                  <Route path="/alerts" element={<Alerts />} />
                  <Route path="/hospital/inventory" element={<HospitalInventory />} />
                  <Route path="/hospital/requests" element={<Placeholder title="Requests" />} />
                  <Route path="/hospital/requests/new" element={<HospitalRequestNew />} />
                  <Route path="/hospital/matching" element={<HospitalMatching />} />
                  <Route path="/reports" element={<Placeholder title="Reports" />} />
                  <Route path="/admin" element={<Admin />} />
                  <Route path="/admin/users" element={<AdminUsers />} />
                  <Route path="/admin/hospitals" element={<AdminHospitals />} />
                  <Route path="/admin/campaigns" element={<AdminCampaigns />} />
                  <Route path="/admin/campaigns/new" element={<Placeholder title="New Campaign" />} />
                  <Route path="/admin/settings" element={<AdminSettings />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
              <ChatWidget />
            </div>
          </BrowserRouter>
        </AuthProvider>
      </I18nProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
