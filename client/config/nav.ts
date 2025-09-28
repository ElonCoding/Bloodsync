import type { Role } from "@/auth/AuthContext";

export type NavItem = {
  label: string;
  to?: string;
  children?: { label: string; to: string }[];
};

export type RoleNav = {
  items: NavItem[];
  cta: { label: string; to: string };
};

const guest: RoleNav = {
  items: [
    { label: "Home", to: "/" },
    {
      label: "Awareness",
      children: [
        { label: "Blogs", to: "/campaigns/blogs" },
        { label: "FAQs", to: "/campaigns/faqs" },
        { label: "Videos", to: "/campaigns/videos" },
      ],
    },
    { label: "Find Camps", to: "/search" },
    { label: "For Hospitals", to: "/dashboard" },
  ],
  cta: { label: "Become a Donor", to: "/register" },
};

const donor: RoleNav = {
  items: [
    { label: "Dashboard", to: "/donor" },
    {
      label: "Donate",
      children: [
        { label: "New Donation", to: "/donate" },
        { label: "History", to: "/donor/history" },
        { label: "Rewards", to: "/donor/rewards" },
      ],
    },
    { label: "Find Camps", to: "/search" },
    { label: "Alerts", to: "/alerts" },
  ],
  cta: { label: "Donate Now", to: "/donate" },
};

const hospital: RoleNav = {
  items: [
    { label: "Dashboard", to: "/dashboard" },
    { label: "Inventory", to: "/hospital/inventory" },
    { label: "Requests", to: "/hospital/requests" },
    { label: "Matching", to: "/hospital/matching" },
    { label: "Reports", to: "/reports" },
  ],
  cta: { label: "New Request", to: "/hospital/requests/new" },
};

const admin: RoleNav = {
  items: [
    { label: "Admin", to: "/admin" },
    { label: "Users", to: "/admin/users" },
    { label: "Hospitals", to: "/admin/hospitals" },
    { label: "Campaigns", to: "/admin/campaigns" },
    { label: "Settings", to: "/admin/settings" },
  ],
  cta: { label: "New Campaign", to: "/admin/campaigns/new" },
};

export function getNav(role: Role): RoleNav {
  switch (role) {
    case "donor":
      return donor;
    case "hospital":
      return hospital;
    case "admin":
      return admin;
    default:
      return guest;
  }
}
