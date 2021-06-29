import { FC } from "react";

interface IProps {
  offer: { [key: string]: any };
}

const OrganismSectionOffer: FC<IProps> = ({ offer }) => {
  return <pre>{JSON.stringify(offer, null, 2)}</pre>;
};

export default OrganismSectionOffer;
