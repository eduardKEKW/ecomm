import { ListInterface } from "components/helpers/Resource";
import { SSelect, SSelectItem } from "components/styled/Buttons/Select";
import { useState } from "react";

interface Props {
    options: ListInterface[]
    onSelect: (v: ListInterface) => void
    width?: string
    selected: ListInterface
}

const Select = ({ options, onSelect, selected, width = '100%' }: Props): JSX.Element => { 
    const [showOptions, setShowOptions] = useState<boolean>(false);

    return (
        <SSelect 
            tabIndex={0} 
            show={showOptions} 
            width={width} 
            onFocus={() => setShowOptions(true)}
            onBlur={() => setShowOptions(false)}
        >

            <span onClick={() => setShowOptions(true)}>
                {selected.name}
            </span>

            <ul>
                {
                    options?.map((option) => {
                        return (
                            <SSelectItem 
                                show={showOptions}
                                selected={option.value == selected.value}
                                key={option.value}
                                onClick={() => {
                                    onSelect(option)
                                    setShowOptions(false)
                                }}
                            >
                                {option.name}
                            </SSelectItem>
                        )
                    })
                }
            </ul>

        </SSelect>  
    )
}

export default Select;