const Products = async ({searchParams}) => {
  const searchparam = await searchParams;
  const category=searchparam?.category ||"all";
  const page= searchparam?.page;
  const sort= searchparam?.sort;
//   console.log(searchparam);
  return(
  <div>
    <h1>
        category by {category}and sort by {sort} in page number {page};

    

    </h1>
  </div>
  );
};
export default Products;
