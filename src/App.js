import './sass/style.sass';
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import {Routes, Route} from "react-router-dom";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

export const App = () => {
  return (
    <div className="wrapper">
			<Header />
			<main className="content">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</main>
    </div>
  );
}