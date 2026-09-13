import { useEffect } from "react"

export function useReveal() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".reveal"))
    if (reduce) {
      nodes.forEach((n) => n.classList.add("is-in"))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in")
            io.unobserve(e.target)
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    )
    nodes.forEach((n) => io.observe(n))
    requestAnimationFrame(() => {
      document.documentElement.classList.add("reveal-on")
    })
    return () => {
      io.disconnect()
      document.documentElement.classList.remove("reveal-on")
    }
  }, [])
}
