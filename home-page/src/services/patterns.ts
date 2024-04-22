
import data from '@data'

export async function getTypesOfPatterns() {
  const typesPatterns = await data.types_of_patterns
  return typesPatterns
}

export async function getPatterns({ type }:{ type:string }) {
  const dataPatterns = await data.patterns

  const patterns = dataPatterns.find(dp => {
    return dp.name === type
  })

  return patterns?.patterns ? patterns.patterns : []
}

export async function getPatternByName({ name }:{ name:string }) {
  const dataPatterns = await data.patterns

  const objPattern = dataPatterns.find(dp => {
    return dp.patterns.find(d => {
      return d.name === name
    })
  })

  const pattern = objPattern?.patterns.find(d => {
    return d.name === name
  })

  return pattern
}

export async function getNamesPatterns () {
  const dataPatterns = await data.patterns
  const namePatterns = [] as string[]

  dataPatterns.forEach(dp => {
    dp.patterns.forEach(d => {
      namePatterns.push(d.name)
    })
  })
  
  return namePatterns
}