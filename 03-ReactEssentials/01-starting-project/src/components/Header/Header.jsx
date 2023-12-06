import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css"; // thanks to that underlying build process, this import statement will be processed and the CSS code will be included in the loaded webpage.
// Note: import a css file in a component file will not scope the css to that component, it will be applied to the whole page. Later in the course, you will learn about a solution to this potential problem though and you will learn how the styles could be scoped.

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1)); // +1 to include max
}

export default function Header() {
  const description = reactDescriptions[getRandomInt(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
