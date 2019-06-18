export const startMove = (dir, speed, socket) => {
  socket.emit('player start move', dir, speed);
};

export const stopMove = (socket) => {
  socket.emit('player stop move');
};

export const jump = (socket) => {
  socket.emit('player jump');
};

export const startShoot = (inventory, socket, messages, setMessages) => {
  if (inventory.length > 0) {
    socket.emit('player start shoot');
  } else {
    const message = {
      message: "You don't have weapons, search for a box!",
      type: 'pickup',
    };
    setMessages([message, ...messages]);
  }
};

export const releaseShoot = (socket, selectedWeapon) => {
  socket.emit('player release shoot', selectedWeapon);
};
