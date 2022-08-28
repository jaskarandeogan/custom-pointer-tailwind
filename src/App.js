import "./App.css";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <div className="App relative bg-gradient-to-r from-blue to-dark-blue w-screen h-screen">
      <AnimatedCursor
        innerSize={8}
        outerSize={32}
        color="119,136,153"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <h1 className="text-center p-2 text-slate-200 font-bold text-4xl">Custom Cursor</h1>
      <button className="btn btn-primary ">Hover Me</button>
    </div>
  );
}

export default App;
