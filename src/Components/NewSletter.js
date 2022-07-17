import React from 'react';
import {
	NsContainer,
	NsTitle,
	NsDesc,
	NsInputContainer,
	NsInput,
	NsBtn,
} from './Styles/Home.styled';
import { IoMdSend } from 'react-icons/io';

const NewSletter = () => {
	return (
		<NsContainer>
			<NsTitle>News Letter</NsTitle>
			<NsDesc>Get Timely Updates From Your Favorite Products</NsDesc>
			<NsInputContainer>
				<NsInput placeholder="Your Email..." />
				<NsBtn>
					<IoMdSend />
				</NsBtn>
			</NsInputContainer>
		</NsContainer>
	);
};

export default NewSletter;
