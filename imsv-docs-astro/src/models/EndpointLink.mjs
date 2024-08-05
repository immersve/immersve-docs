function kebabToTitle(kebabString) {
  return kebabString
    .toLowerCase()
    .split('-')
    .map(word => word.replace(/^./, s => s.toUpperCase()))
    .join(' ');
}

/**
  * Link abstraction used by Link.astro and EndpointRef.astro components.
  */
export default class EndpointLink {
  constructor(name) {
    this.name = name;
  }
  get href() {
    return `https://docs.immersve.com/api-reference/${this.name}/`;
  }
  get title() {
    return kebabToTitle(this.name);
  }
}
