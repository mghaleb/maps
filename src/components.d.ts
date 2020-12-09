/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface IMap {
        "className": string;
        "defaultPopup": string;
        "iconHeight": number;
        "iconUrl": string;
        "iconWidth": number;
        "latitude": number;
        "longitude": number;
        "mapId": string;
        "scale": number;
        "showDefaultMarker": boolean;
        "showScale": boolean;
        "tileLayer": string;
        "userIconHeight": number;
        "userIconUrl": string;
        "userIconWidth": number;
        "userLatitude": number;
        "userLongitude": number;
    }
}
declare global {
    interface HTMLIMapElement extends Components.IMap, HTMLStencilElement {
    }
    var HTMLIMapElement: {
        prototype: HTMLIMapElement;
        new (): HTMLIMapElement;
    };
    interface HTMLElementTagNameMap {
        "i-map": HTMLIMapElement;
    }
}
declare namespace LocalJSX {
    interface IMap {
        "className"?: string;
        "defaultPopup"?: string;
        "iconHeight"?: number;
        "iconUrl"?: string;
        "iconWidth"?: number;
        "latitude"?: number;
        "longitude"?: number;
        "mapId"?: string;
        "scale"?: number;
        "showDefaultMarker"?: boolean;
        "showScale"?: boolean;
        "tileLayer"?: string;
        "userIconHeight"?: number;
        "userIconUrl"?: string;
        "userIconWidth"?: number;
        "userLatitude"?: number;
        "userLongitude"?: number;
    }
    interface IntrinsicElements {
        "i-map": IMap;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "i-map": LocalJSX.IMap & JSXBase.HTMLAttributes<HTMLIMapElement>;
        }
    }
}
