"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { parseCookies } from "nookies";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const { token } = parseCookies();

    if (token) {
      setIsAuthenticated(true);
    } else {
      router.push("/auth/cadastro");
    }

    setLoading(false);
  }, [router]);

  return <div>{children}</div>;
}
