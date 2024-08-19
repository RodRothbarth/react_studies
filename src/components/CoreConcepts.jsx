import { CORE_CONCEPTS } from "../data";
import { CoreConcept } from "./CoreConcept";
import { Section } from "./Section";

export function CoreConcepts() {
  return (
    <Section title="Examples" id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((item) => (
          <CoreConcept key={item.title} {...item} />
        ))}
      </ul>
    </Section>
  );
}
