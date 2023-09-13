/// <reference types="lodash" />
import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    value: {
        type: StringConstructor;
        default: null;
    };
    size: {
        type: StringConstructor;
        default: () => any;
        validator(value: string): boolean;
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
    kbdClass: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    value: {
        type: StringConstructor;
        default: null;
    };
    size: {
        type: StringConstructor;
        default: () => any;
        validator(value: string): boolean;
    };
    ui: {
        type: PropType<any>;
        default: () => {};
    };
}>>, {
    ui: any;
    value: string;
    size: string;
}, {}>;
export default _default;
