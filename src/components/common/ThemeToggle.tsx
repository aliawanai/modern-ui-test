"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
    const { theme, setTheme } = useTheme()

    return (
        <div className="fixed top-3 right-3">
            <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                variant="ghost"
                className="px-3"
            >
                {theme === "dark" ? (
                    <Moon className="size-4" />
                ) : (
                    <Sun className="size-4" />
                )}
            </Button>
        </div>
    )
}
