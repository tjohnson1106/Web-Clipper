import React from "react";
import { StatusBar, SafeAreaView } from "react-native";
import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";

export default function ContainerView() {
  const recipes = [
    {
      name: "Pad Thai",
      info: "45 minutes | 2 servings",
      image: require("../assets/pad_thai.jpg")
    },
    {
      name: "Seared Scallops with Peanut Sauce",
      info: "20 minutes | 2 servings",
      image: require("../assets/scallops.jpg")
    },
    {
      name: "Grilled chicken with lemon butter",
      info: "60 minutes | 2 servings",
      image: require("../assets/chicken.jpg")
    }
  ];

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <RecipeBackground>
        <SafeAreaView>
          <MenuBar>
            <Back>
              <AntDesign name="arrowleft" size={24} color="#FFF" />
              <Text
                style={{
                  marginLeft: 10
                }}
              >
                Ingredients
              </Text>
            </Back>
            <AntDesign name="heart" size={24} color="#FFF" />
          </MenuBar>
          <MainRecipe>
            <Text title heavy>
              Spicy Shrimp
            </Text>
            <Divider />
            <Text bold>80 Calories per 100 grams</Text>
            <Text>3 grams fat | 10 grams of protein | 8 grams of carbs</Text>
          </MainRecipe>
          <Button>
            <Text bold small>
              LEARN MORE
            </Text>
          </Button>
        </SafeAreaView>
      </RecipeBackground>
      <RecipesContainer>
        <Text dark heavy large>
          Recipes
        </Text>
        <Text dark small>
          18 Recipes Available
        </Text>
        <Recipes>
          {recipes.map((recipe, index) => {
            return (
              <Recipe key={index}>
                <RecipeImage source={recipe.image} />
                <RecipeInfo>
                  <Text dark bold>
                    {recipe.name}
                  </Text>
                  <Text dark small>
                    {recipe.info}
                  </Text>
                </RecipeInfo>
                <AntDesign name="hearto" size={18} color="#000" />
              </Recipe>
            );
          })}
        </Recipes>
      </RecipesContainer>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

const Text = styled.Text`
  color: ${(props) => (props.dark ? "#000" : "#FFF")};
  font-family: "AvenirNext-Regular";

  ${({ title, large, small }) => {
    switch (true) {
      case title:
        return "font-size: 32px";
      case large:
        return "font-size: 20px";
      case small:
        return "font-size: 13px";
    }
  }}

  ${({ bold, heavy }) => {
    switch (true) {
      case bold:
        return "font-weight: 600";
      case heavy:
        return "font-weight: 700";
    }
  }}
`;

const RecipeBackground = styled.View`
  width: 100%;
`;

const MenuBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
`;

const Back = styled.View`
  flex-direction: row;
  align-items: center;
`;

const MainRecipe = styled.View`
  padding: 0 32px;
  margin: 200px 0 32px 0;
`;

const Divider = styled.View`
  border-bottom-color: #fff;
  border-bottom-width: 2px;
  width: 150px;
  margin: 8px 0;
`;

const Button = styled.TouchableOpacity`
  margin: 0 0 48px 32px;
  background-color: rgba(255, 255, 255, 0.3);
  align-self: flex-start;
  padding: 6px 18px;
  border-radius: 100px;
`;

const RecipesContainer = styled.View`
  margin-top: -24px;
  padding: 32px;
  background-color: #fff;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
`;

const Recipes = styled.View`
  margin-top: 16px;
`;

const Recipe = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

const RecipeImage = styled.Image``;

const RecipeInfo = styled.View``;
