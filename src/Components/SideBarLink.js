import React, { useState } from 'react';
import {
	LinkContainer,
	MainLink,
	Left,
	Right,
	SubLink,
	Links,
} from './Styles/SideBar.styled';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
const SideBarLink = ({ item }) => {
	const [sideIsOpen, setSideIsOpen] = useState(item.open);

	return (
		<LinkContainer>
			<MainLink>
				<Left to={item.to}>
					{item.icon}
					{item.name}
				</Left>
				<Right>
					{sideIsOpen ? (
						<MdExpandLess onClick={() => setSideIsOpen(false)} />
					) : (
						<MdExpandMore onClick={() => setSideIsOpen(true)} />
					)}
				</Right>
			</MainLink>
			<SubLink
				height={sideIsOpen ? '85px' : '0'}
				visible={sideIsOpen ? 'visible' : 'hidden'}
			>
				{sideIsOpen &&
					item.links.map((elm, idx) => (
						<Links
							key={idx}
							to={elm.to}
							top={sideIsOpen ? '0' : '-60px'}
							animation={sideIsOpen ? 'test 0.5s ease-in ' : ''}
						>
							{elm.title}
						</Links>
					))}
			</SubLink>
		</LinkContainer>
	);
};

export default SideBarLink;
