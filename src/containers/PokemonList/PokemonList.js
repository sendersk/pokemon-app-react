import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetPokemonList } from "../../actions/PokemonActions";
import { ListWrapper, ListItem, ListLink } from "./styled";
import { Container } from "../../common/Container/styled";
import ScrollArrow from "../ScrollArrow/ScrollArrow";
import {
  SearchWrapper,
  SearchParagraph,
  SearchInput,
  SearchButton,
} from "../Search/styled";
import Loader from "../Loader/Loader";
import Alert from "../Alert/Alert"

const PokemonList = (props) => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.PokemonList);

  useEffect(() => {
    function FetchData() {
      dispatch(GetPokemonList());
    }
    FetchData();
  }, [dispatch]);

  const ShowData = () => {
    if (pokemonList.loading) {
      return <Loader />;
    }

    if (!_.isEmpty(pokemonList.data)) {
      return (
        <ListWrapper>
          {pokemonList.data
            .filter((value) => {
              if (setSearch === "") {
                return value;
              } else if (
                value.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return value;
              } else {
                return 0;
              }
            })
            .map((value, id) => {
              return (
                <ListItem key={id}>
                  <p key={value.name}>{value.name}</p>
                  <ListLink to={`/pokemon/${value.name}`}>View</ListLink>
                </ListItem>
              );
            })}
        </ListWrapper>
      );
    }

    if (pokemonList.errorMsg !== "") {
      return (
        <Alert content="Oops! Something go wrong!" />
      );
    }
  };

  const handleSearchInputKeyPress = (e) => {
    if (e.key === "Enter") {
      props.history.push(`/pokemon/${search}`);
    }
  };

  return (
    <Container>
      <SearchWrapper>
        <SearchParagraph>Find your Pokemon: </SearchParagraph>
        <SearchInput
          className={"search-input"}
          type="text"
          onKeyPress={handleSearchInputKeyPress}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder={"Search..."}
        />
        <SearchButton
          className={"search-btn"}
          onClick={() => props.history.push(`/pokemon/${search}`)}
        >
          Search
        </SearchButton>
      </SearchWrapper>
      {ShowData()}
      <ScrollArrow />
    </Container>
  );
};

export default PokemonList;
