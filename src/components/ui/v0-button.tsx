"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { ButtonProps } from "@/components/ui/button"
import { forwardRef } from "react"

const V0Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, children, ...props }, ref) => {
  return (
    <div className="relative group">
      {/* Animated border */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>

      {/* Button */}
      <Button
        ref={ref}
        className={cn(
          "relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white border-none",
          className,
        )}
        {...props}
      >
        {children}
      </Button>
    </div>
  )
})
V0Button.displayName = "V0Button"

export { V0Button }

