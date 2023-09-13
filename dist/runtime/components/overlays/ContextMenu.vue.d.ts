/// <reference types="lodash" />
import type { PropType, Ref } from 'vue';
import type { PopperOptions } from '../../types/popper';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    virtualElement: {
        type: ObjectConstructor;
        required: true;
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
    isOpen: import("vue").WritableComputedRef<boolean>;
    wrapperClass: import("vue").ComputedRef<string>;
    container: Ref<import("@vueuse/core").MaybeElement>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "update:modelValue")[], "close" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    virtualElement: {
        type: ObjectConstructor;
        required: true;
    };
    popper: {
        type: PropType<PopperOptions>;
        default: () => {};
    };
    ui: {
        type: PropType<any>;
        default: () => {};
    };
}>> & {
    onClose?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    ui: any;
    popper: PopperOptions;
    modelValue: boolean;
}, {}>;
export default _default;
