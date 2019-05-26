/* eslint-disable no-param-reassign */
import { action } from 'easy-peasy';

const gameStore = {
  game: {
    id: 'AAAA',
    players: [
      {
        name: 'Elias',
        color: 'blue',
        id: '1',
      },
    ],
  },
  testing: false,

  enableTesting: action((state) => {
    state.testing = true;
  }),

  setGame: action((state, payload) => {
    state.game = payload;
  }),

  addPlayer: action((state, player) => {
    state.game.players.push(player);
  }),

  removePlayer: action((state, player) => {
    const i = state.game.players.indexOf(player);
    state.game.players.splice(i, 1);
  }),

  updateTurn: action((state, turn) => {
    state.game.turn = turn;
  }),

  setTimer: action((state, time) => {
    state.game.timer = time;
  }),
};

export default gameStore;
