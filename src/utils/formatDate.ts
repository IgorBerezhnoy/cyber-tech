export function formatDate(isoDate: number) {
  const date = new Date(isoDate)
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear().toString().slice(-2)

  return `${day}.${month}.${year}`
}
