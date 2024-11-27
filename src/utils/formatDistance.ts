export function formatDistance(value: number): string {
  // Converte de quilômetros para metros, se necessário
  const meters = value * 1000

  if (meters < 1000) {
    const roundedMeters = Math.round(meters) // Arredonda para o inteiro mais próximo
    return `${roundedMeters} m`
  } else {
    const kilometers = parseFloat((meters / 1000).toFixed(2)) // Converte para km e arredonda com duas casas decimais
    return `${kilometers} km`
  }
}
