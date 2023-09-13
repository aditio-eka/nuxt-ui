/// <reference types="lodash" />
import type { PropType } from 'vue';
import type { AccordionItem } from '../../types/accordion';
declare const _default: import("vue").DefineComponent<{
    items: {
        type: PropType<AccordionItem[]>;
        default: () => never[];
    };
    defaultOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
    openIcon: {
        type: StringConstructor;
        default: () => any;
    };
    closeIcon: {
        type: StringConstructor;
        default: () => any;
    };
    multiple: {
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
    uiButton: import("vue").ComputedRef<any>;
    wrapperClass: import("vue").ComputedRef<string>;
    buttonRefs: import("vue").Ref<Function[]>;
    closeOthers: (itemIndex: number) => void;
    omit: {
        <T extends object, K extends import("lodash").PropertyName[]>(object: T | null | undefined, ...paths: K): Pick<T, Exclude<keyof T, K[number]>>;
        <T_1 extends object, K_1 extends keyof T_1>(object: T_1 | null | undefined, ...paths: import("lodash").Many<K_1>[]): import("lodash").Omit<T_1, K_1>;
        <T_2 extends object>(object: T_2 | null | undefined, ...paths: import("lodash").Many<import("lodash").PropertyName>[]): Partial<T_2>;
    };
    onEnter: (el: HTMLElement, done: any) => void;
    onBeforeLeave: (el: HTMLElement) => void;
    onAfterEnter: (el: HTMLElement) => void;
    onLeave: (el: HTMLElement, done: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    items: {
        type: PropType<AccordionItem[]>;
        default: () => never[];
    };
    defaultOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
    openIcon: {
        type: StringConstructor;
        default: () => any;
    };
    closeIcon: {
        type: StringConstructor;
        default: () => any;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    ui: {
        type: PropType<any>;
        default: () => {};
    };
}>>, {
    ui: any;
    defaultOpen: boolean;
    items: AccordionItem[];
    openIcon: string;
    closeIcon: string;
    multiple: boolean;
}, {}>;
export default _default;
