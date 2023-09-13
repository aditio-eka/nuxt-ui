/// <reference types="lodash" />
import type { PropType } from 'vue';
import type { VerticalNavigationLink } from '../../types/vertical-navigation';
declare const _default: import("vue").DefineComponent<{
    links: {
        type: PropType<VerticalNavigationLink[]>;
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
    wrapperClass: import("vue").ComputedRef<string>;
    omit: {
        <T extends object, K extends import("lodash").PropertyName[]>(object: T | null | undefined, ...paths: K): Pick<T, Exclude<keyof T, K[number]>>;
        <T_1 extends object, K_1 extends keyof T_1>(object: T_1 | null | undefined, ...paths: import("lodash").Many<K_1>[]): import("lodash").Omit<T_1, K_1>;
        <T_2 extends object>(object: T_2 | null | undefined, ...paths: import("lodash").Many<import("lodash").PropertyName>[]): Partial<T_2>;
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    links: {
        type: PropType<VerticalNavigationLink[]>;
        default: () => never[];
    };
    ui: {
        type: PropType<any>;
        default: () => {};
    };
}>>, {
    ui: any;
    links: VerticalNavigationLink[];
}, {}>;
export default _default;
