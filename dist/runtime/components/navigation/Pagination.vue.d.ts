/// <reference types="lodash" />
import type { PropType } from 'vue';
import type { Button } from '../../types/button';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: NumberConstructor;
        required: true;
    };
    pageCount: {
        type: NumberConstructor;
        default: number;
    };
    total: {
        type: NumberConstructor;
        required: true;
    };
    max: {
        type: NumberConstructor;
        default: number;
        validate(value: any): boolean;
    };
    size: {
        type: StringConstructor;
        default: () => any;
        validator(value: string): boolean;
    };
    activeButton: {
        type: PropType<Button>;
        default: () => any;
    };
    inactiveButton: {
        type: PropType<Button>;
        default: () => any;
    };
    prevButton: {
        type: PropType<Button>;
        default: () => any;
    };
    nextButton: {
        type: PropType<Button>;
        default: () => any;
    };
    divider: {
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
    ui: import("vue").ComputedRef<any>;
    currentPage: import("vue").WritableComputedRef<number>;
    pages: import("vue").ComputedRef<number[]>;
    displayedPages: import("vue").ComputedRef<(string | number)[]>;
    canGoPrev: import("vue").ComputedRef<boolean>;
    canGoNext: import("vue").ComputedRef<boolean>;
    wrapperClass: import("vue").ComputedRef<string>;
    onClickPrev: () => void;
    onClickNext: () => void;
    onClickPage: (page: number | string) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: NumberConstructor;
        required: true;
    };
    pageCount: {
        type: NumberConstructor;
        default: number;
    };
    total: {
        type: NumberConstructor;
        required: true;
    };
    max: {
        type: NumberConstructor;
        default: number;
        validate(value: any): boolean;
    };
    size: {
        type: StringConstructor;
        default: () => any;
        validator(value: string): boolean;
    };
    activeButton: {
        type: PropType<Button>;
        default: () => any;
    };
    inactiveButton: {
        type: PropType<Button>;
        default: () => any;
    };
    prevButton: {
        type: PropType<Button>;
        default: () => any;
    };
    nextButton: {
        type: PropType<Button>;
        default: () => any;
    };
    divider: {
        type: StringConstructor;
        default: string;
    };
    ui: {
        type: PropType<any>;
        default: () => {};
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    ui: any;
    size: string;
    max: number;
    pageCount: number;
    activeButton: Button;
    inactiveButton: Button;
    prevButton: Button;
    nextButton: Button;
    divider: string;
}, {}>;
export default _default;
