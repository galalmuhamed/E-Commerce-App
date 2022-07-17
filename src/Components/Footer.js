import React from 'react';
import {
	FtContainer,
	FtLeft,
	FtLogo,
	FtDesc,
	FtSocialLinks,
	FtSocialLink,
	FtCenter,
	FtTitle,
	FtList,
	FtListItem,
	FtRight,
	FtContactItem,
	FtPayment,
	CopyRight,
} from './Styles/Home.styled';
import { socialLinksData, topLinks } from '../Utils/Data';
import { MdPhone, MdEmail, MdLocationPin } from 'react-icons/md';

const Footer = () => {
	return (
		<>
			<FtContainer>
				<FtLeft>
					<FtLogo>G-Store</FtLogo>
					<FtDesc>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac
						placerat nunc. Nulla ante ante, elementum sit amet aliquet ut,
						vulputate quis ante. Quisque tristique diam vitae elit molestie
						euismod. Maecenas semper eros sit amet commodo consequat. Ut sed
						libero condimentum, pharetra velit non, sagittis nibh. Sed quis quam
						lectus.
					</FtDesc>
					<FtSocialLinks>
						{socialLinksData.map(item => (
							<FtSocialLink key={item.id} color={item.bg}>
								{item.icon}
							</FtSocialLink>
						))}
					</FtSocialLinks>
				</FtLeft>
				<FtCenter>
					<FtTitle>Top Links</FtTitle>
					<FtList>
						{topLinks.map(link => (
							<FtListItem key={link.id}>{link.name}</FtListItem>
						))}
					</FtList>
				</FtCenter>
				<FtRight>
					<FtTitle>Contacts</FtTitle>
					<FtContactItem>
						<MdPhone />
						9999
					</FtContactItem>
					<FtContactItem>
						<MdLocationPin />
						10St Cairo Egypt
					</FtContactItem>
					<FtContactItem>
						<MdEmail /> G-store@gmail.com
					</FtContactItem>
					<FtPayment src="https://www.rayashop.com/media/images/footer/payment-methods.png" />
				</FtRight>
			</FtContainer>
			<CopyRight>Copyright © 2021 G-Store, Inc. All rights reserved.</CopyRight>
		</>
	);
};

export default Footer;
