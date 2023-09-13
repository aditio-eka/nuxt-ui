/// <reference types="lodash" />
import type { WritableComputedRef, PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<boolean>;
        default: boolean;
    };
    appear: {
        type: BooleanConstructor;
        default: boolean;
    };
    side: {
        type: PropType<"right" | "left">;
        default: string;
        validator: (value: string) => boolean;
    };
    overlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    transition: {
        type: BooleanConstructor;
        default: boolean;
    };
    preventClose: {
        type: BooleanConstructor;
        default: boolean;
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
    isOpen: WritableComputedRef<boolean>;
    wrapperClass: import("vue").ComputedRef<string>;
    transitionClass: import("vue").ComputedRef<any>;
    close: (value: boolean) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "update:modelValue")[], "close" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<boolean>;
        default: boolean;
    };
    appear: {
        type: BooleanConstructor;
        default: boolean;
    };
    side: {
        type: PropType<"right" | "left">;
        default: string;
        validator: (value: string) => boolean;
    };
    overlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    transition: {
        type: BooleanConstructor;
        default: boolean;
    };
    preventClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    ui: {
        type: PropType<any>;
        default: () => {};
    };
}>> & {
    onClose?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    ui: any;
    modelValue: boolean;
    appear: boolean;
    overlay: boolean;
    transition: boolean;
    preventClose: boolean;
    side: "right" | "left";
}, {}>;
export default _default;
