interface ConceptEssentials {
  operation: string;
  description: string;
  value: number;
}
interface ConceptOptionals {
  percentage: number;
}

export type IConcept = Required<ConceptEssentials> & Partial<ConceptOptionals>
