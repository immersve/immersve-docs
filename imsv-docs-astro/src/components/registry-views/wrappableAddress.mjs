export function wrappableAddress(addr) {
  return addr.match(/.{1,24}/g).join('<wbr>');
}
