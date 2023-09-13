import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    name: {
        type: StringConstructor;
        default: null;
    };
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    onIcon: {
        type: StringConstructor;
        default: () => any;
    };
    offIcon: {
        type: StringConstructor;
        default: () => any;
    };
    color: {
        type: StringConstructor;
        default: () => any;
        validator(value: string): any;
    };
    ui: {
        type: PropType<any>;
        default: () => {};
    };
}, {
    labelFor: any;
    attrs: import("vue").ComputedRef<Pick<{
        [x: string]: unknown;
    }, never>>;
    ui: import("vue").ComputedRef<any>;
    active: import("vue").WritableComputedRef<boolean>;
    switchClass: import("vue").ComputedRef<string>;
    onIconClass: import("vue").ComputedRef<string>;
    offIconClass: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    name: {
        type: StringConstructor;
        default: null;
    };
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    onIcon: {
        type: StringConstructor;
        default: () => any;
    };
    offIcon: {
        type: StringConstructor;
        default: () => any;
    };
    color: {
        type: StringConstructor;
        default: () => any;
        validator(value: string): any;
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
    modelValue: boolean;
    disabled: boolean;
    onIcon: string;
    offIcon: string;
}, {}>;
export default _default;
