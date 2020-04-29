export default function objToStr(item) {
  const itemType = typeof item;
  return itemType === 'undefined' ?
    'NO DATA !!' :
    itemType === 'string' ? 
    item :
    JSON.stringify(item) 
}