import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <span className="loader-text">FACILITIES......</span>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  background-color: #f8f9fa;

  .loader {
    position: relative;
    overflow: hidden;
    border-right: 3px solid;
    width: 0px;
    animation: typewriter 2s steps(10) infinite alternate, blink 0.5s steps(10) infinite;
  }

  .loader-text {
    font-size: 40px;
    font-weight: 700;
    background: linear-gradient(to right, #159957, #155799);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @keyframes typewriter {
    0% {
      width: 0px;
    }
    100% {
      width: 500px;
    }
  }

  @keyframes blink {
    0% {
      border-right-color: rgba(255, 255, 255, 0.75);
    }
    100% {
      border-right-color: transparent;
    }
  }
`;

export default Loader;
