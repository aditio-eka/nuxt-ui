import * as _nuxt_schema from '@nuxt/schema';

declare const _default$1: {
    ui: {
        table: {
            wrapper: string;
            base: string;
            divide: string;
            thead: string;
            tbody: string;
            tr: {
                base: string;
                selected: string;
                active: string;
            };
            th: {
                base: string;
                padding: string;
                color: string;
                font: string;
                size: string;
            };
            td: {
                base: string;
                padding: string;
                color: string;
                font: string;
                size: string;
            };
            checkbox: {
                padding: string;
            };
            loadingState: {
                wrapper: string;
                label: string;
                icon: string;
            };
            emptyState: {
                wrapper: string;
                label: string;
                icon: string;
            };
            default: {
                sortAscIcon: string;
                sortDescIcon: string;
                sortButton: {
                    icon: string;
                    trailing: boolean;
                    square: boolean;
                    color: string;
                    variant: string;
                    class: string;
                };
                loadingState: {
                    icon: string;
                    label: string;
                };
                emptyState: {
                    icon: string;
                    label: string;
                };
            };
        };
        avatar: {
            wrapper: string;
            background: string;
            rounded: string;
            text: string;
            placeholder: string;
            size: {
                '3xs': string;
                '2xs': string;
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
                '2xl': string;
                '3xl': string;
            };
            chip: {
                base: string;
                background: string;
                position: {
                    'top-right': string;
                    'bottom-right': string;
                    'top-left': string;
                    'bottom-left': string;
                };
                size: {
                    '3xs': string;
                    '2xs': string;
                    xs: string;
                    sm: string;
                    md: string;
                    lg: string;
                    xl: string;
                    '2xl': string;
                    '3xl': string;
                };
            };
            icon: {
                base: string;
                size: {
                    '3xs': string;
                    '2xs': string;
                    xs: string;
                    sm: string;
                    md: string;
                    lg: string;
                    xl: string;
                    '2xl': string;
                    '3xl': string;
                };
            };
            default: {
                size: string;
                icon: any;
                chipColor: any;
                chipPosition: string;
            };
        };
        avatarGroup: {
            wrapper: string;
            ring: string;
            margin: string;
        };
        badge: {
            base: string;
            rounded: string;
            font: string;
            size: {
                xs: string;
                sm: string;
                md: string;
                lg: string;
            };
            color: {
                white: {
                    solid: string;
                };
                gray: {
                    solid: string;
                };
                black: {
                    solid: string;
                };
            };
            variant: {
                solid: string;
                outline: string;
                soft: string;
                subtle: string;
            };
            default: {
                size: string;
                variant: string;
                color: string;
            };
        };
        button: {
            base: string;
            font: string;
            rounded: string;
            size: {
                '2xs': string;
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
            };
            gap: {
                '2xs': string;
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
            };
            padding: {
                '2xs': string;
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
            };
            square: {
                '2xs': string;
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
            };
            color: {
                white: {
                    solid: string;
                    ghost: string;
                };
                gray: {
                    solid: string;
                    ghost: string;
                    link: string;
                };
                black: {
                    solid: string;
                    link: string;
                };
            };
            variant: {
                solid: string;
                outline: string;
                soft: string;
                ghost: string;
                link: string;
            };
            icon: {
                base: string;
                size: {
                    '2xs': string;
                    xs: string;
                    sm: string;
                    md: string;
                    lg: string;
                    xl: string;
                };
            };
            default: {
                size: string;
                variant: string;
                color: string;
                loadingIcon: string;
            };
        };
        buttonGroup: {
            wrapper: string;
            rounded: string;
            shadow: string;
        };
        dropdown: {
            wrapper: string;
            container: string;
            width: string;
            height: string;
            background: string;
            shadow: string;
            rounded: string;
            ring: string;
            base: string;
            divide: string;
            padding: string;
            item: {
                base: string;
                rounded: string;
                padding: string;
                size: string;
                active: string;
                inactive: string;
                disabled: string;
                icon: {
                    base: string;
                    active: string;
                    inactive: string;
                };
                avatar: {
                    base: string;
                    size: string;
                };
                shortcuts: string;
            };
            transition: {
                enterActiveClass: string;
                enterFromClass: string;
                enterToClass: string;
                leaveActiveClass: string;
                leaveFromClass: string;
                leaveToClass: string;
            };
            popper: {
                placement: string;
                strategy: string;
            };
        };
        kbd: {
            base: string;
            padding: string;
            size: {
                xs: string;
                sm: string;
                md: string;
            };
            rounded: string;
            font: string;
            background: string;
            ring: string;
            default: {
                size: string;
            };
        };
        accordion: {
            wrapper: string;
            item: {
                base: string;
                size: string;
                color: string;
                padding: string;
                icon: string;
            };
            transition: {
                enterActiveClass: string;
                leaveActiveClass: string;
            };
            default: {
                openIcon: string;
                closeIcon: string;
                class: string;
                variant: string;
            };
        };
        alert: {
            wrapper: string;
            title: string;
            description: string;
            shadow: string;
            rounded: string;
            padding: string;
            icon: {
                base: string;
            };
            avatar: {
                base: string;
                size: string;
            };
            color: {
                white: {
                    solid: string;
                };
            };
            variant: {
                solid: string;
                outline: string;
                soft: string;
                subtle: string;
            };
            default: {
                color: string;
                variant: string;
                icon: any;
                closeButton: any;
                actionButton: {
                    size: string;
                    color: string;
                    variant: string;
                };
            };
        };
        input: {
            wrapper: string;
            base: string;
            rounded: string;
            placeholder: string;
            size: {
                '2xs': string;
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
            };
            gap: {
                '2xs': string;
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
            };
            padding: {
                '2xs': string;
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
            };
            leading: {
                padding: {
                    '2xs': string;
                    xs: string;
                    sm: string;
                    md: string;
                    lg: string;
                    xl: string;
                };
            };
            trailing: {
                padding: {
                    '2xs': string;
                    xs: string;
                    sm: string;
                    md: string;
                    lg: string;
                    xl: string;
                };
            };
            color: {
                white: {
                    outline: string;
                };
                gray: {
                    outline: string;
                };
            };
            variant: {
                outline: string;
                none: string;
            };
            icon: {
                base: string;
                color: string;
                size: {
                    '2xs': string;
                    xs: string;
                    sm: string;
                    md: string;
                    lg: string;
                    xl: string;
                };
                leading: {
                    wrapper: string;
                    pointer: string;
                    padding: {
                        '2xs': string;
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                    };
                };
                trailing: {
                    wrapper: string;
                    pointer: string;
                    padding: {
                        '2xs': string;
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                    };
                };
            };
            default: {
                size: string;
                color: string;
                variant: string;
                loadingIcon: string;
            };
        };
        formGroup: {
            wrapper: string;
            label: {
                wrapper: string;
                base: string;
                required: string;
            };
            size: {
                '2xs': string;
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
            };
            container: string;
            description: string;
            hint: string;
            help: string;
            error: string;
        };
        textarea: {
            default: {
                size: string;
                color: string;
                variant: string;
            };
            wrapper: string;
            base: string;
            rounded: string;
            placeholder: string;
            size: {
                '2xs': string;
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
            };
            gap: {
                '2xs': string;
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
            };
            padding: {
                '2xs': string;
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
            };
            leading: {
                padding: {
                    '2xs': string;
                    xs: string;
                    sm: string;
                    md: string;
                    lg: string;
                    xl: string;
                };
            };
            trailing: {
                padding: {
                    '2xs': string;
                    xs: string;
                    sm: string;
                    md: string;
                    lg: string;
                    xl: string;
                };
            };
            color: {
                white: {
                    outline: string;
                };
                gray: {
                    outline: string;
                };
            };
            variant: {
                outline: string;
                none: string;
            };
            icon: {
                base: string;
                color: string;
                size: {
                    '2xs': string;
                    xs: string;
                    sm: string;
                    md: string;
                    lg: string;
                    xl: string;
                };
                leading: {
                    wrapper: string;
                    pointer: string;
                    padding: {
                        '2xs': string;
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                    };
                };
                trailing: {
                    wrapper: string;
                    pointer: string;
                    padding: {
                        '2xs': string;
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                    };
                };
            };
        };
        select: {
            placeholder: string;
            default: {
                size: string;
                color: string;
                variant: string;
                loadingIcon: string;
                trailingIcon: string;
            };
            wrapper: string;
            base: string;
            rounded: string;
            size: {
                '2xs': string;
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
            };
            gap: {
                '2xs': string;
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
            };
            padding: {
                '2xs': string;
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
            };
            leading: {
                padding: {
                    '2xs': string;
                    xs: string;
                    sm: string;
                    md: string;
                    lg: string;
                    xl: string;
                };
            };
            trailing: {
                padding: {
                    '2xs': string;
                    xs: string;
                    sm: string;
                    md: string;
                    lg: string;
                    xl: string;
                };
            };
            color: {
                white: {
                    outline: string;
                };
                gray: {
                    outline: string;
                };
            };
            variant: {
                outline: string;
                none: string;
            };
            icon: {
                base: string;
                color: string;
                size: {
                    '2xs': string;
                    xs: string;
                    sm: string;
                    md: string;
                    lg: string;
                    xl: string;
                };
                leading: {
                    wrapper: string;
                    pointer: string;
                    padding: {
                        '2xs': string;
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                    };
                };
                trailing: {
                    wrapper: string;
                    pointer: string;
                    padding: {
                        '2xs': string;
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                    };
                };
            };
        };
        selectMenu: {
            container: string;
            width: string;
            height: string;
            base: string;
            background: string;
            shadow: string;
            rounded: string;
            padding: string;
            ring: string;
            input: string;
            option: {
                base: string;
                rounded: string;
                padding: string;
                size: string;
                color: string;
                container: string;
                active: string;
                inactive: string;
                selected: string;
                disabled: string;
                empty: string;
                icon: {
                    base: string;
                    active: string;
                    inactive: string;
                };
                selectedIcon: {
                    wrapper: string;
                    padding: string;
                    base: string;
                };
                avatar: {
                    base: string;
                    size: string;
                };
                chip: {
                    base: string;
                };
            };
            transition: {
                leaveActiveClass: string;
                leaveFromClass: string;
                leaveToClass: string;
            };
            popper: {
                placement: string;
            };
            default: {
                selectedIcon: string;
            };
        };
        checkbox: {
            wrapper: string;
            base: string;
            rounded: string;
            color: string;
            background: string;
            border: string;
            ring: string;
            label: string;
            required: string;
            help: string;
            default: {
                color: string;
            };
        };
        radio: {
            wrapper: string;
            base: string;
            color: string;
            background: string;
            border: string;
            ring: string;
            label: string;
            required: string;
            help: string;
            default: {
                color: string;
            };
        };
        toggle: {
            base: string;
            rounded: string;
            ring: string;
            active: string;
            inactive: string;
            container: {
                base: string;
                active: string;
                inactive: string;
            };
            icon: {
                base: string;
                active: string;
                inactive: string;
                on: string;
                off: string;
            };
            default: {
                onIcon: any;
                offIcon: any;
                color: string;
            };
        };
        range: {
            wrapper: string;
            base: string;
            rounded: string;
            background: string;
            ring: string;
            progress: {
                base: string;
                rounded: string;
                background: string;
                size: {
                    sm: string;
                    md: string;
                    lg: string;
                };
            };
            thumb: {
                base: string;
                color: string;
                background: string;
                ring: string;
                size: {
                    sm: string;
                    md: string;
                    lg: string;
                };
            };
            track: {
                base: string;
                background: string;
                rounded: string;
                size: {
                    sm: string;
                    md: string;
                    lg: string;
                };
            };
            size: {
                sm: string;
                md: string;
                lg: string;
            };
            default: {
                size: string;
                color: string;
            };
        };
        card: {
            base: string;
            background: string;
            divide: string;
            ring: string;
            rounded: string;
            shadow: string;
            body: {
                base: string;
                background: string;
                padding: string;
            };
            header: {
                base: string;
                background: string;
                padding: string;
            };
            footer: {
                base: string;
                background: string;
                padding: string;
            };
        };
        container: {
            base: string;
            padding: string;
            constrained: string;
        };
        skeleton: {
            base: string;
            background: string;
            rounded: string;
        };
        verticalNavigation: {
            wrapper: string;
            base: string;
            ring: string;
            padding: string;
            width: string;
            rounded: string;
            font: string;
            size: string;
            active: string;
            inactive: string;
            label: string;
            icon: {
                base: string;
                active: string;
                inactive: string;
            };
            avatar: {
                base: string;
                size: string;
            };
            badge: {
                base: string;
                active: string;
                inactive: string;
            };
        };
        commandPalette: {
            wrapper: string;
            container: string;
            input: {
                wrapper: string;
                base: string;
                padding: string;
                height: string;
                size: string;
                icon: {
                    base: string;
                    size: string;
                    padding: string;
                };
                closeButton: string;
            };
            emptyState: {
                wrapper: string;
                label: string;
                queryLabel: string;
                icon: string;
            };
            group: {
                wrapper: string;
                label: string;
                container: string;
                command: {
                    base: string;
                    active: string;
                    inactive: string;
                    label: string;
                    prefix: string;
                    suffix: string;
                    container: string;
                    icon: {
                        base: string;
                        active: string;
                        inactive: string;
                    };
                    selectedIcon: {
                        base: string;
                    };
                    avatar: {
                        base: string;
                        size: string;
                    };
                    chip: {
                        base: string;
                    };
                    disabled: string;
                    shortcuts: string;
                };
                active: string;
                inactive: string;
            };
            default: {
                icon: string;
                loadingIcon: string;
                emptyState: {
                    icon: string;
                    label: string;
                    queryLabel: string;
                };
                closeButton: any;
                selectedIcon: string;
            };
        };
        pagination: {
            wrapper: string;
            base: string;
            rounded: string;
            default: {
                size: string;
                activeButton: {
                    color: string;
                };
                inactiveButton: {
                    color: string;
                };
                prevButton: {
                    color: string;
                    class: string;
                    icon: string;
                };
                nextButton: {
                    color: string;
                    class: string;
                    icon: string;
                };
            };
        };
        tabs: {
            wrapper: string;
            container: string;
            base: string;
            list: {
                base: string;
                background: string;
                rounded: string;
                shadow: string;
                padding: string;
                height: string;
                width: string;
                marker: {
                    wrapper: string;
                    base: string;
                    background: string;
                    rounded: string;
                    shadow: string;
                };
                tab: {
                    base: string;
                    background: string;
                    active: string;
                    inactive: string;
                    height: string;
                    padding: string;
                    size: string;
                    font: string;
                    rounded: string;
                    shadow: string;
                };
            };
        };
        modal: {
            wrapper: string;
            inner: string;
            container: string;
            padding: string;
            margin: string;
            base: string;
            overlay: {
                base: string;
                background: string;
                transition: {
                    enter: string;
                    enterFrom: string;
                    enterTo: string;
                    leave: string;
                    leaveFrom: string;
                    leaveTo: string;
                };
            };
            background: string;
            ring: string;
            rounded: string;
            shadow: string;
            width: string;
            height: string;
            transition: {
                enter: string;
                enterFrom: string;
                enterTo: string;
                leave: string;
                leaveFrom: string;
                leaveTo: string;
            };
        };
        slideover: {
            wrapper: string;
            overlay: {
                base: string;
                background: string;
                transition: {
                    enter: string;
                    enterFrom: string;
                    enterTo: string;
                    leave: string;
                    leaveFrom: string;
                    leaveTo: string;
                };
            };
            base: string;
            background: string;
            ring: string;
            rounded: string;
            padding: string;
            shadow: string;
            width: string;
            transition: {
                enter: string;
                leave: string;
            };
        };
        popover: {
            wrapper: string;
            container: string;
            width: string;
            background: string;
            shadow: string;
            rounded: string;
            ring: string;
            base: string;
            transition: {
                enterActiveClass: string;
                enterFromClass: string;
                enterToClass: string;
                leaveActiveClass: string;
                leaveFromClass: string;
                leaveToClass: string;
            };
            popper: {
                strategy: string;
            };
        };
        tooltip: {
            wrapper: string;
            container: string;
            width: string;
            background: string;
            color: string;
            shadow: string;
            rounded: string;
            ring: string;
            base: string;
            shortcuts: string;
            transition: {
                enterActiveClass: string;
                enterFromClass: string;
                enterToClass: string;
                leaveActiveClass: string;
                leaveFromClass: string;
                leaveToClass: string;
            };
            popper: {
                strategy: string;
            };
        };
        contextMenu: {
            wrapper: string;
            container: string;
            width: string;
            background: string;
            shadow: string;
            rounded: string;
            ring: string;
            base: string;
            transition: {
                enterActiveClass: string;
                enterFromClass: string;
                enterToClass: string;
                leaveActiveClass: string;
                leaveFromClass: string;
                leaveToClass: string;
            };
            popper: {
                placement: string;
                scroll: boolean;
            };
        };
        notification: {
            wrapper: string;
            container: string;
            title: string;
            description: string;
            background: string;
            shadow: string;
            rounded: string;
            padding: string;
            ring: string;
            icon: {
                base: string;
                color: string;
            };
            avatar: {
                base: string;
                size: string;
            };
            progress: {
                base: string;
                background: string;
            };
            transition: {
                enterActiveClass: string;
                enterFromClass: string;
                enterToClass: string;
                leaveActiveClass: string;
                leaveFromClass: string;
                leaveToClass: string;
            };
            default: {
                color: string;
                icon: any;
                closeButton: {
                    icon: string;
                    color: string;
                    variant: string;
                    padded: boolean;
                };
                actionButton: {
                    size: string;
                    color: string;
                };
            };
        };
        notifications: {
            wrapper: string;
            position: string;
            width: string;
            container: string;
        };
    };
};

type DeepPartial<T> = Partial<{
    [P in keyof T]: DeepPartial<T[P]> | {
        [key: string]: string;
    };
}>;
declare module '@nuxt/schema' {
    interface AppConfigInput {
        ui?: {
            primary?: string;
            gray?: string;
            colors?: string[];
        } & DeepPartial<typeof _default$1.ui>;
    }
}
interface ModuleOptions {
    /**
     * @default 'u'
     */
    prefix?: string;
    /**
     * @default false
     */
    global?: boolean;
    icons: string[] | string;
    safelistColors?: string[];
}
declare const _default: _nuxt_schema.NuxtModule<ModuleOptions>;

export { type ModuleOptions, _default as default };
