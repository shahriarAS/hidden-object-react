import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div className="text-white text-center w-full">
            <h1 className="text-6xl mb-8">Hidden Object Find!</h1>
            <div className="flex gap-4 items-center justify-center">
                <Link to="/play">
                    <button type="button" className="text-gray-900 bg-gray-200 border border-gray-300 hover:bg-gray-100 font-medium rounded-lg px-8 py-2 mb-2 text-xl">Play</button>
                    </Link>
            </div>
        </div>
    );
}

export default HomePage;