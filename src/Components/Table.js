import React from 'react';
import { TableContainer, TableHeader, TR, TH } from './Styles/Cart.styled';

const Table = ({ cart, children }) => {
	return (
		<TableContainer>
			<TableHeader>
				<TR>
					<TH>Item</TH>
					<TH>Price</TH>
					{cart === 'cart' && (
						<>
							<TH>Qty</TH>
							<TH>Subtotal</TH>
						</>
					)}
				</TR>
			</TableHeader>
			{children}
		</TableContainer>
	);
};

export default Table;
