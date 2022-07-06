import React from 'react'
import styled from 'styled-components'

import { DataTable } from '../../components/DataTable/DataTable'
import { Layout } from '../../components/Layout/Layout'
import { TransactionRows } from '../../data/ChartsData'

export const Orders : React.FC = () => {
  return (
    <Layout>
        <Container>
            <DataTable rows={TransactionRows} />
        </Container>
    </Layout>
  )
}

const Container = styled.div`
  padding: 1em;
  height: 100%;
`
