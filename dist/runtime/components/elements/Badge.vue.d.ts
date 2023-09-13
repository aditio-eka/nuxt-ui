/// <reference types="lodash" />
import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
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
    label: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    ui: {
        type: PropType<any>;
        default: () => {};
    };
}, {
    attrs: import("vue").ComputedRef<import("lodash").Omit<{
        [x: string]: unknown;
    }, "class">>;
    badgeClass: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
    label: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    ui: {
        type: PropType<any>;
        default: () => {};
    };
}>>, {
    color: string;
    ui: any;
    label: string | number;
    variant: string;
    size: string;
}, {}>;
export default _default;
