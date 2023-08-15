import styled from '@emotion/styled';
import { mediaSizes } from 'constants/media';

export const PushUpStyled = styled.div`

  @media screen and (min-width: ${mediaSizes.tablet}) {
  }
`;

export const FormFields = styled.div`
  margin-bottom: 18px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    max-width: 100%;
  }
`;
export const ButtonContainer = styled.div`

  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

`;
