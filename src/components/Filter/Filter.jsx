import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";

import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import getFilterData from "../../helpers/getFilterData";
import {
  DropdownListStyled,
  FilterBox,
  FilterPlaceholder,
  FilterWrapper,
  InputBoxStyled,
  OpenSelectBtn,
} from "./Filter.styled";

const Filter = ({
  teachers,
  setLanguageFilter,
  setLevelFilter,
  setPriceFilter,
}) => {
  const [isLangSelectOpen, setIsLangSelectOpen] = useState(false);
  const [isLevelSelectOpen, setIsLevelSelectOpen] = useState(false);
  const [isPriceSelectOpen, setIsPriceSelectOpen] = useState(false);

  const [selectedLanguage, setSelectedLanguage] = useState("Сhoose a language");
  const [selectedLevels, setSelectedLevels] = useState("Сhoose a level");
  const [selectedPrice, setSelectedPrice] = useState("Сhoose a price");

  const languagesData = getFilterData(teachers, "languages");
  const levelsData = getFilterData(teachers, "levels");
  const pricesData = getFilterData(teachers, "price_per_hour");

  const handleOpenSelect = (name) => {
    switch (name) {
      case "languages":
        setIsLangSelectOpen(!isLangSelectOpen);
        break;
      case "levels":
        setIsLevelSelectOpen(!isLevelSelectOpen);
        break;
      case "price_per_hour":
        setIsPriceSelectOpen(!isPriceSelectOpen);
        break;

      default:
        break;
    }
  };

  return (
    <FilterWrapper>
      <FilterBox>
        <FilterPlaceholder>Languages</FilterPlaceholder>
        <InputBoxStyled
          onClick={() => handleOpenSelect("languages")}
          style={{ minWidth: "221px", cursor: "pointer" }}
        >
          {selectedLanguage}
          <OpenSelectBtn name="languages" type="button">
            {!isLangSelectOpen ? (
              <FiChevronDown name="languages" size={20} />
            ) : (
              <FiChevronUp name="languages" size={20} />
            )}
          </OpenSelectBtn>
          <DropdownListStyled
            className={isLangSelectOpen ? "active" : "hidden"}
          >
            <li
              style={{ cursor: "pointer" }}
              onClick={() => {
                setSelectedLanguage("Сhoose a language");
                setLanguageFilter(false);
                setIsLangSelectOpen(false);
              }}
            >
              clear selection
            </li>
            {languagesData.map((el) => (
              <li
                key={nanoid()}
                style={{ cursor: "pointer" }}
                onClick={(e) => {
                  setSelectedLanguage(e.target.innerText);
                  setLanguageFilter(e.target.innerText);
                  setIsLangSelectOpen(false);
                }}
              >
                {el}
              </li>
            ))}
          </DropdownListStyled>
        </InputBoxStyled>
      </FilterBox>
      <FilterBox>
        <FilterPlaceholder>Level of knowledge</FilterPlaceholder>
        <InputBoxStyled
        
          onClick={() => handleOpenSelect("levels")}
          style={{ minWidth: "248px" }}
        >
          {selectedLevels}
          <OpenSelectBtn name="levels" type="button">
            {!isLevelSelectOpen ? (
              <FiChevronDown size={20} />
            ) : (
              <FiChevronUp size={20} />
            )}
          </OpenSelectBtn>

          <DropdownListStyled
            className={isLevelSelectOpen ? "active" : "hidden"}
          >
            <li
              style={{ cursor: "pointer" }}
              onClick={() => {
                setSelectedLevels("Сhoose a level");
                setLevelFilter(false);
                setIsLevelSelectOpen(false);
              }}
            >
              clear selection
            </li>
            {levelsData.map((el) => (
              <li
                key={nanoid()}
                style={{ cursor: "pointer" }}
                onClick={(e) => {
                  setSelectedLevels(e.target.innerText);
                  setLevelFilter(e.target.innerText);
                  setIsLevelSelectOpen(false);
                }}
              >
                {el}
              </li>
            ))}
          </DropdownListStyled>
        </InputBoxStyled>
      </FilterBox>
      <FilterBox>
        <FilterPlaceholder>Price</FilterPlaceholder>
        <InputBoxStyled
          onClick={() => handleOpenSelect("price_per_hour")}
          style={{ minWidth: "187px" }}
        >
          {selectedPrice}
          <OpenSelectBtn name="price_per_hour" type="button">
            {!isPriceSelectOpen ? (
              <FiChevronDown size={20} />
            ) : (
              <FiChevronUp size={20} />
            )}
          </OpenSelectBtn>
          <DropdownListStyled
            className={isPriceSelectOpen ? "active" : "hidden"}
          >
            <li
              style={{ cursor: "pointer" }}
              onClick={() => {
                setSelectedPrice("Сhoose a price");
                setPriceFilter(false);
                setIsPriceSelectOpen(false);
              }}
            >
              clear selection
            </li>
            {pricesData.map((el) => (
              <li
                key={nanoid()}
                onClick={(e) => {
                  setSelectedPrice(e.target.innerText);
                  setPriceFilter(e.target.innerText);
                  setIsPriceSelectOpen(false);
                }}
              >
                {el}
              </li>
            ))}
          </DropdownListStyled>
        </InputBoxStyled>
      </FilterBox>
    </FilterWrapper>
  );
};

export default Filter;
