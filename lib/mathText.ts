// Question text writes math as $...$ or as \(...\). The question views split on $...$,
// so this turns the second style into the first before they do.
export function mathToDollars(text: string): string {
  return text.replace(/\\\(([\s\S]*?)\\\)/g, (_, tex: string) => `$${tex}$`);
}
