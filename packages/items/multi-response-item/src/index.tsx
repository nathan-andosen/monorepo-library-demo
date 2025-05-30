import {Component, ComponentProps} from 'solid-js';
import {customElement} from 'solid-element';
// import {InputResponse} from '@response-components/input-response';
import "@response-components/input-response";

export type MultiResponseItemProps = {
  children?: ComponentProps<"span">["children"];
  stem?: string;
}

export const MultiResponseItem: Component<MultiResponseItemProps> = (props) => {
  return (
    <div>
      <div>{props.stem}</div>
      <span><slot name="children">{props.children}</slot></span>
      <acer-input-response label='Address:'></acer-input-response>
    </div>
  );
};

customElement('acer-multi-response-item', {stem: ''}, MultiResponseItem);
