import {
	DirectoryItemContainer,
	BackgroundImage,
	DirectoryItemBodyContainer,
} from './directory-item.styles';

import { useNavigate } from 'react-router-dom';

const DirectoryItem = ({ category }) => {
	const { title, imgURL, route } = category;

	const navigate = useNavigate();

	const onNavigateHandler = () => navigate(route);

	return (
		<DirectoryItemContainer onClick={onNavigateHandler}>
			<BackgroundImage imageURL={imgURL}></BackgroundImage>
			<DirectoryItemBodyContainer>
				<h2>{title}</h2>
				<p>Shop Now</p>
			</DirectoryItemBodyContainer>
		</DirectoryItemContainer>
	);
};

export default DirectoryItem;
