export default function Tabs({ children, buttons, ButtonsContainer }) {
  // const ButtonContainer = buttonContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
