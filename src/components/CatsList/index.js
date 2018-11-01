import React, { Component } from "react";
import CatCard from "../CatCard";
import { CatsListContainer } from "../../styled/CatsList";

export default class CatsList extends Component {
  get renderCatListFromProps() {
    return this.props.catData.map((item, index) => {
      return (
        <CatCard
          data={item}
          index={index}
          key={index + "v"}
          changeStateOnClick={this.props.changeStateOnClick}
          changeStateOnHover={this.props.changeStateOnHover}
        />
      );
    });
  }
  render() {
    return <CatsListContainer>{this.renderCatListFromProps}</CatsListContainer>;
  }
}
