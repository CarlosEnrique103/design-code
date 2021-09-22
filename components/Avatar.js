import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Avatar = () => {
	const photo = useSelector((state) => state.user.info.photo);

	useEffect(() => {}, []);

	return <Image source={{ uri: photo }} />;
};

export default Avatar;

const Image = styled.Image`
	width: 44px;
	height: 44px;
	border-radius: 22px;
`;
