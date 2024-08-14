import { Header } from "./components/Header/Header";
import { CoreConcept } from "./components/CoreConcept";
import { CORE_CONCEPTS } from "./data";
import { TabButton } from "./components/Tab";
import { useState } from "react";

function App() {
  const [tabContent, setTabContent] = useState("Press");

  function clickHandler(selected) {
    setTabContent(selected);
  }
  const tabs = ["Components", "JSX", "Props", "State"];
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item) => (
              <CoreConcept
                img={item.image}
                title={item.title}
                description={item.description}
              />
            ))}
          </ul>
        </section>
        <section></section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {tabs.map((item, index) => (
              <TabButton onClick={() => clickHandler(item)}>{item}</TabButton>
            ))}
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
