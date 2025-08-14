'use client'

import React from 'react'

export default function DOMCleanup() {
  React.useEffect(() => {
    const parent = document.querySelector('.fixed-0')
    if (parent && parent.childNodes.length > 1) {
      parent.childNodes[1].nodeValue = '' // remove the "0" text node
    }
  }, [])

  return null
}
