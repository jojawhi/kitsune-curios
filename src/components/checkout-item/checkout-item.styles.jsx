import styled from 'styled-components';

export const Arrow = styled.span`
	padding: 0 0.25rem;
	font-size: 1.5rem;
	font-weight: 900;
	cursor: pointer;
`;

export const RemoveButton = styled.span`
	padding: 0 0.25rem;
	font-size: 1.5rem;
	font-weight: 900;
	cursor: pointer;
`;

export const Quantity = styled.span`
	padding: 0 0.5rem;
`;
export const QuantityContainer = styled.div`
	display: flex;
	align-items: center;
	place-self: center;
`;

export const CheckoutImage = styled.img`
	place-self: center;
	width: 10rem;
`;

export const CheckoutItemContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding: 1rem 0;
	font-size: 1.25rem;
	text-align: center;
	border-bottom: 1px solid gray;
`;

// .checkout-item-container {
// 	display: grid;
// 	grid-template-columns: repeat(5, 1fr);
// 	justify-content: space-between;
// 	align-items: center;
// 	width: 100%;
// 	padding: 1rem 0;
// 	font-size: 1.25rem;
// 	text-align: center;
// 	border-bottom: 1px solid gray;
// }

// .checkout-img {
// 	place-self: center;
// 	width: 10rem;
// }

// .quantity-container {
// 	display: flex;
// 	align-items: center;
// 	place-self: center;
// }

// .quantity {
// 	padding: 0 0.5rem;
// }

// .arrow,
// .remove-button {
// 	padding: 0 0.25rem;
// 	font-size: 1.5rem;
// 	font-weight: 900;
// 	cursor: pointer;
// }
