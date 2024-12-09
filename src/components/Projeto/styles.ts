import styled from 'styled-components'

export const Card = styled.div`
  padding: 16px;
  border: solid 1px ${(props) => props.theme.corDaBorda};
`

export const LinkBotao = styled.a`
  color: ${(props) => props.theme.corDeFundo};
  font-size: 14px;
  background-color: ${(props) => props.theme.corDeFundoBotao};
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  margin-top: 24px;
`
