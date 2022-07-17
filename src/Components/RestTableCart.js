import React, { useState, useEffect } from 'react';
import {
	TD,
	TDPrice,
	QuantityContainer,
	QuantityBtnTable,
} from './Styles/Cart.styled';
import { increaseQty, decreaseQty } from '../Redux/Actions/Users';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
const RestTableCart = ({ PID, user, userQty }) => {
	const [subTotal, setSubtotal] = useState(null);
	const dispatch = useDispatch();

	useEffect(() => {
		setSubtotal(userQty > 1 ? userQty * PID.price : PID.price);
	}, [userQty]);

	///
	const handleIncreaseQty = () => {
		if (userQty > 0) {
			dispatch(increaseQty(user.id, PID.id));
		}
	};
	const handleDecreaseQuantity = () => {
		dispatch(decreaseQty(user.id, PID.id));
	};
	return (
		<>
			<TD>
				<QuantityContainer>
					<QuantityBtnTable
						onClick={handleDecreaseQuantity}
						disabled={userQty < 2}
					>
						<AiOutlineMinus />
					</QuantityBtnTable>
					{userQty}
					<QuantityBtnTable onClick={handleIncreaseQty} disabled={userQty > 2}>
						<AiOutlinePlus />
					</QuantityBtnTable>
				</QuantityContainer>
			</TD>
			<TDPrice>{subTotal && `EGP ${subTotal.toLocaleString('en-us')}`}</TDPrice>
		</>
	);
};

export default RestTableCart;
