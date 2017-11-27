import './style.scss'
import logo from '../../assets/mimic-logo.svg';
import hsLogo from '../../assets/mimic-logo-hs.svg';

import {DONALDSON_PRODUCT_CODES} from '../../api/constants'

import React from 'react'

export default function ({productCode}){
  return (
    <img src={productCode === DONALDSON_PRODUCT_CODES.highSchool ? hsLogo : logo}
      className="mimic-logo" alt="logo" />
  )
}
