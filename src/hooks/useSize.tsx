import { useEffect, useState } from "react"
import { Variation } from "../types/productDetail.d"

const useSize = (variations: Variation[] | []) => {
  const [talle, setTalle] = useState<Variation['attribute_combinations']>()
  
  const getSize = () => {
    const sizesVariationsObj = variations?.filter(variation => variation?.attribute_combinations.some(vari => vari?.value_name === variations[0]?.attribute_combinations[0].value_name))
    const sizeFiltered = sizesVariationsObj?.flatMap(type => type.attribute_combinations.filter(obj => obj.id === "SIZE"))
    setTalle(sizeFiltered)  
  }

  useEffect(() => {
    getSize()
  }, [variations])
  
  return talle
}

export default useSize