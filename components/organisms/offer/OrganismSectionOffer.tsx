import { FC } from "react";

interface IProps {
  offer: { [key: string]: any }[];
}

const OrganismSectionOffer: FC<IProps> = ({ offer }) => {
  console.log(offer);
  return <div>{offer[0].fields.title}</div>;
};

export default OrganismSectionOffer;
