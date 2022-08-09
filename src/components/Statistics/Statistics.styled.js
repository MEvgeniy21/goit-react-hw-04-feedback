import styled from '@emotion/styled';

export const TextStat = styled.p`
  display: flex;
  margin-bottom: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.xm};
`;

export const ValueStat = styled.span`
  margin-left: ${p => p.theme.space[3]}px;
`;
