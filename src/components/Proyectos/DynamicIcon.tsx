import React, { CSSProperties, SVGAttributes } from "react";
import { IconContext } from "react-icons";
import loadable from '@loadable/component';

interface IProps {
    icon: string;
    size?: string;
    className?: string;
    style?: CSSProperties;
    attr?: SVGAttributes<SVGElement>;
}

const DynamicFAIcon = ({ ...props }: IProps) => {
    const Icon = loadable(() => import(`react-icons/si`), {
        resolveComponent: (el: React.JSX.Element) => {
            const key = props.icon as keyof React.JSX.Element;
            if (key in el) {
                return el[key];
            } else {
                const backupKey = "SiAmazoncloudwatch" as keyof React.JSX.Element;
                return el[backupKey];
            }
        }
    });

    const value: IconContext = {
        size: props.size,
        className: props.className,
        style: props.style,
        attr: props.attr
    };

    return (
        <IconContext.Provider value={value}>
            <Icon />
        </IconContext.Provider>
    );
};

export default DynamicFAIcon;