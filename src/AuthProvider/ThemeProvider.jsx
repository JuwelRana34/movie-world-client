import { createContext, useEffect, useState } from "react"

const ThemeContext = createContext()
 export const  ThemeProvider = ({children})=> {
  const [theme, setTheme] = useState(()=>{
    return localStorage.getItem('theme') || "light"
  })

  useEffect(()=>{
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem('theme', theme)
  },[theme])

  const toggleTheme = () => {
    setTheme((prev)=> (prev === "light" ? "dark" :"light"))
  }
  const resetTheme = () => {
    setTheme("light");
  };
  const value = {
    theme , toggleTheme ,resetTheme
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext