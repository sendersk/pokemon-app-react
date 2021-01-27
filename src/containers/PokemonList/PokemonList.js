import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetPokemonList } from "../../actions/PokemonActions";
import ReactPaginate from "react-paginate";
import {ListWrapper, ListItem, ListLink} from "./styled"

const PokemonList = (props) => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.PokemonList);

  useEffect(() => {
    FetchData(1);
  }, []);

  const FetchData = (page = 1) => {
    dispatch(GetPokemonList(page));
  };

  const ShowData = () => {
    if (pokemonList.loading) {
      return <p>Loading...</p>;
    }

    if (!_.isEmpty(pokemonList.data)) {
      return (
        <ListWrapper>
          {pokemonList.data.map((el, id) => {
            return (
              <ListItem key={id}>
                <p key={el.name}>{el.name}</p>
                <ListLink to={`/pokemon/${el.name}`}>View</ListLink>
              </ListItem>
            );
          })}
        </ListWrapper>
      );
    }

    if (pokemonList.errorMsg !== "") {
      return <p>{pokemonList.errorMsg}</p>;
    }

    return <p>Unable to get data</p>;
  };

  const handleSearchInputKeyPress = (e) => {
    if (e.key === "Enter") {
      props.history.push(`/pokemon/${search}`);
    }
  };

  return (
    <div className="container">
      <div className={"search-wrapper"}>
        <p className={"search-paragraph"}>Find your Pokemon: </p>
        <input
          className={"search-input"}
          type="text"
          onKeyPress={handleSearchInputKeyPress}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder={"Search..."}
        />
        <button
          className={"search-btn"}
          onClick={() => props.history.push(`/pokemon/${search}`)}
        >
          Search
        </button>
      </div>
      {ShowData()}
      {!_.isEmpty(pokemonList.data) && (
        <ReactPaginate
          pageCount={Math.ceil(pokemonList.count / 20)}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          onPageChange={(data) => FetchData(data.selected + 1)}
          containerClassName={"pagination"}
        />
      )}
    </div>
  );
};

export default PokemonList;