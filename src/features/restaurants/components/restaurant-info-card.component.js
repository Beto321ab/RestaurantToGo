import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.sizes[1]};
`;

const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.body}
  font-size: ${(props) => props.theme.fontSizes.body}
  color: ${(props) => props.theme.colors.ui.secondary};
`;
const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;
const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
const Star = styled.View`
  padding: ${(props) => props.theme.space[3]};
  display: flex;
  flex-direction: row;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some nice restaurant",
    icon,
    photos = [
      "https://cdn.pixabay.com/photo/2018/07/14/15/27/cafe-3537801_960_720.jpg",
    ],
    address = "Some random street",
    isOpenNow = true,
    rating = 5,
    isClosedTemporaly,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.ceil(rating)));
  return (
    <RestaurantCard>
      <RestaurantCardCover elevation={5} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Star key={rating}>
          {ratingArray.map(() => (
            <SvgXml xml={star} width={25} height={25} />
          ))}
        </Star>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};

// const styles = StyleSheet.create({
//   card: { backgroundColor: "white", padding: 16 },
//   cover: { backgroundColor: "white" },
//   title: { padding: 16 },
// });
