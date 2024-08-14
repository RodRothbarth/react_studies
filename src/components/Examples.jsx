import { TabButton } from "./Tab";
import { useState } from "react";
import { EXAMPLES } from "../data";

export function Examples() {
  const tabs = ["Components", "JSX", "Props", "State"];
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
  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        {tabs.map((item) => (
          <TabButton
            isSelected={tabContent === item}
            onClick={() => clickHandler(item)}
          >
            {item}
          </TabButton>
        ))}
      </menu>
      {contentExample}
    </section>
  );
}
