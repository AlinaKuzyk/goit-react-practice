import styled from '@emotion/styled'
import { Paper } from 'components'

export const Container = styled(Paper)`
 display: flex;
   flex-direction: column;
   align-items: center;
   width: 144px;
   padding: 32px;
   &:hover {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  }
`

export const UniIcon = styled.img`
  width: 80px;
   height:80px;
`