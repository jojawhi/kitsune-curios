import './categories.styles.scss';
import Directory from './components/directory/directory.component';

const App = () => {
	const categories = [
		{
			id: 1,
			title: 'Pokemon',
			imgURL: 'https://cdn.europosters.eu/image/750/posters/pokemon-eevee-i32673.jpg',
		},
		{
			id: 2,
			title: 'Lord of the Rings',
			imgURL: 'https://browsecat.net/sites/default/files/lord-of-the-rings-4k-wallpapers-89916-175890-3888387.png',
		},
		{
			id: 3,
			title: 'Star Trek',
			imgURL: 'https://i.redd.it/vz20prnp8v551.jpg',
		},
		{
			id: 4,
			title: 'Aliens',
			imgURL: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9c1803e2-7366-4977-86fd-8d3e40288413/d5utk61-582c9d09-b24f-4ece-a8bf-ce22f19349fa.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzljMTgwM2UyLTczNjYtNDk3Ny04NmZkLThkM2U0MDI4ODQxM1wvZDV1dGs2MS01ODJjOWQwOS1iMjRmLTRlY2UtYThiZi1jZTIyZjE5MzQ5ZmEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.drm23XayO7qEefOxZUeuGOgn1SMAR3RBZEJpcaKZzao',
		},
		{
			id: 5,
			title: 'Predators',
			imgURL: 'https://cdn.wallpapersafari.com/87/9/NGhmFn.jpg',
		},
	];

	return <Directory categories={categories} />;
};

export default App;
