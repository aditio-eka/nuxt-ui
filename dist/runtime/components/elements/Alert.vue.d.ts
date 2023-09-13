/// <reference types="lodash" />
import type { PropType } from 'vue';
import type { Avatar } from '../../types/avatar';
import type { Button } from '../../types/button';
declare const _default: import("vue").DefineComponent<{
    title: {
        type: StringConstructor;
        required: true;
    };
    description: {
        type: StringConstructor;
        default: null;
    };
    icon: {
        type: StringConstructor;
        default: () => any;
    };
    avatar: {
        type: PropType<Avatar>;
        default: null;
    };
    closeButton: {
        type: PropType<Button>;
        default: () => any;
    };
    actions: {
        type: PropType<(Button & {
            click?: Function | undefined;
        })[]>;
        default: () => never[];
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
    ui: {
        type: PropType<any>;
        default: () => {};
    };
}, {
    attrs: import("vue").ComputedRef<import("lodash").Omit<{
        [x: string]: unknown;
    }, "class">>;
    ui: import("vue").ComputedRef<any>;
    alertClass: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "close"[], "close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    title: {
        type: StringConstructor;
        required: true;
    };
    description: {
        type: StringConstructor;
        default: null;
    };
    icon: {
        type: StringConstructor;
        default: () => any;
    };
    avatar: {
        type: PropType<Avatar>;
        default: null;
    };
    closeButton: {
        type: PropType<Button>;
        default: () => any;
    };
    actions: {
        type: PropType<(Button & {
            click?: Function | undefined;
        })[]>;
        default: () => never[];
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
    ui: {
        type: PropType<any>;
        default: () => {};
    };
}>> & {
    onClose?: ((...args: any[]) => any) | undefined;
}, {
    description: string;
    icon: string;
    avatar: Avatar;
    closeButton: Button;
    actions: (Button & {
        click?: Function | undefined;
    })[];
    color: string;
    ui: any;
    variant: string;
}, {}>;
export default _default;
