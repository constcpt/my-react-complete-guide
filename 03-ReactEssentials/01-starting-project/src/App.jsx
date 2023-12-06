import { useState } from "react";
import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleClick(clickedButton) {
    // clickedButton -> Components, JSX, Props, State
    // console.log(clickedButton);
    setSelectedTopic(clickedButton); // scehdules an update to the selectedTopic variable. The new value will be available in the next render of the component, not immediately.
    console.log(selectedTopic); // still the old value
  }

  console.log("APP COMPONENT EXECUTING");

  let tabContent = <p>Click a button to see examples</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcepts
              {...CORE_CONCEPTS[1]} // use spread operator for prop, after all prop is just object, no need write like attributes for html element
            />
            <CoreConcepts
              {...CORE_CONCEPTS[2]} // spread operator
            />
            <CoreConcepts
              {...CORE_CONCEPTS[3]} // spread operator
            />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleClick("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleClick("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleClick("props")}>Props</TabButton>
            <TabButton onSelect={() => handleClick("state")}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
