import {MyNav} from "./components/MyNav";
import Book from "./components/Books/Book"
import { Slider } from "./components/slider";
import { Footer } from "./components/footer";
 function App() {
	
	return (
		<>
			<MyNav />
      <Slider/>
			<Book />
			<Footer />
      
			
		</>
	);
}
export default App;