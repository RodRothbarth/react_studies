import { TabButton } from "./Tab";
import { useState } from "react";
import { EXAMPLES } from "../data";
import { Tabs } from "./Tab/Tabs";
import { Section } from "./Section";

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
    <Section title="Examples" id="examples">
      <Tabs
        // Container={Section} if you want to send a custom component send the function nada in  brackets {Section}. for built-in, send only the string 'div', 'section', 'ul'...
        buttons={
          <>
            {tabs.map((item) => (
              <TabButton
                isSelected={tabContent === item}
                onClick={() => clickHandler(item)}
              >
                {item}
              </TabButton>
            ))}
          </>
        }
      >
        {contentExample}
      </Tabs>
    </Section>
  );
}
