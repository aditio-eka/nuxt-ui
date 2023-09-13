/// <reference types="lodash" />
import type { ComputedRef, PropType, ComponentPublicInstance } from 'vue';
import type { UseFuseOptions } from '@vueuse/integrations/useFuse';
import type { Group, Command } from '../../types/command-palette';
import type { Button } from '../../types/button';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (ObjectConstructor | ArrayConstructor | StringConstructor | NumberConstructor)[];
        default: null;
    };
    by: {
        type: StringConstructor;
        default: string;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    nullable: {
        type: BooleanConstructor;
        default: boolean;
    };
    searchable: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    groups: {
        type: PropType<Group[]>;
        default: () => never[];
    };
    icon: {
        type: StringConstructor;
        default: () => any;
    };
    loadingIcon: {
        type: StringConstructor;
        default: () => any;
    };
    selectedIcon: {
        type: StringConstructor;
        default: () => any;
    };
    closeButton: {
        type: PropType<Button>;
        default: () => any;
    };
    emptyState: {
        type: PropType<{
            icon: string;
            label: string;
            queryLabel: string;
        }>;
        default: () => any;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    groupAttribute: {
        type: StringConstructor;
        default: string;
    };
    commandAttribute: {
        type: StringConstructor;
        default: string;
    };
    autoselect: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoclear: {
        type: BooleanConstructor;
        default: boolean;
    };
    debounce: {
        type: NumberConstructor;
        default: number;
    };
    fuse: {
        type: PropType<UseFuseOptions<Command>>;
        default: () => {};
    };
    ui: {
        type: PropType<any>;
        default: () => {};
    };
}, {
    attrs: ComputedRef<import("lodash").Omit<{
        [x: string]: unknown;
    }, "class">>;
    ui: ComputedRef<any>;
    groups: ComputedRef<{
        commands: any;
        key: string;
        active?: string | undefined;
        inactive?: string | undefined;
    }[]>;
    comboboxInput: import("vue").Ref<ComponentPublicInstance<HTMLInputElement> | undefined>;
    query: import("vue").Ref<string>;
    wrapperClass: ComputedRef<string>;
    iconName: ComputedRef<string | undefined>;
    iconClass: ComputedRef<string>;
    emptyState: ComputedRef<any>;
    onSelect: (option: Command | Command[]) => void;
    onClear: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "update:modelValue")[], "close" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (ObjectConstructor | ArrayConstructor | StringConstructor | NumberConstructor)[];
        default: null;
    };
    by: {
        type: StringConstructor;
        default: string;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    nullable: {
        type: BooleanConstructor;
        default: boolean;
    };
    searchable: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    groups: {
        type: PropType<Group[]>;
        default: () => never[];
    };
    icon: {
        type: StringConstructor;
        default: () => any;
    };
    loadingIcon: {
        type: StringConstructor;
        default: () => any;
    };
    selectedIcon: {
        type: StringConstructor;
        default: () => any;
    };
    closeButton: {
        type: PropType<Button>;
        default: () => any;
    };
    emptyState: {
        type: PropType<{
            icon: string;
            label: string;
            queryLabel: string;
        }>;
        default: () => any;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    groupAttribute: {
        type: StringConstructor;
        default: string;
    };
    commandAttribute: {
        type: StringConstructor;
        default: string;
    };
    autoselect: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoclear: {
        type: BooleanConstructor;
        default: boolean;
    };
    debounce: {
        type: NumberConstructor;
        default: number;
    };
    fuse: {
        type: PropType<UseFuseOptions<Command>>;
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
    icon: string;
    closeButton: Button;
    ui: any;
    modelValue: string | number | unknown[] | Record<string, any>;
    by: string;
    loading: boolean;
    emptyState: {
        icon: string;
        label: string;
        queryLabel: string;
    };
    multiple: boolean;
    placeholder: string;
    loadingIcon: string;
    nullable: boolean;
    selectedIcon: string;
    searchable: boolean;
    debounce: number;
    groups: Group[];
    groupAttribute: string;
    commandAttribute: string;
    autoselect: boolean;
    autoclear: boolean;
    fuse: UseFuseOptions<Command>;
}, {}>;
export default _default;
