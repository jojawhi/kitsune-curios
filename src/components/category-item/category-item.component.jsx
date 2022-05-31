import { CategoryContainer, BackgroundImage, CategoryBodyContainer } from './category-item.styles';

const CategoryItem = ({ category }) => {
	const { title, imgURL } = category;

	return (
		<CategoryContainer>
			<BackgroundImage
				style={{
					backgroundImage: `url(${imgURL})`,
				}}
			></BackgroundImage>
			<CategoryBodyContainer>
				<h2>{title}</h2>
				<p>Shop Now</p>
			</CategoryBodyContainer>
		</CategoryContainer>
	);
};

export default CategoryItem;
