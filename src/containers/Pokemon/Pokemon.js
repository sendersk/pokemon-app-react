import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetPokemon } from "../../actions/PokemonActions";
import _ from "lodash";
import { Wrapper, Item, PokemonWrapper, PokemonHeader } from "./styled";
import Alert from "../Alert/Alert";
import Loader from "../Loader/Loader";
import PokemonItem from "../PokemonItem/PokemonItem";

const Pokemon = ({match}) => {
  const pokemonName = match.params.pokemon;
  const dispatch = useDispatch();
  const pokemonState = useSelector((state) => state.Pokemon);

  useEffect(() => {
    dispatch(GetPokemon(pokemonName));
  }, [dispatch, pokemonName]);

  const ShowData = () => {
    if (!_.isEmpty(pokemonState.data[pokemonName])) {
      const pokeData = pokemonState.data[pokemonName];
      return (
        <Wrapper>
          <Item>
            <h1>Sprites</h1>
            <img src={pokeData.sprites.front_default} alt="" />
            <img src={pokeData.sprites.back_default} alt="" />
          </Item>
          <PokemonItem
            title="Stats"
            content={pokeData.stats.map(({ stat, base_stat }) => {
              return (
                <p key={stat.name}>
                  {stat.name} {base_stat}
                </p>
              );
            })}
          />
          <PokemonItem
            title="Abilities"
            content={pokeData.abilities.map(({ ability }) => {
              return <p key={ability.name}>{ability.name}</p>;
            })}
          />
          <PokemonItem
            title="Type"
            content={pokeData.types.map(({ type }) => {
              return <p key={type.name}>{type.name}</p>;
            })}
          />
        </Wrapper>
      );
    }

    if (pokemonState.loading) {
      return <Loader />;
    }

    if (pokemonState.errorMsg !== "") {
      return (
        <Alert content="Oops! Something go wrong! Back to Pokemon List and try choose another one." />
      );
    }
  };

  return (
    <PokemonWrapper>
      <PokemonHeader>{pokemonName}</PokemonHeader>
      {ShowData()}
    </PokemonWrapper>
  );
};

export default Pokemon;
