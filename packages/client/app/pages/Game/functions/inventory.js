export const toggleInventory = (setOpenInventory, openInventory) => {
  setOpenInventory(!openInventory);
};

export const updateInventory = (
  socket, id, setInventory, updatedInventory, selectWeapon, selectedWeapon, messages, setMessages,
) => {
  if (socket.id === id) {
    setInventory(updatedInventory);

    // If inventory is empty
    if (
      updatedInventory.length < 1
      && Object.getOwnPropertyNames(selectedWeapon).length !== 0
    ) {
      const message = {
        message: `Your ${selectedWeapon.name} 
            ran out of ammo and you got nothing to equip, find some boxes`,
        type: 'pickup',
      };
      selectWeapon({});
      setMessages([message, ...messages]);
    } else {
      let isStillInInventory = false;

      // Check if used weapon still is in inventory
      updatedInventory.forEach((item) => {
        if (item.key === selectedWeapon.key) {
          isStillInInventory = true;
          selectWeapon(item);
        }
      });

      // Equip next weapon if the used weapon ran out of ammo
      if (!isStillInInventory) {
        const message = {
          message: `Your ${selectedWeapon.name} ran out of ammo, equipped ${
            updatedInventory[0].name
          }`,
          type: 'pickup',
        };
        selectWeapon(updatedInventory[0]);
        setMessages([message, ...messages]);
      }
    }
  }
};
