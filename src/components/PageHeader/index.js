import React from "react";
import { Title } from "../../styled/PageHeader";

const PageHeader = props => {
  return <Title>{props.title}</Title>;
};

export default PageHeader;
