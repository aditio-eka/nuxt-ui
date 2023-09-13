/// <reference types="lodash" />
import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    name: {
        type: StringConstructor;
        default: null;
    };
    size: {
        type: StringConstructor;
        default: null;
        validator(value: string): boolean;
    };
    label: {
        type: StringConstructor;
        default: null;
    };
    description: {
        type: StringConstructor;
        default: null;
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    help: {
        type: StringConstructor;
        default: null;
    };
    error: {
        type: (BooleanConstructor | StringConstructor)[];
        default: null;
    };
    hint: {
        type: StringConstructor;
        default: null;
    };
    ui: {
        type: PropType<any>;
        default: () => {};
    };
}, {
    labelFor: string;
    attrs: import("vue").ComputedRef<import("lodash").Omit<{
        [x: string]: unknown;
    }, "class">>;
    ui: import("vue").ComputedRef<any>;
    wrapperClass: import("vue").ComputedRef<string>;
    size: import("vue").ComputedRef<any>;
    error: import("vue").ComputedRef<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    name: {
        type: StringConstructor;
        default: null;
    };
    size: {
        type: StringConstructor;
        default: null;
        validator(value: string): boolean;
    };
    label: {
        type: StringConstructor;
        default: null;
    };
    description: {
        type: StringConstructor;
        default: null;
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    help: {
        type: StringConstructor;
        default: null;
    };
    error: {
        type: (BooleanConstructor | StringConstructor)[];
        default: null;
    };
    hint: {
        type: StringConstructor;
        default: null;
    };
    ui: {
        type: PropType<any>;
        default: () => {};
    };
}>>, {
    error: string | boolean;
    description: string;
    ui: any;
    name: string;
    label: string;
    required: boolean;
    size: string;
    help: string;
    hint: string;
}, {}>;
export default _default;
