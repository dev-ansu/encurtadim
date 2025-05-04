"use client"

import { animate, motion, useMotionValue, useTransform } from "motion/react"
import { useEffect } from "react"

export default function AnimateNumber({ number }: {number: number}) {
    const count = useMotionValue(0)
    const rounded = useTransform(() => Math.round(count.get()))

    useEffect(() => {
        const controls = animate(count, number, { duration: 3 })
        return () => controls.stop()
    }, [])

    return <motion.span style={text}>{rounded}</motion.span>
}

/**
 * ==============   Styles   ================
 */

const text = {
    fontSize: 16,
}