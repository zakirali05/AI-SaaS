"use client"

import { Sun,Moon } from "lucide-react"
import { Button } from "./ui/button"
import {UserButton} from "@clerk/nextjs"
import { useTheme } from "next-themes"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import MobileSidebar from "./mobile-sidebar"
import { getApiLimitCount } from "@/lib/api-limit"


interface sidebarProps {
  apiLimitCount : number
}
const Navbar = ({apiLimitCount=0}:sidebarProps) => {

  const { setTheme } = useTheme()
  return (
    <div className="flex items-center p-4">
    <MobileSidebar apiLimitCount={apiLimitCount} />
        <div className="flex w-full justify-end items-center gap-3">
          <div>
          <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
          </div>
          <UserButton afterSignOutUrl="/"/>
        </div>
    </div>
  )
}

export default Navbar