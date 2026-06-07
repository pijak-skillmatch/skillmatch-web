"use client";

import { useRouter } from "next/navigation";

import { isAuthenticated } from "@/lib/auth/isAuthenticated";

import { showLoginRequired } from "@/lib/swal";

export function useProtectedRoute() {
  const router = useRouter();

  const navigate = async (href: string) => {
    if (href !== "/history") {
      router.push(href);

      return;
    }

    if (!isAuthenticated()) {
      const result = await showLoginRequired("Login Required", "Please sign in to access your analysis history.");

      if (result.isConfirmed) {
        router.push("/login");
      }

      return;
    }

    router.push("/history");
  };

  return {
    navigate,
  };
}
