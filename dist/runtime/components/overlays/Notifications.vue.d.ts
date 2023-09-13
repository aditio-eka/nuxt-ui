/// <reference types="lodash" />
import type { PropType } from 'vue';
import type { Notification } from '../../types/notification';
declare const _default: import("vue").DefineComponent<{
    ui: {
        type: PropType<any>;
        default: () => {};
    };
}, {
    attrs: import("vue").ComputedRef<import("lodash").Omit<{
        [x: string]: unknown;
    }, "class">>;
    ui: import("vue").ComputedRef<any>;
    toast: {
        add: (notification: Partial<Notification>) => {
            id: string;
            title?: string | undefined;
            description?: string | undefined;
            icon?: string | undefined;
            avatar?: import("../../types/avatar").Avatar | undefined;
            closeButton?: import("../../types/button").Button | undefined;
            timeout?: number | undefined;
            actions?: import("../../types/notification").NotificationAction[] | undefined;
            click?: Function | undefined;
            callback?: Function | undefined;
            color?: string | undefined;
            ui?: any;
        };
        remove: (id: string) => void;
    };
    notifications: any;
    wrapperClass: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    ui: {
        type: PropType<any>;
        default: () => {};
    };
}>>, {
    ui: any;
}, {}>;
export default _default;
