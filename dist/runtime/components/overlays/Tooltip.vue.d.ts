/// <reference types="lodash" />
import type { PropType } from 'vue';
import type { PopperOptions } from '../../types/popper';
declare const _default: import("vue").DefineComponent<{
    text: {
        type: StringConstructor;
        default: null;
    };
    prevent: {
        type: BooleanConstructor;
        default: boolean;
    };
    shortcuts: {
        type: PropType<string[]>;
        default: () => never[];
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
    trigger: import("vue").Ref<import("@vueuse/core").MaybeElement>;
    container: import("vue").Ref<import("@vueuse/core").MaybeElement>;
    open: import("vue").Ref<boolean>;
    wrapperClass: import("vue").ComputedRef<string>;
    onMouseOver: () => void;
    onMouseLeave: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    text: {
        type: StringConstructor;
        default: null;
    };
    prevent: {
        type: BooleanConstructor;
        default: boolean;
    };
    shortcuts: {
        type: PropType<string[]>;
        default: () => never[];
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
    text: string;
    openDelay: number;
    closeDelay: number;
    prevent: boolean;
    shortcuts: string[];
}, {}>;
export default _default;
