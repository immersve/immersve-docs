import { kebabToTitle } from './kebabToTitle.mjs';

/**
  * Link abstraction used by Link.astro. Resolves a Webhook Topic's
  * operationId to its reference page under /api-reference/webhook-topics/.
  */
export default class WebhookLink {
  constructor(name) {
    this.name = name;
  }
  get href() {
    return `https://docs.immersve.com/api-reference/webhook-topics/${this.name}/`;
  }
  get title() {
    return kebabToTitle(this.name);
  }
}
