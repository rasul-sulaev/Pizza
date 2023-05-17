import './sass/style.sass';
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import {Routes, Route} from "react-router-dom";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import {useState} from "react";

export const App = () => {
	const [searchValue, setSearchValue] = useState('');

	console.log(searchValue)

  return (
    <div className="wrapper">
			<Header
				searchValue={searchValue}
				setSearchValue={setSearchValue}
			/>
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