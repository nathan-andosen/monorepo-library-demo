import {Component, ComponentProps} from 'solid-js';
import {customElement, hot} from 'solid-element';
// import "./input-response.component.scss";
import styles from "./input-response.component.scss?inline";
// import { register, compose, createMixin } from 'component-register';
// import { withSolid } from 'solid-element';



export type InputResponseProps = {
  children?: ComponentProps<"span">["children"];
  label?: string;
}



export const InputResponse: Component<InputResponseProps> = (props) => {
  return (
    <>
      <style>{styles}</style>
      <div class="input-response">
        <span><slot name="children">{props.children}</slot></span>
        <span>Input Response</span>
        <span>Label: {props.label}</span>
        <input class="input-response__input" />
      </div>
    </>
  );
};

customElement('acer-input-response', {label: ''}, InputResponse);
// hot(module, 'acer-input-response');

// function withCss(cssStyle: string) {
//   return createMixin((options) => {
//     const { element } = options;
//     const styleEl = document.createElement("style");
//     styleEl.textContent = `${cssStyle}`;
//     element.renderRoot.appendChild(styleEl);
//     return options;
//   });
// }

// compose(
//   register('acer-input-response', {label: ''} as InputResponseProps),
//   withSolid,
//   withCss(styles)
// )(InputResponse);

// register('acer-input-response', {lable: ''})(withSolid(InputResponse));

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      'acer-input-response': InputResponseProps;
    }
  }
}
