import {Component, ComponentProps} from 'solid-js';

export type InputResponseProps = {
  children?: ComponentProps<"span">["children"];
}

export const InputResponse: Component<InputResponseProps> = (props) => {
  return (
    <div>
      <span>{props.children}</span>
      <input />
    </div>
  );
};
