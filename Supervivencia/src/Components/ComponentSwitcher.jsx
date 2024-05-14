import React from 'react';

export default function SwitchComponents({ active, children }) {
  // Switch all children and return the "active" one

  return (React.Children.toArray(children).filter(child => child.props.name == active))
}