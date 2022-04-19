import React from 'react'

import {Loading,ContLoading,NameType} from '../../styles/spin';

function spin2() {
  return (
    <div > 
          <ContLoading>
        <NameType>Espera a tu Pokemon</NameType> 
          <Loading />
        </ContLoading>
    </div>
  )
}

export default spin2