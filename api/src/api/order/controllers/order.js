// 'use strict';

// /**
//  * order router
//  */

// const { createCoreRouter } = require('@strapi/strapi').factories;

// module.exports = createCoreRouter('api::order.order');

("use strict");
// @ts-ignore
const stripe = require("stripe")(process.env.STRIPE_KEY);
/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const { email,products } = ctx.request.body;
    try {
      const lineItems = await Promise.all(
       
        products.map(async (product) => {
          const item = await strapi
            .service("api::product.product")
            .findOne(product.id);
            
          return {
            
            price_data: {
              currency: "inr",
              product_data: {
                name:item.Title,
                
              },
              unit_amount: Math.round(item.Price * 100),
            },
            quantity:1,
           images:item.url,
          };
        })
      );
      

      const session = await stripe.checkout.sessions.create({
        shipping_address_collection: {allowed_countries: ['IN']},
        payment_method_types: ["card"],
        mode: "payment",
        success_url: process.env.CLIENT_URL+"?success=true",
        cancel_url: process.env.CLIENT_URL+"?success=false",
        line_items: lineItems,
      });
      
      await strapi
      .service("api::order.order")
      .create({ data: { email, products, stripeid: session.id } });
      
      return { stripeSession: session };
    }catch (error) {
      ctx.response.status = 500;
      return error;
    }
  },
}));