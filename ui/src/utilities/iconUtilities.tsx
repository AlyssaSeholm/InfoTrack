// iconUtils.ts

import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export const lookupIconByStringName = async (iconName: string): Promise<IconDefinition> => {
  const [prefix, name] = iconName.includes('-') ? iconName.split('-') : ['fas', iconName];
  const module = await import(`@fortawesome/free-${prefix === 'fab' ? 'brands' : 'solid'}-svg-icons`);
    const icon = module[`fa${name.charAt(0).toUpperCase() + name.slice(1)}`];
    if (icon) {
        return icon;
    } else {
        throw new Error(`No icon found for ${iconName}`);
    }
};
