/// <reference types="lodash" />
import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    src: {
        type: (BooleanConstructor | StringConstructor)[];
        default: null;
    };
    alt: {
        type: StringConstructor;
        default: null;
    };
    text: {
        type: StringConstructor;
        default: null;
    };
    icon: {
        type: StringConstructor;
        default: () => any;
    };
    size: {
        type: StringConstructor;
        default: () => any;
        validator(value: string): boolean;
    };
    chipColor: {
        type: StringConstructor;
        default: () => any;
        validator(value: string): boolean;
    };
    chipPosition: {
        type: StringConstructor;
        default: () => any;
        validator(value: string): boolean;
    };
    chipText: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    imgClass: {
        type: StringConstructor;
        default: string;
    };
    ui: {
        type: PropType<any>;
        default: () => {};
    };
}, {
    attrs: import("vue").ComputedRef<import("lodash").Omit<{
        [x: string]: unknown;
    }, "class">>;
    wrapperClass: import("vue").ComputedRef<string>;
    imgClass: import("vue").ComputedRef<string>;
    iconClass: import("vue").ComputedRef<string>;
    chipClass: import("vue").ComputedRef<string>;
    url: import("vue").ComputedRef<string | null>;
    placeholder: import("vue").ComputedRef<string>;
    error: import("vue").Ref<boolean>;
    onError: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    src: {
        type: (BooleanConstructor | StringConstructor)[];
        default: null;
    };
    alt: {
        type: StringConstructor;
        default: null;
    };
    text: {
        type: StringConstructor;
        default: null;
    };
    icon: {
        type: StringConstructor;
        default: () => any;
    };
    size: {
        type: StringConstructor;
        default: () => any;
        validator(value: string): boolean;
    };
    chipColor: {
        type: StringConstructor;
        default: () => any;
        validator(value: string): boolean;
    };
    chipPosition: {
        type: StringConstructor;
        default: () => any;
        validator(value: string): boolean;
    };
    chipText: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    imgClass: {
        type: StringConstructor;
        default: string;
    };
    ui: {
        type: PropType<any>;
        default: () => {};
    };
}>>, {
    alt: string;
    icon: string;
    ui: any;
    src: string | boolean;
    text: string;
    size: string;
    chipColor: string;
    chipPosition: string;
    chipText: string | number;
    imgClass: string;
}, {}>;
export default _default;
