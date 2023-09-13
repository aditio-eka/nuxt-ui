/// <reference types="lodash" />
import type { PropType } from 'vue';
import type { PopperOptions } from '../../types/popper';
declare const _default: import("vue").DefineComponent<{
    mode: {
        type: PropType<"click" | "hover">;
        default: string;
        validator: (value: string) => boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    openDelay: {
        type: NumberConstructor;
        default: number;
    };
    closeDelay: {
        type: NumberConstructor;
        default: number;
    };
    popper: {
        type: PropType<PopperOptions>;
        default: () => {};
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
    popover: any;
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    mode: {
        type: PropType<"click" | "hover">;
        default: string;
        validator: (value: string) => boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    openDelay: {
        type: NumberConstructor;
        default: number;
    };
    closeDelay: {
        type: NumberConstructor;
        default: number;
    };
    popper: {
        type: PropType<PopperOptions>;
        default: () => {};
    };
    ui: {
        type: PropType<any>;
        default: () => {};
    };
}>>, {
    ui: any;
    popper: PopperOptions;
    disabled: boolean;
    mode: "click" | "hover";
    openDelay: number;
    closeDelay: number;
}, {}>;
export default _default;
