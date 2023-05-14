export const getRandomImage = (): string => {
  const images = ['assets/saga.jpeg', 'assets/star-wars.jpg']
  const randomIndex = Math.floor(Math.random()*images.length)
  return images[randomIndex]
}
