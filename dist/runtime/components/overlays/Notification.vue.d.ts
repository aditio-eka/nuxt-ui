/// <reference types="lodash" />
import type { PropType } from 'vue';
import type { NotificationAction } from '../../types/notification';
import type { Avatar } from '../../types/avatar';
import type { Button } from '../../types/button';
declare const _default: import("vue").DefineComponent<{
    id: {
        type: (StringConstructor | NumberConstructor)[];
        required: true;
    };
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
    timeout: {
        type: NumberConstructor;
        default: number;
    };
    actions: {
        type: PropType<NotificationAction[]>;
        default: () => never[];
    };
    callback: {
        type: FunctionConstructor;
        default: null;
    };
    color: {
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
    wrapperClass: import("vue").ComputedRef<string>;
    progressClass: import("vue").ComputedRef<string>;
    progressStyle: import("vue").ComputedRef<{
        width: string;
    }>;
    iconClass: import("vue").ComputedRef<string>;
    onMouseover: () => void;
    onMouseleave: () => void;
    onClose: () => void;
    onAction: (action: NotificationAction) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "close"[], "close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: (StringConstructor | NumberConstructor)[];
        required: true;
    };
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
    timeout: {
        type: NumberConstructor;
        default: number;
    };
    actions: {
        type: PropType<NotificationAction[]>;
        default: () => never[];
    };
    callback: {
        type: FunctionConstructor;
        default: null;
    };
    color: {
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
    timeout: number;
    actions: NotificationAction[];
    callback: Function;
    color: string;
    ui: any;
}, {}>;
export default _default;
