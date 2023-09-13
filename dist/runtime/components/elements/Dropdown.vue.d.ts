/// <reference types="lodash" />
import type { PropType } from 'vue';
import type { DropdownItem } from '../../types/dropdown';
import type { PopperOptions } from '../../types/popper';
declare const _default: import("vue").DefineComponent<{
    items: {
        type: PropType<DropdownItem[][]>;
        default: () => never[];
    };
    mode: {
        type: PropType<"click" | "hover">;
        default: string;
        validator: (value: string) => boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    popper: {
        type: PropType<PopperOptions>;
        default: () => {};
    };
    openDelay: {
        type: NumberConstructor;
        default: number;
    };
    closeDelay: {
        type: NumberConstructor;
        default: number;
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
    trigger: import("vue").Ref<import("@vueuse/core").MaybeElement>;
    container: import("vue").Ref<import("@vueuse/core").MaybeElement>;
    containerStyle: import("vue").ComputedRef<{
        paddingTop: string;
        paddingBottom: string;
    } | {
        paddingTop?: undefined;
        paddingBottom?: undefined;
    }>;
    wrapperClass: import("vue").ComputedRef<string>;
    onMouseOver: () => void;
    onMouseLeave: () => void;
    omit: {
        <T extends object, K extends import("lodash").PropertyName[]>(object: T | null | undefined, ...paths: K): Pick<T, Exclude<keyof T, K[number]>>;
        <T_1 extends object, K_1 extends keyof T_1>(object: T_1 | null | undefined, ...paths: import("lodash").Many<K_1>[]): import("lodash").Omit<T_1, K_1>;
        <T_2 extends object>(object: T_2 | null | undefined, ...paths: import("lodash").Many<import("lodash").PropertyName>[]): Partial<T_2>;
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    items: {
        type: PropType<DropdownItem[][]>;
        default: () => never[];
    };
    mode: {
        type: PropType<"click" | "hover">;
        default: string;
        validator: (value: string) => boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    popper: {
        type: PropType<PopperOptions>;
        default: () => {};
    };
    openDelay: {
        type: NumberConstructor;
        default: number;
    };
    closeDelay: {
        type: NumberConstructor;
        default: number;
    };
    ui: {
        type: PropType<any>;
        default: () => {};
    };
}>>, {
    ui: any;
    popper: PopperOptions;
    disabled: boolean;
    items: DropdownItem[][];
    mode: "click" | "hover";
    openDelay: number;
    closeDelay: number;
}, {}>;
export default _default;
