import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledGameInfo = styled.div`
  width: 250px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: scroll;

  button {
    width: 100%;
    max-width: 350px;
    height: 45px;
    background-color: ${({ theme }) => theme.colorPrimary};
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    transition: 0.2s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colorPrimaryHover};
    }
  }
`;

const GameInfo = ({ startGame, isHost }) => (
  <StyledGameInfo>
    <h2>Game Info</h2>

    {isHost && (
      <button type="button" onClick={startGame}>
        START GAME
      </button>
    )}
  </StyledGameInfo>
);

GameInfo.propTypes = {
  startGame: PropTypes.func.isRequired,
  isHost: PropTypes.bool.isRequired,
};

export default GameInfo;
