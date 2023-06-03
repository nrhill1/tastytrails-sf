// ./app/loading.tsx

// Style Imports
import "../styles/globals.css";
import "../styles/loading.module.css"


export default function loading() {
    return (
        <div>
            <h2 id="loading" className="mt-20 text-3xl font-bold text-center align-middle animate-bounce place-content-center">
                Loading...
            </h2>
        </div>
    );
}