import React from "react";
import { SpinnerOverlay, SpinnerContainer }  from './spinner.style';

const Spinner = () => {
    return (
      <SpinnerOverlay data-testid="spinner">
          <SpinnerContainer></SpinnerContainer>
      </SpinnerOverlay>
    );
}

export default Spinner;