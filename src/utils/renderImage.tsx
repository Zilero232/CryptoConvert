import { ReactSVG } from "react-svg";

export const renderImage = (className: string, path: string) => {
  return path.includes(".svg") ? (
    <ReactSVG className={className} src={require(`../assets/images/${path}`)} />
  ) : (
    <img className={`main-reserves-list__box-img ${className}`} src={require(`../assets/images/${path}`)} alt="active-arrow" />
  );
};
