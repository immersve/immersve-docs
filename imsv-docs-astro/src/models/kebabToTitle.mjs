export function kebabToTitle(kebabString) {
  return kebabString
    .toLowerCase()
    .split('-')
    .map(word => word.replace(/^./, s => s.toUpperCase()))
    .join(' ');
}
