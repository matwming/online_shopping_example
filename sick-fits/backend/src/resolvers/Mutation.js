const Mutations = {
 //  createDog(parent, args, ctx, info) {
 //   console.log(args);
 //  }
 async createItem(parent, args, ctx, info) {
  const item = await ctx.db.mutation.createItem(
   {
    data: {
     ...args
    }
   },
   info
  );
  console.log(item);
  return item;
 }
};

module.exports = Mutations;
