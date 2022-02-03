import { InlineStyle } from "./conponentes/InlineStyle";
import { CssModules } from "./conponentes/CssModules";
import "./styles.css";
import { StyledJsx } from "./conponentes/StyledJsx";
import { StyledComponents } from "./conponentes/StyledComponents";
import { Emotion } from "./conponentes/Emotion";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </div>
  );
}
