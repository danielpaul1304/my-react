import "./App.css";
import HookColor from "./Component/HookColor";
 
function App() {
    const { color, generateColor }
        = HookColor();
    return (
        <div
            style={{
                height: "100vh",
                width: "100vw",
                backgroundColor: "#" + color,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <button
                style={{
                    padding: "60px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "10px",
                    backgroundImage:
                        "linear-gradient(to top, #a8edea 0%, #fed6e3 100%)",
                    fontSize: "larger",
                }}
                onClick={generateColor}
            >
                Generate random color
            </button>
        </div>
    );
}
 
export default App;