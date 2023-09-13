import type { PropType } from 'vue';
import type { PopperOptions } from '../../types/popper';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (ObjectConstructor | ArrayConstructor | StringConstructor | NumberConstructor)[];
        default: string;
    };
    by: {
        type: StringConstructor;
        default: undefined;
    };
    options: {
        type: PropType<string[] | {
            [key: string]: any;
            disabled?: boolean | undefined;
        }[]>;
        default: () => never[];
    };
    name: {
        type: StringConstructor;
        default: null;
    };
    required: {
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
    selectedIcon: {
        type: StringConstructor;
        default: () => any;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    searchable: {
        type: PropType<boolean | ((query: string) => Promise<any[]> | any[])>;
        default: boolean;
    };
    searchablePlaceholder: {
        type: StringConstructor;
        default: string;
    };
    debounce: {
        type: NumberConstructor;
        default: number;
    };
    creatable: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: {
        type: StringConstructor;
        default: null;
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
    optionAttribute: {
        type: StringConstructor;
        default: string;
    };
    valueAttribute: {
        type: StringConstructor;
        default: null;
    };
    searchAttributes: {
        type: ArrayConstructor;
        default: null;
    };
    popper: {
        type: PropType<PopperOptions>;
        default: () => {};
    };
    selectClass: {
        type: StringConstructor;
        default: null;
    };
    ui: {
        type: PropType<any>;
        default: () => {};
    };
    uiMenu: {
        type: PropType<any>;
        default: () => {};
    };
}, {
    labelFor: any;
    attrs: import("vue").ComputedRef<Pick<{
        [x: string]: unknown;
    }, never>>;
    uiMenu: import("vue").ComputedRef<any>;
    trigger: import("vue").Ref<import("@vueuse/core").MaybeElement>;
    container: import("vue").Ref<import("@vueuse/core").MaybeElement>;
    isLeading: import("vue").ComputedRef<string | true>;
    isTrailing: import("vue").ComputedRef<string | true | undefined>;
    wrapperClass: import("vue").ComputedRef<string>;
    selectClass: import("vue").ComputedRef<string>;
    leadingIconName: import("vue").ComputedRef<string | undefined>;
    leadingIconClass: import("vue").ComputedRef<string>;
    leadingWrapperIconClass: import("vue").ComputedRef<string>;
    trailingIconName: import("vue").ComputedRef<string | undefined>;
    trailingIconClass: import("vue").ComputedRef<string>;
    trailingWrapperIconClass: import("vue").ComputedRef<string>;
    filteredOptions: import("vue").Ref<any[]>;
    queryOption: import("vue").ComputedRef<{
        [x: string]: string;
    } | null>;
    query: import("vue").Ref<string>;
    onUpdate: (event: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "close" | "open" | "update:modelValue")[], "change" | "close" | "open" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (ObjectConstructor | ArrayConstructor | StringConstructor | NumberConstructor)[];
        default: string;
    };
    by: {
        type: StringConstructor;
        default: undefined;
    };
    options: {
        type: PropType<string[] | {
            [key: string]: any;
            disabled?: boolean | undefined;
        }[]>;
        default: () => never[];
    };
    name: {
        type: StringConstructor;
        default: null;
    };
    required: {
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
    selectedIcon: {
        type: StringConstructor;
        default: () => any;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    searchable: {
        type: PropType<boolean | ((query: string) => Promise<any[]> | any[])>;
        default: boolean;
    };
    searchablePlaceholder: {
        type: StringConstructor;
        default: string;
    };
    debounce: {
        type: NumberConstructor;
        default: number;
    };
    creatable: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: {
        type: StringConstructor;
        default: null;
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
    optionAttribute: {
        type: StringConstructor;
        default: string;
    };
    valueAttribute: {
        type: StringConstructor;
        default: null;
    };
    searchAttributes: {
        type: ArrayConstructor;
        default: null;
    };
    popper: {
        type: PropType<PopperOptions>;
        default: () => {};
    };
    selectClass: {
        type: StringConstructor;
        default: null;
    };
    ui: {
        type: PropType<any>;
        default: () => {};
    };
    uiMenu: {
        type: PropType<any>;
        default: () => {};
    };
}>> & {
    onClose?: ((...args: any[]) => any) | undefined;
    onOpen?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    icon: string;
    color: string;
    ui: any;
    name: string;
    options: string[] | {
        [key: string]: any;
        disabled?: boolean | undefined;
    }[];
    popper: PopperOptions;
    modelValue: string | number | unknown[] | Record<string, any>;
    by: string;
    loading: boolean;
    disabled: boolean;
    multiple: boolean;
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
    selectedIcon: string;
    searchable: boolean | ((query: string) => Promise<any[]> | any[]);
    searchablePlaceholder: string;
    debounce: number;
    creatable: boolean;
    searchAttributes: unknown[];
    uiMenu: any;
}, {}>;
export default _default;
