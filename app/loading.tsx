// ./app/loading.tsx
import "../styles/globals.css";
import "../styles/loading.module.css"

export default function loading() {
    return (
        <div>
            <h2 id="loading" className="animate-bounce text-3xl font-bold text-center align-middle">
                Loading...
            </h2>
        </div>
    );
}