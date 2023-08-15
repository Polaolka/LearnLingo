import {
  LoaderContainer,
  LoaderStyled,
} from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderStyled>
      <LoaderContainer>
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </LoaderContainer>
    </LoaderStyled>
  );
};


