import samsung from "../../data/samsung";


export default function handler(req, res) {
  res.status(200).json(samsung);

}
