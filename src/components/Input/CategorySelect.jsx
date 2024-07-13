import {Fragment} from "react"
import {v4 as uuidvd4} from "uuid"


export function CategorySelect({handleCurrentFilter, filters}) {
   
    return (
        <>
            <label htmlFor="category">Choose a Category:</label>

            <select onClick={handleCurrentFilter} name="categorySelect" id="category">

                {
                    filters.map(el => {
                        return(
                            <Fragment key={uuidvd4}>
                                <option value={el}>{el}</option>
                            </Fragment>
                        )
                    })

                }

            </select>
        </>
        

    )
}