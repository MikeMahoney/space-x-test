import React, { type ReactNode, useState } from 'react'
import './CollapsibleStyles.scss'

interface ICollapsible {
  children: ReactNode
  title: string
  active?: boolean
}

const Collapsible: React.FC<ICollapsible> = ({ children, title, active = false }) => {
  const [open, setOpen] = useState<boolean>(active)

  return (
    <div className='collapsible'>
      <div
        className='collapsible__header'
        onClick={() => {
          setOpen(!open)
        }}
      >
        {title}
        {open ? (
          <div className='collapsible__caret'>&#9650;</div>
        ) : (
          <div className='collapsible__caret'>&#9660;</div>
        )}
      </div>
      {open && <div className='collapsible__content'>{children}</div>}
    </div>
  )
}

export default Collapsible
