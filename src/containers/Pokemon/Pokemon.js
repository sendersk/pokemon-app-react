import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetPokemon } from "../../actions/PokemonActions";
import _ from "lodash";
import {Wrapper, Item, PokemonWrapper} from "./styled"

const Pokemon = (props) => {
  const pokemonName = props.match.params.pokemon;
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
          <Item>
            <h1>Stats</h1>
            {pokeData.stats.map(({ stat, base_stat }) => {
              return (
                <p key={stat.name}>
                  {stat.name} {base_stat}
                </p>
              );
            })}
          </Item>
          <Item>
            <h1>Abilities</h1>
            {pokeData.abilities.map(({ ability }) => {
              return <p key={ability.name}>{ability.name}</p>;
            })}
          </Item>
          <Item>
            <h1>Type</h1>
            {pokeData.types.map(({ type }) => {
              return <p key={type.name}>{type.name}</p>;
            })}
          </Item>
        </Wrapper>
      );
    }

    if (pokemonState.loading) {
      return <p>Loading...</p>;
    }

    if (pokemonState.errorMsg !== "") {
      return <p>{pokemonState.errorMsg}</p>;
    }

    return <p>error getting pokemon</p>;
  };

  return (
    <PokemonWrapper>
      <h1 className="pokemon-header">{pokemonName}</h1>
      {ShowData()}
    </PokemonWrapper>
  );
};

export default Pokemon;
