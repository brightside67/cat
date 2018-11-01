import React from "react";
import {
  Image,
  Container,
  ContainerBox,
  CardHeader,
  CardTitle,
  CardDishName,
  CardPortion,
  OpacityBox,
  CardPortionGift,
  Weight,
  CardHeaderFakeHOC
} from "../../styled/CatCard";
import BuyPackageText from "../BuyPackageText";
import catImage from "./cat.png";

const CatCard = props => {
  const {
    dish,
    weight,
    portion,
    gift,
    isAvailable,
    missSelect,
    catchPhrase
  } = props.data;
  const { changeStateOnClick, index, changeStateOnHover } = props;
  const renderGift = () => {
    switch (gift) {
      case 0:
        return (
          <CardPortionGift isAvailable={isAvailable}>
            мышь в подарок
          </CardPortionGift>
        );
        break;
      case 2:
        return (
          <CardPortionGift isAvailable={isAvailable}>
            <b>{gift}</b> мыши в подарок
          </CardPortionGift>
        );
        break;
      case 5:
        return (
          <CardPortionGift isAvailable={isAvailable}>
            <b>{gift}</b> мышей в подарок заказчик доволен
          </CardPortionGift>
        );
        break;

      default:
        return false;
    }
  };

  return (
    <div>
      <Container
        onMouseLeave={() => {
          changeStateOnHover(index);
        }}
        onClick={() => {
          changeStateOnClick(index);
        }}
        isAvailable={isAvailable}
      >
        <ContainerBox>
          <OpacityBox isAvailable={isAvailable}>
            {!missSelect ? (
              <CardHeader isAvailable={isAvailable} missSelect={missSelect}>
                Сказочное заморское яство
              </CardHeader>
            ) : (
              <CardHeaderFakeHOC
                isAvailable={isAvailable}
                missSelect={missSelect}
              >
                Котэ не одобряет?
              </CardHeaderFakeHOC>
            )}

            <CardTitle isAvailable={isAvailable}>Нямушка</CardTitle>
            <CardDishName isAvailable={isAvailable}>{dish}</CardDishName>
            <CardPortion isAvailable={isAvailable}>
              <b>{portion}</b> порций
            </CardPortion>

            {renderGift()}

            <Image src={catImage} />
            <Weight isAvailable={isAvailable}>
              {weight}
              <br />
              <span>кг</span>
            </Weight>
          </OpacityBox>
        </ContainerBox>
      </Container>

      <BuyPackageText
        dish={dish}
        catchPhrase={catchPhrase}
        index={index}
        missSelect={missSelect}
        isAvailable={isAvailable}
        changeStateOnClick={changeStateOnClick}
      />
    </div>
  );
};

export default CatCard;
