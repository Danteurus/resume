export function createTemplate(template: string): HTMLElement {
  const container = document.createElement('template');
  container.innerHTML = template.trim();
  return container.content.firstElementChild as HTMLElement;
}

export function select<T extends Element>(root: ParentNode, selector: string): T {
  return root.querySelector<T>(selector)!;
}
