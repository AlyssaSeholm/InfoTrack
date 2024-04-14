import { FC, SetStateAction, useState } from "react"
import { Chip } from "@material-tailwind/react";

export interface iChip {
    id: number;
    label: string;
}

interface InputTextWithChipsIconProps {
    labelTitle: string | null,
    inputStyle: string,
    defaultValue: string | null,
    placeholder: string | null,
    addChip: Function | null,
    removeChip: Function | null,
    updateType: string | null,
    chips: iChip[]
}

const InputTextWithChipsIcon: FC<InputTextWithChipsIconProps> = (props) => {
    const {
        labelTitle,
        defaultValue,
        placeholder,
        addChip,
        removeChip,
        chips
    } = props;

    
    const [value, setValue] = useState<string | null>(defaultValue)
    const [isFocused, setIsFocused] = useState(false);

    const updateInputValue = (val: SetStateAction<string | null>) => { setValue(val); }

    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            if (value) {
                const newChip = { id: Date.now(), label: value };
                addChip && addChip(newChip);
                setValue('');
            }
        }
    };

    const drawChips = () => {
        return (
            chips.map((chip, index) => (    
                <Chip
                key={index}
                    animate={{ mount: { y: 0 }, unmount: { y: 50 }, }}
                    value={chip.label}
                    variant="outlined"
                    className={"chip-removeable border-primary bg-primary bg-opacity-75"}            
                    onClose={() => removeChip && removeChip(chip.id)}
                />
        )))
    }

    return (
        <div className="input-text-with-chips">
            <label className={`label-text-alt pl-2 ${isFocused ? 'opacity-100' : 'opacity-50'}`}>
                Highly recommended to only add 1-2 words to search. Using more could be CAT-astrophic.
            </label>
            <label className={`input input-bordered flex items-center gap-2  ${isFocused ? 'input-primary' : 'input-accent'} bg-white bg-opacity-30`}>
                <span className="label-text">{labelTitle}</span>
                <input
                    type="text"
                    className="grow input-for-chips"
                    placeholder={placeholder || ""}
                    value={value || ""}
                    onChange={(e) => updateInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
                <div className="chips-container">
                    {drawChips()}
                </div>
            </label>
            <label className={`label-text-alt pl-2 ${isFocused ? 'opacity-100' : 'opacity-0'}`}>
                Add a word and press Enter to add it as a search keyword.
            </label>
        </div>
    );
}

InputTextWithChipsIcon.defaultProps = {
    labelTitle: '',
    defaultValue: '',
    placeholder: 'Enter text',
    updateType: 'simple',
    addChip: () => { },
    removeChip: () => { },
};


export default InputTextWithChipsIcon
