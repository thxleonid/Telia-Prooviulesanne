import buttonOptions from "./buttonOptions";
import ButtonWrapper from "./components/ButtonWrapper";
import { ColorScheme } from './enum'
import React from "react";

const App = () => {

  const [ colorScheme, setColorScheme ] = React.useState<ColorScheme>(ColorScheme.TELIA);
  const [ selectedItem, setSelectedItem ] = React.useState<string | undefined>("");

  const changeColor = (target: EventTarget) => {
    const element = target as HTMLImageElement;
    console.log(element)
    const value = element.attributes.getNamedItem('data-value');
    if (!value) return;

    const scheme = value.value;
    setColorScheme(scheme as ColorScheme);
  }

  return (
    <div className="App">
      <h1>Telia Arendaja - Prooviülesanne</h1>
      <h2>Select color scheme if needed. Current scheme applied: {colorScheme}</h2>
      <img
        src={"./img/logos/teliaLogo.png"} 
        onClick={(e) => changeColor(e.target)} 
        data-value={ColorScheme.TELIA} 
        tabIndex={0} 
        alt="Telia brand logo"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") { changeColor(e.target) }
        }} />
      <img
        src={"./img/logos/teliaWCAGLogo.png"} 
        onClick={(e) => changeColor(e.target)} 
        data-value={ColorScheme.TELIA_WCAG} 
        tabIndex={0} 
        alt="Telia brand logo with WCAG sticker on it"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") { changeColor(e.target) }
        }} />
      <img
        src={"./img/logos/elisaLogo.png"} 
        onClick={(e) => changeColor(e.target)} 
        data-value={ColorScheme.ELISA} 
        tabIndex={0} 
        alt="Elisa brand logo"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            changeColor(e.target)
          }
        }} />
      <img
        src={"./img/logos/tele2Logo.png"} 
        onClick={(e) => changeColor(e.target)} 
        data-value={ColorScheme.TELE2} 
        tabIndex={0} 
        alt="Tele2 brand logo"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") { changeColor(e.target) }
        }} />

      <h3>Selected list option: {selectedItem}</h3>
      <hr />

      <div className="multipleButtonsBlock-topRow">
        <ButtonWrapper
          active={true}
          text={"Erinevad toimingud"}
          options={buttonOptions}
          colorScheme={colorScheme}
          setSelectedItem={setSelectedItem}
        />

        <ButtonWrapper
          active={false}
          text={"Disabled button"}
          options={buttonOptions}
          colorScheme={colorScheme}
          setSelectedItem={setSelectedItem}
        />

        <ButtonWrapper
          active={true}
          text={"Erinevad toimingud"}
          options={buttonOptions}
          colorScheme={colorScheme}
          setSelectedItem={setSelectedItem}
        />
      </div>
      <div className="multipleButtonsBlock-bottomRow">
        <ButtonWrapper
          active={true}
          text={"Erinevad toimingud"}
          options={buttonOptions}
          colorScheme={colorScheme}
          setSelectedItem={setSelectedItem}
        />

        <ButtonWrapper
          active={true}
          text={"Erinevad toimingud"}
          options={buttonOptions}
          colorScheme={colorScheme}
          setSelectedItem={setSelectedItem}
        />
      </div>

    </div>
  );
}

export default App;