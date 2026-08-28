import { kebabToTitle } from './kebabToTitle.mjs';

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
