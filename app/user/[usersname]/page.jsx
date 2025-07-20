"use clinet "

import { use } from "react";

const Dynamic = (props) => {
  const malik = use(props.params);
  console.log(malik);
  return <h1>malikkonam={malik.usersname}</h1>;
};
export default Dynamic;
//for only clinet component  by using use api made by React 