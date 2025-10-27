import ReactDOM from "react-dom/client";
import "./app.css"
function Book(){
    return(
        <div className="card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg" width="400" height="400" alt="book image" />
            <h3>Title : Physics</h3>
            <h4>Price: 381</h4>
            <button>Add to Cart</button>
        </div>
    );
}

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);
root.render(<Book />);