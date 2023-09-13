/// <reference types="lodash" />
import type { PropType } from 'vue';
import type { TabItem } from '../../types/tabs';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: NumberConstructor;
        default: undefined;
    };
    orientation: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
        validator: (value: string) => boolean;
    };
    defaultIndex: {
        type: NumberConstructor;
        default: number;
    };
    items: {
        type: PropType<TabItem[]>;
        default: () => never[];
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
    listRef: import("vue").Ref<HTMLElement | undefined>;
    itemRefs: import("vue").Ref<HTMLElement[]>;
    markerRef: import("vue").Ref<HTMLElement | undefined>;
    selectedIndex: import("vue").Ref<number>;
    wrapperClass: import("vue").ComputedRef<string>;
    onChange: (index: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: NumberConstructor;
        default: undefined;
    };
    orientation: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
        validator: (value: string) => boolean;
    };
    defaultIndex: {
        type: NumberConstructor;
        default: number;
    };
    items: {
        type: PropType<TabItem[]>;
        default: () => never[];
    };
    ui: {
        type: PropType<any>;
        default: () => {};
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    ui: any;
    modelValue: number;
    items: TabItem[];
    orientation: "horizontal" | "vertical";
    defaultIndex: number;
}, {}>;
export default _default;
