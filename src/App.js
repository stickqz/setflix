import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import requests from "./requests.js";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";

function App() {
	const [load, setLoad] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setLoad(true);
		}, 1800);
	}, []);

	if (!load) return <Loader />;

	return (
		<>
			<Navbar />
			<Home />
			<Card
				id="Setflix"
				thumb={true}
				title="Setflix Originals"
				fetchUrl={requests.fetchNetflixOriginals}
			/>
			<Card
				id="Trending"
				thumb={false}
				title="Top Trending"
				fetchUrl={requests.fetchTrending}
			/>
			<Card
				id="Rated"
				thumb={false}
				title="Top Rated"
				fetchUrl={requests.fetchTopRated}
			/>
			<Card
				id="Action"
				thumb={false}
				title="Action Movies"
				fetchUrl={requests.fetchActionMovies}
			/>
			<Card
				id="Adventure"
				thumb={false}
				title="Adventure Movies"
				fetchUrl={requests.fetchAdventureMovies}
			/>
			<Card
				id="Horror"
				thumb={false}
				title="Horror Movies"
				fetchUrl={requests.fetchHorrorMovies}
			/>
			<Card
				id="Romantic"
				thumb={false}
				title="Romantic Movies"
				fetchUrl={requests.fetchRomanceMovies}
			/>
			<Card
				id="Thriller"
				thumb={false}
				title="Thriller Movies"
				fetchUrl={requests.fetchTrillerMovies}
			/>
			<Card
				id="Fantasy"
				thumb={false}
				title="Fantasy Movies"
				fetchUrl={requests.fetchFantasyMovies}
			/>
			<Card
				id="Comedy"
				thumb={false}
				title="Comedy Movies"
				fetchUrl={requests.fetchComedyMovies}
			/>
			<Card
				id="ScienceFiction"
				thumb={false}
				title="Science Fiction Movies"
				fetchUrl={requests.fetchScienceFiction}
			/>
			<Card
				id="Mystery"
				thumb={false}
				title="Mystery Movies"
				fetchUrl={requests.fetchMysteryMovie}
			/>
			<Card
				id="Animation"
				thumb={false}
				title="Animation Movies"
				fetchUrl={requests.fetchAnimationMovies}
			/>
			<Card
				id="Crime"
				thumb={false}
				title="Crime Movies"
				fetchUrl={requests.fetchCrimeMovies}
			/>
			<Card
				id="Drama"
				thumb={false}
				title="Drama Movies"
				fetchUrl={requests.fetchDrameMovies}
			/>
			<Card
				id="War"
				thumb={false}
				title="War Movies"
				fetchUrl={requests.fetchWarMovies}
			/>
			<Card
				id="Western"
				thumb={false}
				title="Western Movies"
				fetchUrl={requests.fetchWesternMovies}
			/>
			<Card
				id="Family"
				thumb={false}
				title="Family Movies"
				fetchUrl={requests.fetchFamilyMovies}
			/>
			<Card
				id="History"
				thumb={false}
				title="History Movies"
				fetchUrl={requests.fetchHistory}
			/>
			<Card
				id="Documentaries"
				thumb={false}
				title="Documentaries"
				fetchUrl={requests.fetchDocumentaries}
			/>
		</>
	);
}
export default App;
