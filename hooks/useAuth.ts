"use client";

import { useEffect, useState } from "react";

import { User } from "@/types/auth";

import { getUser } from "@/lib/auth/user";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setUser(getUser());

    setIsLoading(false);
  }, []);

  return {
    user,

    isLoading,

    isLoggedIn: !!user,
  };
}
