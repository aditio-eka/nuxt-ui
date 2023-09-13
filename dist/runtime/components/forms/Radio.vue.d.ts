/// <reference types="lodash" />
import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    value: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: null;
    };
    modelValue: {
        type: (ObjectConstructor | BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: null;
    };
    name: {
        type: StringConstructor;
        default: null;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    help: {
        type: StringConstructor;
        default: null;
    };
    label: {
        type: StringConstructor;
        default: null;
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: {
        type: StringConstructor;
        default: () => any;
        validator(value: string): any;
    };
    inputClass: {
        type: StringConstructor;
        default: null;
    };
    ui: {
        type: PropType<any>;
        default: () => {};
    };
}, {
    attrs: import("vue").ComputedRef<import("lodash").Omit<{
        [x: string]: unknown;
    }, "class">>;
    ui: import("vue").ComputedRef<any>;
    pick: import("vue").WritableComputedRef<string | number | boolean | Record<string, any>>;
    wrapperClass: import("vue").ComputedRef<string>;
    inputClass: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    value: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: null;
    };
    modelValue: {
        type: (ObjectConstructor | BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: null;
    };
    name: {
        type: StringConstructor;
        default: null;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    help: {
        type: StringConstructor;
        default: null;
    };
    label: {
        type: StringConstructor;
        default: null;
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: {
        type: StringConstructor;
        default: () => any;
        validator(value: string): any;
    };
    inputClass: {
        type: StringConstructor;
        default: null;
    };
    ui: {
        type: PropType<any>;
        default: () => {};
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    color: string;
    ui: any;
    name: string;
    value: string | number | boolean;
    label: string;
    modelValue: string | number | boolean | Record<string, any>;
    disabled: boolean;
    required: boolean;
    help: string;
    inputClass: string;
}, {}>;
export default _default;
