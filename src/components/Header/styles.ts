import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme['gray-900']};
  padding: 40px 0 120px;
`
export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 24px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NewTransactionButton = styled.button`
  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
  padding: 12px 20px;
  border: 0;
  font-weight: bold;
  cursor: pointer;
  border-radius: 6px;

  &:hover {
    background-color: ${(props) => props.theme['green-300']};
    transition: background-color 2s;
  }
`
