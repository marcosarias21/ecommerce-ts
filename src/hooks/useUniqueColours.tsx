import { useEffect, useState } from 'react'
import { Variation } from '../types/productDetail.d'
import { colorVariationsObj } from '../types/coloursAvaiable'

const useUniqueColours = (variations: Variation[] | undefined) => {
  const [colorVariations, setColorVariations] = useState<colorVariationsObj[]| []>()
  const getUniqueColour = () => {
    const uniqueColours: colorVariationsObj[] = []
    const atributosVariaciones = variations?.filter(variation => variation.attribute_combinations.some(vari => vari.name === "Color"))
    atributosVariaciones?.forEach(color => {
      color.attribute_combinations.forEach(col => {
        if(!uniqueColours.some(unico => unico.nameColor === col.value_name) && col.value_id != null) {
            uniqueColours.push({nameColor: col.value_name, picture_ids: color.picture_ids })
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