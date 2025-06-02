import {Component, ComponentProps} from 'solid-js';
import {customElement} from 'solid-element';
import "@response-elements/input-response";

export type SingleResponseItemProps = {
  children?: ComponentProps<"span">["children"];
  stem?: string;
}

export const SingleResponseItem: Component<SingleResponseItemProps> = (props) => {
  return (
    <div>
      <div>{props.stem}</div>
      <span><slot name="children">{props.children}</slot></span>
      <acer-input-response></acer-input-response>
    </div>
  );
};

customElement('acer-single-response-item', {stem: ''}, SingleResponseItem);
