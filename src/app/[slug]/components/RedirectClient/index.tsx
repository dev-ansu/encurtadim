"use client"

import { useEffect } from "react"

export const RedirectClient = ({ to }: { to: string }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.replace(to) // redireciona para URL externa
    }, 2000)

    return () => clearTimeout(timer)
  }, [to])

  return null
}