
"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function RoleGuard({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem("foodtogoodRole");

    // Allow the login homepage
    if (pathname === "/") {
      setAllowed(true);
      return;
    }

    // Require a selected role for other pages
    if (!role) {
      router.replace("/");
      return;
    }

    // Check role-based access
    if (
      (pathname.startsWith("/donor") && role !== "Donor") ||
      (pathname.startsWith("/ngo") && role !== "NGO") ||
      (pathname.startsWith("/volunteer") && role !== "Volunteer")
    ) {
      router.replace("/");
      return;
    }

    setAllowed(true);
  }, [pathname, router]);

  if (!allowed) {
    return null;
  }

  return children;
}

