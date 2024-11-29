"use client";
import React from 'react'
import { NavbarItem } from '@nextui-org/react';
import Link from "next/link";
import { usePathname } from 'next/navigation';

type Props = {
  href: string;
  label: string;
}

const NavLink = ({ href, label,}: Props) => {
  const pathname = usePathname();
  console.log("pathname::: ", pathname);
  return (
    <NavbarItem 
    isActive={pathname === href}
    as={Link}
    href={href}
    >
   {label}
    </NavbarItem>
  )
}

export default NavLink