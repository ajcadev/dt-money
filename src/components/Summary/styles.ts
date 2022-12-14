import styled, { css } from 'styled-components'

export const SummaryContainer = styled.section`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 24px;
  margin-top: -64px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`

interface SummaryCardProps {
  variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background-color: ${(props) => props.theme['gray-600']};
  border-radius: 6px;
  padding: 24px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${(props) => props.theme['gray-300']};
  }

  strong {
    display: block;
    margin-top: 16px;
    font-size: 2rem;
  }

  ${(props) =>
    props.variant === 'green' &&
    css`
      background-color: ${(props) => props.theme['green-700']};
    `}
`
