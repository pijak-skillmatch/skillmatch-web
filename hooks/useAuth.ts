"use client";

import { useEffect, useState } from "react";

import { getUser } from "@/lib/auth/user";

export function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(getUser());
  }, []);

  return {
    user,
  };
}
