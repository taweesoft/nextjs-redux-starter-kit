import styled from 'styled-components'

const Card = styled.div`
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  background-color: ${props => props.color};
`

export default (props) => (
  <Card {...props}>
    {props.children}
  </Card>
)