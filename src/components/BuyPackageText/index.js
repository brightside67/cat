import React from "react";
import { ActionTextBlock } from "../../styled/BuyPackageText";

const BuyPackageText = props => {
  const {
    dish,
    isAvailable,
    changeStateOnClick,
    index,
    missSelect,
    catchPhrase
  } = props;

  if (missSelect) {
    return (
      <div>
        <ActionTextBlock isAvailable={isAvailable}>
          {catchPhrase}
        </ActionTextBlock>
      </div>
    );
  }
  return (
    <div>
      {isAvailable ? (
        <ActionTextBlock isAvailable={isAvailable}>
          Чего сидишь? Порадуй котэ,{" "}
          <button
            onClick={() => {
              changeStateOnClick(index);
            }}
          >
            купи.
          </button>
        </ActionTextBlock>
      ) : (
        <ActionTextBlock isAvailable={isAvailable}>
          Печалька, {dish} закончился.
        </ActionTextBlock>
      )}
    </div>
  );
};

export default BuyPackageText;
