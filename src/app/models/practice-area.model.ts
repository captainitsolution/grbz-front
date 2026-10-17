export interface PracticeArea {
  readonly id: string;
  readonly name: string;
  /** Caminho da ilustração em SVG (usada como máscara, herda a cor do texto). */
  readonly illustration: string;
  readonly summary: string;
  readonly description: string;
  readonly topics: readonly string[];
}
