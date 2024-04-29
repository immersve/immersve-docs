export function wrappableAddress(addr) {
  return addr.match(/.{1,30}/g).join('<wbr>');
}
