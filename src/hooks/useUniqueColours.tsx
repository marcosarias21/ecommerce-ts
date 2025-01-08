import { useEffect, useState } from 'react'
import { Variation } from '../types/productDetail.d'

interface colorVariationsObj {
  nameColor: string,
  pics: string[]
}

const useUniqueColours = (variations: Variation[]) => {
  const [colorVariations, setColorVariations] = useState<colorVariationsObj[]>()
  const getUniqueColour = () => {
    const uniqueColours: colorVariationsObj[] = []
    const atributosVariaciones = variations.filter(variation => variation.attribute_combinations.some(vari => vari.name === "Color"))
    atributosVariaciones?.forEach(color => {
      color.attribute_combinations.forEach(col => {
        if(!uniqueColours.some(unico => unico.nameColor === col.value_name) && col.value_name.length > 6) {
          uniqueColours.push({ nameColor: col.value_name, pics: color.picture_ids })
          }
        } 
      )
    })
    setColorVariations(uniqueColours)
  }

  useEffect(() => {
      getUniqueColour()
    }, [variations])
  
  return (colorVariations)
}

export default useUniqueColours