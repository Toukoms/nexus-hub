"use client"

import React from 'react'
import { ToastContainer } from 'react-toastify'

type Props = {}

const ToastContext = (props: Props) => {
  return (
    <ToastContainer autoClose={1200} />
  )
}

export default ToastContext