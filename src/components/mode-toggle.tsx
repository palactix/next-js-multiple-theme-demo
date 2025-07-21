"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const themes = [
  { name: "Red Light", value: "theme-red-light" },
  { name: "Red Dark", value: "theme-red-dark" },
  { name: "Blue Light", value: "theme-blue-light" },
  { name: "Blue Dark", value: "theme-blue-dark" },
];

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Prevent hydration mismatch by rendering only after mount
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // avoid SSR mismatch

  return (
    <div className="flex flex-wrap gap-2">
      {themes.map((t) => (
        <Button
          key={t.value}
          variant={theme === t.value ? "default" : "outline"}
          onClick={() => {
            setTheme(t.value);
          }}
          className="text-xs"
        >
          {t.name}
        </Button>
      ))}
    </div>
  );
}
