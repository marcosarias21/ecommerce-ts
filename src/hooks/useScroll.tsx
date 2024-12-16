import { useEffect, useState } from "react"

const useScroll = () => {
  const [isShow, setIsShow] = useState<boolean>(false)

  useEffect(() => {
    const disableNav = () => {
      if (window.scrollY > 700) {
        setIsShow(true)
      } else {
        setIsShow(false)
      }
    }  
    return () => {
      window.addEventListener('scroll', disableNav)
    }
  }, [])

  return { isShow }
}

export default useScroll