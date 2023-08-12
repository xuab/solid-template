import type { Component, JSXElement } from 'solid-js';

export const Title: Component<{ children: JSXElement}> = (props) => {
  return <h1>{props.children}</h1>
}