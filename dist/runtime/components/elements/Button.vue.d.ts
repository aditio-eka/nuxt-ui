/// <reference types="lodash" />
import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    type: {
        type: StringConstructor;
        default: string;
    };
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
    label: {
        type: StringConstructor;
        default: null;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    padded: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: StringConstructor;
        default: () => any;
        validator(value: string): boolean;
    };
    color: {
        type: StringConstructor;
        default: () => any;
        validator(value: string): boolean;
    };
    variant: {
        type: StringConstructor;
        default: () => any;
        validator(value: string): boolean;
    };
    icon: {
        type: StringConstructor;
        default: null;
    };
    loadingIcon: {
        type: StringConstructor;
        default: () => any;
    };
    leadingIcon: {
        type: StringConstructor;
        default: null;
    };
    trailingIcon: {
        type: StringConstructor;
        default: null;
    };
    trailing: {
        type: BooleanConstructor;
        default: boolean;
    };
    leading: {
        type: BooleanConstructor;
        default: boolean;
    };
    square: {
        type: BooleanConstructor;
        default: boolean;
    };
    truncate: {
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
    isLeading: import("vue").ComputedRef<string | true>;
    isTrailing: import("vue").ComputedRef<string | true>;
    isSquare: import("vue").ComputedRef<boolean>;
    buttonClass: import("vue").ComputedRef<string>;
    leadingIconName: import("vue").ComputedRef<string | undefined>;
    trailingIconName: import("vue").ComputedRef<string | undefined>;
    leadingIconClass: import("vue").ComputedRef<string>;
    trailingIconClass: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        default: string;
    };
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
    label: {
        type: StringConstructor;
        default: null;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    padded: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: StringConstructor;
        default: () => any;
        validator(value: string): boolean;
    };
    color: {
        type: StringConstructor;
        default: () => any;
        validator(value: string): boolean;
    };
    variant: {
        type: StringConstructor;
        default: () => any;
        validator(value: string): boolean;
    };
    icon: {
        type: StringConstructor;
        default: null;
    };
    loadingIcon: {
        type: StringConstructor;
        default: () => any;
    };
    leadingIcon: {
        type: StringConstructor;
        default: null;
    };
    trailingIcon: {
        type: StringConstructor;
        default: null;
    };
    trailing: {
        type: BooleanConstructor;
        default: boolean;
    };
    leading: {
        type: BooleanConstructor;
        default: boolean;
    };
    square: {
        type: BooleanConstructor;
        default: boolean;
    };
    truncate: {
        type: BooleanConstructor;
        default: boolean;
    };
    ui: {
        type: PropType<any>;
        default: () => {};
    };
}>>, {
    icon: string;
    color: string;
    ui: any;
    label: string;
    type: string;
    loading: boolean;
    disabled: boolean;
    variant: string;
    size: string;
    block: boolean;
    padded: boolean;
    loadingIcon: string;
    leadingIcon: string;
    trailingIcon: string;
    trailing: boolean;
    leading: boolean;
    square: boolean;
    truncate: boolean;
}, {}>;
export default _default;
