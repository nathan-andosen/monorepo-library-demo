import {Component, ComponentProps} from 'solid-js';
import {customElement} from 'solid-element';

export type InputResponseProps = {
  children?: ComponentProps<"span">["children"];
  one?: string;
}

export const InputResponse: Component<InputResponseProps> = (props) => {
  return (
    <div>
      <span><slot name="children">{props.children}</slot></span>
      <div>{props.one}</div>

      <input />
    </div>
  );
};

customElement('acer-input-response', {one: 'test'}, InputResponse);
