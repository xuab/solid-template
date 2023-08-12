import type { Component, JSXElement } from 'solid-js';

export const Layout: Component<{ children: JSXElement}> = (props) => {
  return <main>{props.children}</main>
}