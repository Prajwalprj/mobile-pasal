const Nesteddynamic = async (props) => {
  const malik = await props.params;
  console.log(malik);
  return (
    <h1>
      malikkonam={malik.usersname} , malikkoid={malik.postId}
    </h1>
  );
};
export default Nesteddynamic;


//here we are using server component useing async and await keywords of javascript