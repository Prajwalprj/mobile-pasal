import iphone from "../../data/iphone";


export default function handler(req, res) {
  res.status(200).json(iphone);

}
