const User = require("./models").user;
const Product = require("./models").product;
const Order = require("./models").order;
const OrderProducts = require("./models").orderProduct;

const getProductsForOrderId = async (id) => {
  try {
    const order = await Order.findByPk(id, {
      include: [product],
    });
    console.log(order.get({ plain: true }));
  } catch (e) {
    console.log(e);
  }
};

// getProductsForOrderId(1);

const productsForUser = async (id) => {
  try {
    const user = await User.findByPk(id, {
      include: [{ model: Order, include: [Product] }],
    });
    console.log(user.get({ plain: true }).orders[0].products);
  } catch (e) {
    console.log(e);
  }
};

// productsForUser(2);

////////////////////////////////////////////////
// POST /order

const createOrder = async (productIds, userId) => {
  // some productIds = [1, 2, 4, ..., ...]
  try {
    const newOrder = await Order.create({ userId });
    console.log("newOrder", newOrder.get({ plain: true }));
    const newOrderId = newOrder.id;

    const productAndOrder = productIds.map(p => ({
      orderId: newOrderId,
      productId: p,
    }));

    const bulkOrderProducts = await OrderProducts.bulkCreate(productAndOrder);

    console.log("order products", bulkOrderProducts);
  } catch (e) {
    console.log(e);
  }

  // userId => whos making the order
};

createOrder([2, 5, 3], 1);