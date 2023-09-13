import type { PropType, ComputedRef } from 'vue';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (ObjectConstructor | StringConstructor | NumberConstructor)[];
        default: string;
    };
    name: {
        type: StringConstructor;
        default: null;
    };
    placeholder: {
        type: StringConstructor;
        default: null;
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
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
        default: () => any;
    };
    trailing: {
        type: BooleanConstructor;
        default: boolean;
    };
    leading: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    padded: {
        type: BooleanConstructor;
        default: boolean;
    };
    options: {
        type: ArrayConstructor;
        default: () => never[];
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
    optionAttribute: {
        type: StringConstructor;
        default: string;
    };
    valueAttribute: {
        type: StringConstructor;
        default: string;
    };
    selectClass: {
        type: StringConstructor;
        default: null;
    };
    ui: {
        type: PropType<any>;
        default: () => {};
    };
}, {
    attrs: ComputedRef<Pick<{
        [x: string]: unknown;
    }, never>>;
    ui: ComputedRef<any>;
    labelFor: any;
    normalizedOptionsWithPlaceholder: ComputedRef<{
        disabled?: boolean | undefined;
        children: {
            disabled?: boolean;
        }[];
    }[]>;
    normalizedValue: ComputedRef<any>;
    isLeading: ComputedRef<string | true>;
    isTrailing: ComputedRef<string | true | undefined>;
    wrapperClass: ComputedRef<string>;
    selectClass: ComputedRef<string>;
    leadingIconName: ComputedRef<string | undefined>;
    leadingIconClass: ComputedRef<string>;
    leadingWrapperIconClass: ComputedRef<string>;
    trailingIconName: ComputedRef<string | undefined>;
    trailingIconClass: ComputedRef<string>;
    trailingWrapperIconClass: ComputedRef<string>;
    onInput: (event: InputEvent) => void;
    onChange: (event: Event) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (ObjectConstructor | StringConstructor | NumberConstructor)[];
        default: string;
    };
    name: {
        type: StringConstructor;
        default: null;
    };
    placeholder: {
        type: StringConstructor;
        default: null;
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
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
        default: () => any;
    };
    trailing: {
        type: BooleanConstructor;
        default: boolean;
    };
    leading: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    padded: {
        type: BooleanConstructor;
        default: boolean;
    };
    options: {
        type: ArrayConstructor;
        default: () => never[];
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
    optionAttribute: {
        type: StringConstructor;
        default: string;
    };
    valueAttribute: {
        type: StringConstructor;
        default: string;
    };
    selectClass: {
        type: StringConstructor;
        default: null;
    };
    ui: {
        type: PropType<any>;
        default: () => {};
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    icon: string;
    color: string;
    ui: any;
    name: string;
    options: unknown[];
    modelValue: string | number | Record<string, any>;
    loading: boolean;
    disabled: boolean;
    variant: string;
    required: boolean;
    size: string;
    placeholder: string;
    padded: boolean;
    loadingIcon: string;
    leadingIcon: string;
    trailingIcon: string;
    trailing: boolean;
    leading: boolean;
    optionAttribute: string;
    valueAttribute: string;
    selectClass: string;
}, {}>;
export default _default;
