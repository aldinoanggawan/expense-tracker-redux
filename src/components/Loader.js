import React from 'react'
import ContentLoader from 'react-content-loader'
import styled from 'styled-components'

const Loader = () => {
  const Div = styled.div`
    text-align: center;
    margin: 0 auto;
  `
  return (
    <Div>
      <ContentLoader
        speed={1}
        viewBox='0 0 250 150'
        backgroundColor='#f3f3f3'
        foregroundColor='#ecebeb'
      >
        <rect x='10' y='10' rx='2' ry='2' width='230' height='20' />
        <rect x='10' y='40' rx='2' ry='2' width='230' height='20' />
        <rect x='10' y='70' rx='2' ry='2' width='230' height='20' />
        <rect x='10' y='100' rx='2' ry='2' width='230' height='20' />
      </ContentLoader>
    </Div>
  )
}
export default Loader
