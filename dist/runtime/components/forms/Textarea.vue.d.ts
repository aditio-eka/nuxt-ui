import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
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
    rows: {
        type: NumberConstructor;
        default: number;
    };
    autoresize: {
        type: BooleanConstructor;
        default: boolean;
    };
    autofocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    resize: {
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
    textareaClass: {
        type: StringConstructor;
        default: null;
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
    textarea: import("vue").Ref<HTMLTextAreaElement | null>;
    wrapperClass: import("vue").ComputedRef<string>;
    textareaClass: import("vue").ComputedRef<string>;
    onInput: (event: InputEvent) => void;
    onBlur: (event: FocusEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("blur" | "update:modelValue")[], "blur" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
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
    rows: {
        type: NumberConstructor;
        default: number;
    };
    autoresize: {
        type: BooleanConstructor;
        default: boolean;
    };
    autofocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    resize: {
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
    textareaClass: {
        type: StringConstructor;
        default: null;
    };
    ui: {
        type: PropType<any>;
        default: () => {};
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
}, {
    resize: boolean;
    color: string;
    ui: any;
    name: string;
    modelValue: string | number;
    rows: number;
    disabled: boolean;
    variant: string;
    required: boolean;
    size: string;
    placeholder: string;
    padded: boolean;
    autofocus: boolean;
    autoresize: boolean;
    textareaClass: string;
}, {}>;
export default _default;
