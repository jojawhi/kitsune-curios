import './shop-category.styles.scss';

import ProductCard from '../../components/product-card/product-card.component';

const ShopCategory = ({ title, products }) => {
	return (
		<div className='shop-category-container'>
			<h2>
				<span className='title'>{title.toUpperCase()}</span>
			</h2>
			<div className='products'>
				{products.map((product) => {
					return (
						<ProductCard
							key={product.id}
							product={product}
						></ProductCard>
					);
				})}
			</div>
		</div>
	);
};

export default ShopCategory;
