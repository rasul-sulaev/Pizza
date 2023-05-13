import './sass/style.sass';
import {Header} from "./components/Header/Header";
import {Home} from "./pages/Home";

export const App = () => {
  return (
    <div className="wrapper">
			<Header />
			<main className="content">
				<Home />
			</main>
    </div>
  );
}