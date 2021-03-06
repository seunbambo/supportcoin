import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const REACT_APP_ADDRESS = process.env.REACT_APP_ADDRESS;
const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  REACT_APP_ADDRESS
);

export default instance;
