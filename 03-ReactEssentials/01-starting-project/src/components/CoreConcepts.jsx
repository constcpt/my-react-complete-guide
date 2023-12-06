export default function CoreConcepts({ title, description, image }) {
  // object destructuring syntax: these opening and closing curly braces here are used to destructure the first parameter of this function, the props objec in this case.
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
