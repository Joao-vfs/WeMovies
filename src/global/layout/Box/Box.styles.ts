import styled from "styled-components";

import { IStyledProps } from "@/interfaces/IStyles.interface";

export const Container = styled.div<IStyledProps>`
  ${(props) => Object.entries(props).map(([key, value]) => `${key}: ${value};`)}
`;
