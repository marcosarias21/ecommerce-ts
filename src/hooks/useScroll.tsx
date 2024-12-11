import { useEffect, useState } from "react"

const useScroll = () => {
  const [isShow, setIsShow] = useState<boolean>(false)
  console.log(isShow)
  useEffect(() => {
    const disableNav = () => {
      if (window.scrollY >= 90) {
        setIsShow(true)
      } else {
        setIsShow(false)
      }
    }  
    window.addEventListener('scroll', disableNav)
  }, [isShow])

  return { isShow }
}

export default useScroll