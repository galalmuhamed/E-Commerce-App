import React from 'react';
import {
	List,
	IconContainer,
	Details,
	DetailsTitle,
	DetailsInfo,
} from './Styles/ProductPage.styled';

const SpecsList = ({ Icon, details, info }) => {
	return (
		<List>
			<IconContainer>
				<Icon />
			</IconContainer>
			<Details>
				<DetailsTitle>{details}</DetailsTitle>
				<DetailsInfo>{info}</DetailsInfo>
			</Details>
		</List>
	);
};

export default SpecsList;
