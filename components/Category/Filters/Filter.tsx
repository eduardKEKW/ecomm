import Stars from "components/Product/Stars"
import { SCheckbox, SSideItem } from "components/styled/Layouts/Pages/Category"
import { AttributeType } from "hooks/useCategory.hook"
import { useEffect, useState } from "react"
import produce from "immer";
import { useRouter } from "next/router";
import { setUrlParams } from "helpers/helpers";

interface Props {
    attribute: AttributeType
    radio?: boolean,
    urlParamsPrefix?: string
    onFilterChange: (data: { code: string, value: any, checked: boolean, type: string }) => void
}

const Filter = ({
    attribute,
    radio = false,
    onFilterChange,
    urlParamsPrefix = '',
}: Props) => {
    const router                            = useRouter();
    const [checkedValues, setCheckedValues] = useState<{[key: string]: boolean}>(() => {
        const urlFilters = router.query[`${urlParamsPrefix}_${attribute.code}`]?.toString()?.split(',') ?? [];
        
        return urlFilters.reduce((acc, curr) => {
            acc[curr] = true;
            return acc;
        }, {});
    });
    const setSelected = (v) => {
        if(checkedValues[v]) {
            setCheckedValues(produce(checkedValues, (draft) => {
                draft[v] = false;
            }))
        } else if(radio) {
            setCheckedValues(produce(checkedValues, (draft) => {
                draft[v] = true;
            }))
        } else {
            setCheckedValues({[v]: true});
        }
    }

    useEffect(() => {
        const keys = Object
            .keys(checkedValues)
            .filter((key) => checkedValues[key])
            .join(',');

        const key   = `${urlParamsPrefix}_${attribute.code}`;

        setUrlParams({
            key: key,
            value: keys
        })
    }, [checkedValues])

    return (
        <SSideItem key={attribute.id}>
            <div>
                {attribute.adminName}
            </div>

            <ul>
                {
                    attribute.options.map(({ adminName: optionAdminName, id }) => {
                            return (
                                <li key={id}>
                                    <SCheckbox 
                                        checked={checkedValues[id]}
                                        onClick={(e) => {
                                            setSelected(id)
                                            onFilterChange({
                                                code: attribute.code,
                                                value: id,
                                                checked: e.target.checked,
                                                type: attribute.adminName
                                            })
                                        }} 
                                    /> 

                                    {
                                        attribute.adminName == 'RATING' 
                                        ?
                                            <Stars rating={+id} />
                                        :
                                            <span>{optionAdminName}</span>
                                    }
                                    
                                </li>
                            )
                    })
                }
            </ul>
        </SSideItem>
    )
}

export default Filter;