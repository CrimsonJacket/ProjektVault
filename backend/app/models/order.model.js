module.exports = (sequelize, Sequelize) => {
  const Order = sequelize.define("order", {
    userId: {
      type: Sequelize.STRING
    },
    marketId: {
      type: Sequelize.STRING
    },
    price: {
      type: Sequelize.DECIMAL
    },
    quantity: {
      type: Sequelize.DECIMAL
    },
    transactionTs: {
      type: Sequelize.DATE
    },
    status: {
      type: Sequelize.STRING
    },
    closedTs: {
      type: Sequelize.DATE
    }
  });

  return Order;
};
