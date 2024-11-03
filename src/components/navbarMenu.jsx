import * as React from "react"
import { Link } from "react-router-dom"
import { useAuth } from "@/components/authProvider";

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { useEffect } from "react"
import { useState } from "react";

const shooting = [
  {
    title: "Score",
    href: "/scoring",
    description: "Practice shooting and mark your scores.",
  },
  {
    title: "History",
    href: "/history",
    description: "Check your history of scores.",
  },
  {
    title: "Upcoming Events",
    href: "/competition",
    description: "Check archery events available for you.",
  },
  {
    title: "Your Events",
    href: "/schedule",
    description: "See archery events you are taking part in.",
  },
]

const profile = [
  {
    title: "Analytics",
    href: "/analytics",
    description:
      "Check your archery performance and statistics over time.",
  },
]

const profilePresident = [
  {
    title: "Create Competition",
    href: "/create-competition",
    description: "Create and manage archery competitions for your club."
  },
  {
    title: "Pending Users",
    href: "/pending-users",
    description: "Approve or reject users requesting to join your club.",
  },
]

const profileAdmin = [
  {
    title: "Pending Clubs",
    href: "/admin/pending-clubs",
    description: "Review clubs requesting to join Apollo Archery.",
  },
  {
    title: "Invite Club",
    href: "/admin/club-invite",
    description: "Invite clubs to join Apollo Archery.",
  },
]



export function NavbarMenu() {
  const [ profileOptions, setProfileOptions ] = useState(profile);
  const { userRole } = useAuth();

  const checkPermissions = () => {
    let options = profile;
    if (userRole === "Club President" || userRole === "Admin") {
      options = [...profile, ...profilePresident];
      if (userRole === "Admin") {
        options = [...options, ...profileAdmin];
      }
    }
    setProfileOptions(options);
  }

  useEffect(() => {
    checkPermissions();
  }, [userRole]);

  useEffect(() => {
    console.log(profileOptions);
  }, [profileOptions]);

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to="/dashboard">
              Dashboard
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Shooting</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {shooting.map((item) => (
                <ListItem
                  key={item.title}
                  title={item.title}
                  to={item.href}
                >
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Profile</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {profileOptions.map((item) => (
                <ListItem
                  key={item.title}
                  title={item.title}
                  to={item.href}
                >
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to="/about">
              About Us
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <Link
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-sunny hover:text-accent-foreground focus:bg-sunny focus:text-accent-foreground",
          className
        )}
        {...props}
      >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
      </Link>
    </li>
  )
})
ListItem.displayName = "ListItem"
