import React from 'react';
import { sideBarData } from '../Utils/Data';
import { LinksContainer, Title } from './Styles/SideBar.styled';
import SideBarLink from './SideBarLink';

const SideBarLinks = () => {
	return (
		<>
			<Title>Shop By Category</Title>
			<LinksContainer>
				{sideBarData.map((item, idx) => (
					<SideBarLink key={idx} item={item} />
				))}
			</LinksContainer>
		</>
	);
};

export default SideBarLinks;
