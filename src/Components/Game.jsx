import React from "react";
import PropTypes from "prop-types";

export const Game = (props) => {
  Game.propTypes = {
    id: PropTypes.string,
    cover: PropTypes.string,
    handleRemove: PropTypes.func,
  };
  return (
    <div key={props.id}>
      <img src={props.cover} alt="" />
      <div>
        <h2>{props.title}</h2>
        <button onClick={props.handleRemove}>Remover</button>
      </div>
    </div>
  );
};
