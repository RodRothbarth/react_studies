import { Header } from "./components/Header/Header";
import { CoreConcept } from "./components/CoreConcept";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import { TabButton } from "./components/Tab";
import { useState } from "react";

function App() {
  const [tabContent, setTabContent] = useState();

  function clickHandler(selected) {
    setTabContent(selected);
  }

  let contentExample = <p>Please select an example</p>;

  if (tabContent)
    contentExample = (
      <div id="tab-content">
        <h3>{EXAMPLES[tabContent.toLowerCase()].title}</h3>
        <p>{EXAMPLES[tabContent.toLowerCase()].description}</p>
        <code>{EXAMPLES[tabContent.toLowerCase()].code}</code>
      </div>
    );
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
            {tabs.map((item) => (
              <TabButton onClick={() => clickHandler(item)}>{item}</TabButton>
            ))}
          </menu>
          {contentExample}
        </section>
      </main>
    </div>
  );
}

export default App;
